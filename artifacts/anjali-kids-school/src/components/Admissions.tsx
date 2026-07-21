import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { ClipboardCheck, CalendarHeart, PhoneCall, Smile } from "lucide-react"

const steps = [
  {
    icon: CalendarHeart,
    title: "1. Academic Year",
    desc: "Our sessions begin in April. We recommend inquiring early to secure your spot.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Smile,
    title: "2. Visit Together",
    desc: "Children must accompany parents for enrollment. Let them feel the space!",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: ClipboardCheck,
    title: "3. No Interviews",
    desc: "We believe in a stress-free, child-friendly enrollment process. No tests.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: PhoneCall,
    title: "4. Get in Touch",
    desc: "Call us anytime. We are open 7 days a week to answer your questions.",
    color: "bg-purple-100 text-purple-600"
  }
]

export default function Admissions() {
  return (
    <section id="admissions" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-primary/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Join Our Family</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Simple Admissions</h3>
              <p className="text-lg text-muted-foreground font-medium mb-8 leading-relaxed">
                We make the transition from home to school as smooth as possible for both you and your child. Join a community that cares.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 py-6">
                  <a href="tel:+919768144444">Call +91 97681 44444</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white border-2">
                  <a href="#contact">Find on Map</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {steps.map((step, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${step.color}`}>
                    <step.icon size={24} />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground font-medium">{step.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
