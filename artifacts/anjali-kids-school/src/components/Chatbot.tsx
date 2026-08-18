import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User, Loader2, Mic, MicOff, Volume2, VolumeX } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

const SUGGESTED = [
  "School ke programs kya hain?",
  "Teachers ke baare mein batao",
  "Admission kaise hogi?",
  "School timings kya hain?",
]

// Browser SpeechRecognition types
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList
}
interface SpeechRecognitionErrorEvent extends Event {
  error: string
}
declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognitionInstance
    webkitSpeechRecognition: new () => SpeechRecognitionInstance
  }
}
interface SpeechRecognitionInstance extends EventTarget {
  lang: string
  continuous: boolean
  interimResults: boolean
  start(): void
  stop(): void
  onresult: ((e: SpeechRecognitionEvent) => void) | null
  onerror: ((e: SpeechRecognitionErrorEvent) => void) | null
  onend: (() => void) | null
}

function getSpeechRecognition(): (new () => SpeechRecognitionInstance) | null {
  if (typeof window === "undefined") return null
  return window.SpeechRecognition ?? window.webkitSpeechRecognition ?? null
}

function isHindi(text: string): boolean {
  const hindiChars = text.match(/[\u0900-\u097F]/g)
  return hindiChars !== null && hindiChars.length > text.length * 0.3
}

function speak(text: string, onWordBoundary?: (charIndex: number, charLength: number) => void, onEnd?: () => void) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  const voices = window.speechSynthesis.getVoices()
  const hindi = isHindi(text)
  if (hindi) {
    const hindiVoice = voices.find((v) => v.lang.startsWith("hi"))
    if (hindiVoice) utterance.voice = hindiVoice
    utterance.lang = "hi-IN"
  } else {
    const englishVoice = voices.find((v) => v.lang.startsWith("en"))
    if (englishVoice) utterance.voice = englishVoice
    utterance.lang = "en-US"
  }
  utterance.rate = 0.95
  utterance.pitch = 1
  if (onWordBoundary) {
    utterance.onboundary = (e: SpeechSynthesisEvent) => {
      if (e.name === "word") onWordBoundary(e.charIndex, e.charLength)
    }
  }
  if (onEnd) utterance.onend = onEnd
  window.speechSynthesis.speak(utterance)
}

