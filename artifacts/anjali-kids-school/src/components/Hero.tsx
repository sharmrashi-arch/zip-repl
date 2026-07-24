import { motion } from "framer-motion"
import heroImage from "@assets/generated_images/hero.jpg"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Full-bleed background image */}
      <img
        src={heroImage}
        alt="Anjali Kids Play School"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark gradient overlay — strong on left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
      {/* Extra bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-6 md:px-12 py-24">
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Admissions Open for 2025–26
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6"
          >
            Welcome to{" "}
            <span className="text-orange-400">Anjali Kids</span>{" "}
            Play School
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/80 font-medium leading-relaxed mb-10 max-w-xl"
          >
            Nurturing young minds with love, care, and world-class early childhood education in Pundri, Haryana. Giving every child the right start in life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Enroll Your Child →
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/40 text-white font-bold text-base px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Programs
            </a>
          </motion.div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: "5★", label: "Google Rating" },
              { value: "2.5–4.5", label: "Years Age Group" },
              { value: "3+", label: "Expert Teachers" },
              { value: "April", label: "Session Starts" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15, type: "spring", stiffness: 260, damping: 18 }}
                className="flex flex-col"
              >
                <motion.span
                  className="text-2xl font-extrabold text-orange-400"
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2, delay: 1.2 + i * 0.15, repeat: Infinity, repeatDelay: 3 }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-xs font-semibold text-white/60 uppercase tracking-wide">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide dots (decorative, like ZedKing) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        <span className="w-3 h-3 rounded-full bg-orange-500" />
        <span className="w-8 h-3 rounded-full bg-white/40" />
        <span className="w-3 h-3 rounded-full bg-white/40" />
      </div>
    </section>
  )
}
