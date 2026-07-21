import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const reasons = [
  "5-star rated school on Google",
  "Registered entity with certified curriculum",
  "Inquiry-based globally-accepted teaching practices",
  "Safe and joyful environment",
  "Dedicated and caring staff",
  "Smooth home-to-school transition",
  "Academic year starting April",
  "Open 7 days a week"
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative z-10">
              <div className="absolute inset-0 bg-accent rounded-[40px] rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-primary rounded-[40px] -rotate-3 opacity-20" />
              <div className="absolute inset-0 bg-white rounded-[40px] border border-border shadow-xl flex items-center justify-center p-8 text-center flex-col">
                <div className="w-24 h-24 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                  <span className="text-4xl">🏆</span>
                </div>
                <h3 className="text-3xl font-extrabold text-foreground mb-4">Excellence in Education</h3>
                <p className="text-muted-foreground font-medium">
                  We blend love, care, and proven methodologies to give your child the best foundation possible.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8">The Anjali Kids Difference</h3>
            
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                  <span className="font-medium text-foreground">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
