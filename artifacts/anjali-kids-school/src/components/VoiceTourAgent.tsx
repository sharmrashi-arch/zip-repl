import { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Square, Volume2 } from "lucide-react"
import { useLocation } from "wouter"

const TOUR_STOPS = [
  { id: "hero", label: "Welcome", text: "Namaste! Main Anjali Kids ki voice guide hoon. Chaliye school website ka ek pyara sa tour shuru karte hain." },
  { id: "about", label: "About us", text: "Yeh hamara About section hai. Anjali Kids Play School Pundri, Haryana mein bachchon ke khushi bhare learning journey ke liye bana hai." },
  { id: "programs", label: "Programs", text: "Yahan aap Playgroup, Nursery aur LKG Pre-KG programs dekh sakte hain. Har program activity based aur bachchon ki age ke hisaab se design kiya gaya hai." },
  { id: "why-choose-us", label: "Why choose us", text: "Is section mein school ki special baatein hain: safe environment, caring teachers aur fun ke saath learning." },
  { id: "teachers", label: "Teachers", text: "Yeh hain hamare caring educators. Hamare teachers bachchon ko pyaar, patience aur personal attention ke saath sikhate hain." },
  { id: "gallery", label: "Gallery", text: "Gallery mein aap art and craft, story time, outdoor play, music, yoga aur classroom activities ki jhalak dekh sakte hain." },
  { id: "testimonials", label: "Parents' words", text: "Yahan parents ke experiences hain, jo school ke caring environment aur bachchon ke development ko share karte hain." },
  { id: "admissions", label: "Admissions", text: "Admission process simple aur stress-free hai. Aap call karke ya Admissions page par form bhar kar enquiry bhej sakte hain." },
  { id: "map", label: "Location", text: "Yahan school ki location map ke saath di hui hai, jisse aap aasani se visit plan kar sakte hain." },
  { id: "contact", label: "Contact", text: "Aur yeh Contact section hai. Phone number, address aur school timing yahin mil jayenge. Tour ke liye dhanyavaad!" },
]

const pause = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms))

export default function VoiceTourAgent() {
  const [location, setLocation] = useLocation()
  const [running, setRunning] = useState(false)
  const [currentStop, setCurrentStop] = useState("")
  const cancelled = useRef(false)

  const speak = useCallback((text: string) => new Promise<void>((resolve) => {
    if (!window.speechSynthesis) { resolve(); return }
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "hi-IN"
    utterance.rate = 0.9
    utterance.pitch = 1.08
    const hindiVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.startsWith("hi"))
    if (hindiVoice) utterance.voice = hindiVoice
    utterance.onend = () => resolve()
    utterance.onerror = () => resolve()
    window.speechSynthesis.speak(utterance)
  }), [])

  const stopTour = useCallback(() => {
    cancelled.current = true
    window.speechSynthesis?.cancel()
    setRunning(false)
    setCurrentStop("")
  }, [])

  const startTour = useCallback(async () => {
    if (running) return
    cancelled.current = false
    setRunning(true)
    window.speechSynthesis?.cancel()

    if (location !== "/") {
      setLocation("/")
      await pause(700)
    }

    for (const stop of TOUR_STOPS) {
      if (cancelled.current) break
      const section = document.getElementById(stop.id)
      if (!section) continue
      setCurrentStop(stop.label)
      section.scrollIntoView({ behavior: "smooth", block: "start" })
      await pause(850)
      if (cancelled.current) break
      await speak(stop.text)
      if (!cancelled.current) await pause(700)
    }

    if (!cancelled.current) {
      window.speechSynthesis?.cancel()
      setRunning(false)
      setCurrentStop("")
    }
  }, [location, running, setLocation, speak])

  useEffect(() => () => { window.speechSynthesis?.cancel() }, [])

  return (
    <div className="fixed bottom-3 right-20 z-50 flex w-36 flex-col items-center sm:bottom-5 sm:right-24 sm:w-40">
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
        animate={running ? { y: [0, -10, 0], rotate: [0, -2, 2, 0] } : { y: [0, -7, 0] }}
        transition={{ duration: running ? 1.05 : 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="h-44 w-44 object-contain drop-shadow-2xl sm:h-52 sm:w-52"
      />

      <button
        type="button"
        onClick={running ? stopTour : startTour}
        aria-label={running ? "Stop website tour" : "Start website voice tour"}
        className={`relative -mt-1 flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-extrabold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 ${running ? "bg-red-500" : "bg-gradient-to-r from-orange-400 to-orange-600"}`}
      >
        {running ? <Square size={13} fill="white" /> : <Volume2 size={15} />}
        {running ? "Stop Tour" : "Start Tour"}
      </button>
    </div>
  )
}
