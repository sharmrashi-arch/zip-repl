import { useCallback, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Volume2, Square } from "lucide-react"
import { useLocation } from "wouter"

const TEACHER_DETAILS = [
  {
    name: "Sonia Gupta",
    intro: "Hamari pehli teacher hain Miss Sonia Gupta, jo hamari Lead Teacher aur Head of Curriculum hain.",
    detail: "Inhone M.A. Education, B.Ed. aur Montessori certification kiya hua hai. Unka experience 8 saal se bhi zyada ka hai. Inhone Pundri ke hundreds of bachchon ko ghar se school tak ka confident aur khushi bhara safar karwaya hai. Inki specialties hain inquiry based learning, early language and literacy, child psychology aur parent communication.",
  },
  {
    name: "Ansul Aggarwal",
    intro: "Dusri teacher hain Miss Ansul Aggarwal, jo hamari Activity aur Arts Teacher hain.",
    detail: "Inhonne B.A. Fine Arts kiya hai aur Early Childhood Education mein diploma hai. Unka 5 saal ka experience hai. Yeh saari art and craft, music aur movement activities aur festival celebrations karwati hain. Bachchon aur parents dono ko Yeh bahut pasand aati hain.",
  },
  {
    name: "Manisha Solanki",
    intro: "Teen number ki teacher hain Miss Manisha Solanki, jo hamari Senior Teacher aur Care Coordinator hain.",
    detail: "Inhone B.Ed Early Childhood kiya hai aur Child Development mein diploma hai. Unka 6 saal ka experience hai. Yeh LKG aur Pre-KG ke bachchon ko primary school ke liye taiyaar karti hain. Inki specialties hain school readiness, number aur letter recognition, aur fine motor skills. Yeh parents ke saath regular feedback bhi share karti hain.",
  },
]

const TOUR_STOPS = [
  { id: "hero", label: "Welcome", text: "Namaste! Main Anjali Kids ki voice guide hoon. Chaliye school website ka ek pyara sa tour shuru karte hain." },
  { id: "about", label: "About us", text: "Yeh hamara About section hai. Anjali Kids Play School Pundri, Haryana mein bachchon ke khushi bhare learning journey ke liye bana hai." },
  { id: "programs", label: "Programs", text: "Yahan aap Playgroup, Nursery aur LKG Pre-KG programs dekh sakte hain. Har program activity based aur bachchon ki age ke hisaab se design kiya gaya hai." },
  { id: "why-choose-us", label: "Why choose us", text: "Is section mein school ki special baatein hain: safe environment, caring teachers aur fun ke saath learning." },
  { id: "teachers", label: "Teachers", text: "Yeh hain hamare caring educators. Chaliye main aapko hamari teeno teachers ki puri detail batati hoon." },
  { id: "gallery", label: "Gallery", text: "Gallery mein aap art and craft, story time, outdoor play, music, yoga aur classroom activities ki jhalak dekh sakte hain." },
  { id: "testimonials", label: "Parents' words", text: "Yahan parents ke experiences hain, jo school ke caring environment aur bachchon ke development ko share karte hain." },
  { id: "admissions", label: "Admissions", text: "Admission process simple aur stress-free hai. Aap call karke ya Admissions page par form bhar kar enquiry bhej sakte hain." },
  { id: "map", label: "Location", text: "Yahan school ki location map ke saath di hui hai, jisse aap aasani se visit plan kar sakte hain." },
  { id: "contact", label: "Contact", text: "Aur yeh Contact section hai. Phone number, address aur school timing yahin mil jayenge. Tour ke liye dhanyavaad!" },
]

const teachersStops: { stopId: string; text: string }[] = [
  { stopId: "teachers", text: "Yeh hain hamare caring educators. Chaliye main aapko hamari teeno teachers ki puri detail batati hoon." },
  { stopId: "teachers", text: TEACHER_DETAILS[0].intro },
  { stopId: "teachers", text: TEACHER_DETAILS[0].detail },
  { stopId: "teachers", text: TEACHER_DETAILS[1].intro },
  { stopId: "teachers", text: TEACHER_DETAILS[1].detail },
  { stopId: "teachers", text: TEACHER_DETAILS[2].intro },
  { stopId: "teachers", text: TEACHER_DETAILS[2].detail },
]

const pause = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms))

function splitWords(text: string) {
  return text.split(/\s+/).filter(Boolean)
}

