import { useRef } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Neha Sharma",
    review: "Anjali Kids' Play School is a nurturing environment where my child thrives. The teachers are dedicated, and the facilities are excellent. Highly recommend for early childhood education!",
    initials: "NS",
    color: "bg-pink-100 text-pink-600"
  },
  {
    name: "Jyoti T",
    review: "Much satisfied with everything. Well structured and nicely organised activities. Nurturing with so much love and raising confident kids.",
    initials: "JT",
    color: "bg-blue-100 text-blue-600"
  },
  {
    name: "Bharti Saini",
    review: "It's the right place for all over growth of your child.",
    initials: "BS",
    color: "bg-green-100 text-green-600"
  },
  {
    name: "Jitender Garttan",
    review: "Very good",
    initials: "JG",
    color: "bg-orange-100 text-orange-600"
  }
]

// Duplicate for seamless loop
const looped = [...testimonials, ...testimonials]

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Parent Reviews</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">What Parents Say</h3>
            <p className="text-lg text-muted-foreground font-medium">
              We are proud of our 5-star Google rating. Here is what our community thinks about us.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Marquee track — no container restriction so it bleeds edge-to-edge */}
      <div className="w-full overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        >
          {looped.map((test, i) => (
            <div
              key={i}
              className="w-72 flex-shrink-0 bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col relative"
            >
              <Quote className="text-primary/20 absolute top-6 right-6 w-10 h-10" />
              <div className="flex text-amber-400 mb-4 relative z-10">
                {'★★★★★'.split('').map((star, idx) => <span key={idx}>{star}</span>)}
              </div>
              <p className="text-foreground font-medium leading-relaxed mb-6 flex-grow relative z-10 text-sm">
                "{test.review}"
              </p>
              <div className="flex items-center gap-3 relative z-10 mt-auto">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${test.color}`}>
                  {test.initials}
                </div>
                <div>
                  <h5 className="font-bold text-foreground text-sm">{test.name}</h5>
                  <p className="text-xs text-muted-foreground">Parent</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