function renderHighlightedText(text: string, charIndex: number, charLength: number) {
  const before = text.slice(0, charIndex)
  const highlight = text.slice(charIndex, charIndex + charLength)
  const after = text.slice(charIndex + charLength)
  return (
    <>
      {before}
      <span className="bg-orange-400 text-white px-0.5 rounded font-semibold transition-all duration-100">{highlight}</span>
      {after}
    </>
  )
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Namaste! 👋 Main Anjali Kids Play School ka assistant hoon. Aap type karke ya mic button se bol kar kuch bhi pooch sakte hain!",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [recording, setRecording] = useState(false)
  const [voiceReply, setVoiceReply] = useState(true)
  const [noSpeechSupport, setNoSpeechSupport] = useState(false)
  const [speakingIndex, setSpeakingIndex] = useState(-1)
  const [highlightCharIndex, setHighlightCharIndex] = useState(0)
  const [highlightCharLength, setHighlightCharLength] = useState(0)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null)

  useEffect(() => {
    if (!getSpeechRecognition()) setNoSpeechSupport(true)
  }, [])

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" })
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open, messages])

  // Stop speech when chat closes
  useEffect(() => {
    if (!open) {
      window.speechSynthesis?.cancel()
      setSpeakingIndex(-1)
      setHighlightCharIndex(0)
      setHighlightCharLength(0)
    }
  }, [open])

  const send = useCallback(
    async (text?: string) => {
      const msg = (text ?? input).trim()
      if (!msg || loading) return
      setInput("")
      setSpeakingIndex(-1)
      setHighlightCharIndex(0)
      setHighlightCharLength(0)
      window.speechSynthesis?.cancel()

      const userMsg: Message = { role: "user", content: msg }
      const history = [...messages, userMsg]
      setMessages(history)
      setLoading(true)

      try {
        const res = await fetch(`${import.meta.env.BASE_URL}api/chat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: msg,
            history: messages.slice(-10).map((m) => ({ role: m.role, content: m.content })),
          }),
        })
        const data = await res.json()
        const reply = data.reply ?? "Sorry, kuch error hua."
        const newMessages: Message[] = [...history, { role: "assistant", content: reply }]
        setMessages(newMessages)
        if (voiceReply) {
          const msgIdx = newMessages.length - 1
          setSpeakingIndex(msgIdx)
          setHighlightCharIndex(0)
          setHighlightCharLength(0)
          speak(
            reply,
            (charIndex, charLength) => {
              setHighlightCharIndex(charIndex)
              setHighlightCharLength(charLength)
            },
            () => {
              setSpeakingIndex(-1)
              setHighlightCharIndex(0)
              setHighlightCharLength(0)
            },
          )
        }
      } catch {
        const errMsg = "Network error. Please thodi der baad try karein."
        const newErrMessages = [...history, { role: "assistant", content: errMsg }]
        setMessages(newErrMessages)
        if (voiceReply) {
          const msgIdx = newErrMessages.length - 1
          setSpeakingIndex(msgIdx)
          setHighlightCharIndex(0)
          setHighlightCharLength(0)
          speak(
            errMsg,
            (charIndex, charLength) => {
              setHighlightCharIndex(charIndex)
              setHighlightCharLength(charLength)
            },
            () => {
              setSpeakingIndex(-1)
              setHighlightCharIndex(0)
              setHighlightCharLength(0)
            },
          )
        }
      } finally {
        setLoading(false)
      }
    },
    [input, loading, messages, voiceReply],
  )

  const startRecording = () => {
    const SR = getSpeechRecognition()
    if (!SR) return

    window.speechSynthesis?.cancel()
    const recognition = new SR()
    recognition.lang = "hi-IN"
    recognition.continuous = false
    recognition.interimResults = false

    recognition.onresult = (e: SpeechRecognitionEvent) => {
      const transcript = e.results[0]?.[0]?.transcript ?? ""
      if (transcript.trim()) {
        setInput(transcript.trim())
        setRecording(false)
        // Auto-send after a short delay so input updates first
        setTimeout(() => send(transcript.trim()), 100)
      }
    }

    recognition.onerror = () => setRecording(false)
    recognition.onend = () => setRecording(false)

    recognitionRef.current = recognition
    recognition.start()
    setRecording(true)
  }

  const stopRecording = () => {
    recognitionRef.current?.stop()
    setRecording(false)
  }

  const toggleRecording = () => {
    if (recording) stopRecording()
    else startRecording()
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chatbot"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-300/50 flex items-center justify-center text-white"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-1.5rem)] bg-white rounded-3xl shadow-2xl shadow-orange-100/60 border border-orange-100 flex flex-col overflow-hidden"
            style={{ maxHeight: "75vh" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight">Anjali Kids Assistant</p>
                <p className="text-orange-100 text-xs">Hindi & English — Type ya Bol kar poochhen</p>
              </div>
              {/* Voice reply toggle */}
              <button
                onClick={() => {
                  setVoiceReply((v) => !v)
                  if (voiceReply) {
                    window.speechSynthesis?.cancel()
                    setSpeakingIndex(-1)
                    setHighlightCharIndex(0)
                    setHighlightCharLength(0)
                  }
                }}
                title={voiceReply ? "Voice reply band karo" : "Voice reply chalu karo"}
                className="ml-auto w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                {voiceReply ? <Volume2 size={16} className="text-white" /> : <VolumeX size={16} className="text-orange-200" />}
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-orange-50/30" style={{ minHeight: 0 }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex items-end gap-2 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center ${m.role === "user" ? "bg-orange-500" : "bg-white border border-orange-200"}`}>
                    {m.role === "user" ? (
                      <User size={14} className="text-white" />
                    ) : (
                      <Bot size={14} className="text-orange-500" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-br-sm"
                        : "bg-white text-gray-700 shadow-sm border border-orange-100 rounded-bl-sm"
                    }`}
                  >
                    {i === speakingIndex && highlightCharLength > 0
                      ? renderHighlightedText(m.content, highlightCharIndex, highlightCharLength)
                      : m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex items-end gap-2">
                  <div className="w-7 h-7 rounded-full bg-white border border-orange-200 flex items-center justify-center">
                    <Bot size={14} className="text-orange-500" />
                  </div>
                  <div className="bg-white border border-orange-100 shadow-sm rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Suggested questions (only at start) */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 pt-1 flex flex-wrap gap-2 bg-white border-t border-orange-50">
                {SUGGESTED.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-xs bg-orange-50 hover:bg-orange-100 text-orange-600 font-medium px-3 py-1.5 rounded-full border border-orange-200 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Recording indicator */}
            <AnimatePresence>
              {recording && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-50 border-t border-red-100 px-4 py-2 flex items-center gap-2"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs text-red-600 font-medium">Sun raha hoon… bol dijiye</span>
                  <span className="ml-auto text-xs text-red-400">Mic band karne ke liye dobara dabaiye</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <div className="px-3 py-3 bg-white border-t border-orange-100 flex items-center gap-2">
              {/* Mic button */}
              {!noSpeechSupport && (
                <button
                  onClick={toggleRecording}
                  disabled={loading}
                  title={recording ? "Recording band karo" : "Bol kar poochhen"}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                    recording
                      ? "bg-red-500 text-white shadow-md shadow-red-200 scale-105"
                      : "bg-orange-50 border border-orange-200 text-orange-500 hover:bg-orange-100 disabled:opacity-40"
                  }`}
                >
                  {recording ? <MicOff size={16} /> : <Mic size={16} />}
                </button>
              )}

              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder={recording ? "Sun raha hoon…" : "Kuch bhi poochhen ya Mic use karein…"}
                disabled={recording}
                className="flex-1 text-sm bg-orange-50 border border-orange-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-gray-400 transition disabled:opacity-60"
              />

              <button
                onClick={() => send()}
                disabled={!input.trim() || loading || recording}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white shadow disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-orange-300 transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
