import { motion } from "framer-motion"
import { Heart, Target, Sparkles } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">A Right Start for Little Ones</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Anjali Kids is a registered entity. A well-designed early childhood learning framework has been adopted to give a right start to the little ones. Along with a dedicated & caring staff, the transition from home to school is made as smooth as possible. We are committed to provide world-class early childhood education with globally accepted best teaching practices such as inquiry-based learning.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-3xl p-8 md:p-10 border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary/20 text-secondary flex items-center justify-center mb-6">
              <Sparkles size={28} />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">Our Vision</h4>
            <p className="text-muted-foreground leading-relaxed font-medium">
              Empowering young minds to explore, learn, and grow in a nurturing environment, Anjali Kids aims to be a beacon of excellence in early childhood education, fostering holistic development and lifelong learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-background rounded-3xl p-8 md:p-10 border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6">
              <Target size={28} />
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">Our Mission</h4>
            <p className="text-muted-foreground leading-relaxed font-medium">
              To provide a nurturing and stimulating environment that fosters holistic development, creativity, and critical thinking in young minds, ensuring they reach their full potential.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
