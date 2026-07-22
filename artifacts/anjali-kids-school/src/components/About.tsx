import { motion } from "framer-motion"
import { Target, Sparkles } from "lucide-react"

import img1 from "@assets/4_image_1784612296095.jpg"
import img2 from "@assets/5_image_1784612309341.jfif"
import img3 from "@assets/7_image_1784612342920.jpg"
import img4 from "@assets/8_image_1784612353936.jpg"

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
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

        {/* School Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 max-w-5xl mx-auto"
        >
          {[img1, img2, img3, img4].map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md aspect-square group"
            >
              <img
                src={src}
                alt={`School activity ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={img2}
                alt="Our Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Sparkles size={22} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">Our Vision</h4>
              </div>
            </div>
            <div className="bg-background p-7">
              <p className="text-muted-foreground leading-relaxed font-medium">
                Empowering young minds to explore, learn, and grow in a nurturing environment, Anjali Kids aims to be a beacon of excellence in early childhood education, fostering holistic development and lifelong learning.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={img3}
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Target size={22} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">Our Mission</h4>
              </div>
            </div>
            <div className="bg-background p-7">
              <p className="text-muted-foreground leading-relaxed font-medium">
                To provide a nurturing and stimulating environment that fosters holistic development, creativity, and critical thinking in young minds, ensuring they reach their full potential.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