export default function VoiceTourAgent() {
  const [location, setLocation] = useLocation()
  const [running, setRunning] = useState(false)
  const [currentStop, setCurrentStop] = useState("")
  const [showPopup, setShowPopup] = useState(false)
  const [captionText, setCaptionText] = useState("")
  const [captionWords, setCaptionWords] = useState<number>(-1)
  const cancelled = useRef(false)
  const popupRef = useRef<HTMLDivElement>(null)
  const highlightTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const clearHighlightTimer = useCallback(() => {
    if (highlightTimerRef.current) {
      clearInterval(highlightTimerRef.current)
      highlightTimerRef.current = null
    }
  }, [])

  const speak = useCallback(
    (text: string) =>
      new Promise<void>((resolve) => {
        if (!window.speechSynthesis) { resolve(); return }
        window.speechSynthesis.cancel()
        clearHighlightTimer()

        setCaptionText(text)
        setCaptionWords(-1)

        const words = splitWords(text)
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.lang = "hi-IN"
        utterance.rate = 0.9
        utterance.pitch = 1.08
        const hindiVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.startsWith("hi"))
        if (hindiVoice) utterance.voice = hindiVoice

        let wordIdx = 0
        const cleanup = () => clearHighlightTimer()
        const finish = () => {
          cleanup()
          setCaptionWords(words.length)
          setTimeout(() => { resolve() }, 350)
        }

        utterance.onboundary = (e: SpeechSynthesisEvent) => {
          if (e.name === "word") {
            cleanup()
            setCaptionWords(wordIdx)
            wordIdx++
          }
        }
        utterance.onend = () => { finish() }
        utterance.onerror = () => { cleanup(); resolve() }

        const hasBoundary = "onboundary" in utterance
        const speakRate = utterance.rate
        setCaptionWords(0)

        if (!hasBoundary) {
          const msPerWord = Math.round((words.length * 300) / speakRate)
          wordIdx = 1
          highlightTimerRef.current = setInterval(() => {
            setCaptionWords(wordIdx)
            wordIdx++
            if (wordIdx >= words.length) cleanup()
          }, msPerWord)
        }

        window.speechSynthesis.speak(utterance)
      }),
    [clearHighlightTimer],
  )

  const stopTour = useCallback(() => {
    cancelled.current = true
    window.speechSynthesis?.cancel()
    clearHighlightTimer()
    setRunning(false)
    setCurrentStop("")
    setCaptionText("")
    setCaptionWords(-1)
  }, [clearHighlightTimer])

  const startTour = useCallback(async () => {
    if (running) return
    cancelled.current = false
    setRunning(true)
    setShowPopup(false)
    window.speechSynthesis?.cancel()

    if (location !== "/") {
      setLocation("/")
      await pause(700)
    }

    const stops: Array<{ stopId: string; text: string }> = []
    for (const stop of TOUR_STOPS) {
      stops.push({ stopId: stop.id, text: stop.text })
      if (stop.id === "teachers") {
        teachersStops.forEach((s) => stops.push({ stopId: s.stopId, text: s.text }))
      }
    }

    for (const stop of stops) {
      if (cancelled.current) break
      const section = document.getElementById(stop.stopId)
      if (!section) continue
      const tourStop = TOUR_STOPS.find((t) => t.id === stop.stopId)
      setCurrentStop(tourStop?.label ?? stop.stopId)
      section.scrollIntoView({ behavior: "smooth", block: "start" })
      await pause(850)
      if (cancelled.current) break
      await speak(stop.text)
      if (!cancelled.current) await pause(500)
    }

    if (!cancelled.current) {
      window.speechSynthesis?.cancel()
      setRunning(false)
      setCurrentStop("")
      setCaptionText("")
      setCaptionWords(-1)
    }
  }, [location, running, setLocation, speak])

  useEffect(() => () => { window.speechSynthesis?.cancel() }, [])

  useEffect(() => {
    if (!showPopup) return
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowPopup(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [showPopup])

  const handleRobotClick = useCallback(() => {
    if (running) return
    setShowPopup((prev) => !prev)
  }, [running])

  const captionWordsArray = splitWords(captionText)

  return (
    <div className="fixed bottom-3 right-20 z-50 flex flex-col items-end sm:bottom-5 sm:right-24">
      {/* White caption box (Live subtitles) */}
      <AnimatePresence>
        {running && captionText && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 max-w-xs sm:max-w-sm w-full rounded-2xl bg-white px-4 py-3 shadow-2xl shadow-orange-200/60 ring-1 ring-orange-100 overflow-hidden"
            aria-live="polite"
          >
            <div className="flex items-center gap-2 mb-2">
              <Volume2 size={14} className="text-orange-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500">
                Live captions
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-800">
              {captionWordsArray.map((word, i) => (
                <span
                  key={i}
                  className={
                    i <= captionWords
                      ? "font-semibold text-orange-600"
                      : "text-gray-500"
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopup && !running && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-3 w-72 bg-white rounded-2xl shadow-2xl shadow-orange-200/60 border border-orange-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-2">
              <p className="text-sm font-semibold text-gray-800 leading-snug">
                Welcome to Anjali Kids Play School!
              </p>
              <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">
                Aap kaise hain? Main aapka virtual assistant hoon. Kya aap chahte hain ki main aapko humari website ka complete tour karwau?
              </p>
            </div>

            <div className="px-4 pb-4 pt-2 flex gap-2">
              <button
                onClick={() => setShowPopup(false)}
                className="flex-1 py-2 px-3 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                No, thanks
              </button>
              <button
                onClick={startTour}
                className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-200/50"
              >
                <Play size={12} fill="white" />
                Start Tour
              </button>
            </div>

            <div className="absolute -bottom-2 right-10 w-4 h-4 bg-white border-r border-b border-orange-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {running && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-1 w-40 rounded-2xl bg-white px-3 py-2 text-center text-xs font-bold text-orange-600 shadow-xl ring-1 ring-orange-100"
          aria-live="polite"
        >
          <span className="block text-[10px] uppercase tracking-wide text-orange-400">Tour in progress</span>
          {currentStop}
        </motion.div>
      )}

      <motion.img
        src="/voice-agent.webp"
        alt="Anjali Kids voice tour robot"
        onClick={handleRobotClick}
        animate={running ? { y: [0, -10, 0], rotate: [0, -2, 2, 0] } : { y: [0, -7, 0] }}
        transition={{ duration: running ? 1.05 : 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="h-44 w-44 object-contain drop-shadow-2xl sm:h-52 sm:w-52 cursor-pointer"
      />

      {running && (
        <button
          type="button"
          onClick={stopTour}
          aria-label="Stop website tour"
          className="relative -mt-1 flex items-center gap-1.5 rounded-full bg-red-500 px-4 py-2 text-xs font-extrabold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <Square size={13} fill="white" />
          Stop Tour
        </button>
      )}
    </div>
  )
}
