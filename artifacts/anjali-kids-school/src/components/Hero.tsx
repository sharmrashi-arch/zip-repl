import { useEffect, useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Link } from "wouter"
const heroImage = "/hero-banner-preschool.webp"
import galleryImg1 from "@assets/hero-slide-kids-playground.webp"
import galleryImg2 from "@assets/hero-slide-kids-classroom.webp"

const slides = [heroImage, galleryImg1, galleryImg2]

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
}

const descWords = "Nurturing young minds with love, care, and world-class early childhood education in Pundri, Haryana. Giving every child the right start in life.".split(" ")
const headingWords = ["Welcome", "to", "Anjali", "Kids", "Play", "School"]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full min-h-[70vh] max-h-[500px] sm:max-h-[550px] md:max-h-[650px] lg:max-h-[750px] xl:max-h-[850px] flex items-center overflow-hidden pt-16 md:pt-24"
    >
      {/* Slideshow background */}
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={slides[current]}
          alt="children playing at Anjali Kids Play School in Pundri"
          loading={current === 0 ? "eager" : "lazy"}
          fetchPriority={current === 0 ? "high" : "auto"}
          className="absolute inset-0 w-full h-full object-cover object-center blur-[0.5px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Dark gradient overlay — strong on left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
      {/* Extra bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24">
        <div className="max-w-2xl xl:max-w-3xl">

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

          {/* Heading — word by word */}
          <h1 className="text-[clamp(1.25rem,4vw,2.5rem)] sm:text-[clamp(1.5rem,4.5vw,2.75rem)] lg:text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-white mb-5 sm:mb-6 flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1 overflow-hidden">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className={word === "Anjali" || word === "Kids" ? "text-orange-400" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Description — word by word */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 font-medium leading-relaxed mb-8 sm:mb-10 max-w-xl flex flex-wrap gap-x-1.5">
            {descWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                style={{ transitionDelay: `${0.6 + i * 0.045}s` }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.045, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6, type: "spring", stiffness: 220, damping: 16 }}
            >
              <Link
                to="/admission"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Enroll Your Child →
              </Link>
            </motion.div>
            <motion.a
              href="#programs"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.75, type: "spring", stiffness: 220, damping: 16 }}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/40 text-white font-bold text-base px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Programs
            </motion.a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 sm:gap-8">
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
                <small className="text-xs font-semibold text-white/60 uppercase tracking-wide">{stat.label}</small>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-3 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-orange-500" : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
