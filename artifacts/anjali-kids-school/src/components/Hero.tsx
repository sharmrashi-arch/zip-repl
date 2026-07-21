import { motion } from "framer-motion"
import heroImage from "@assets/generated_images/hero.jpg"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-teal-50 pt-20">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-teal-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 lg:py-24">

        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 bg-white border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Admissions Open for 2025–26
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-gray-900 mb-6">
            Where Every{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-orange-500">Child</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 9 C50 3, 150 3, 198 9" stroke="#FDBA74" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>{" "}
            <br className="hidden sm:block" />
            Loves to Learn
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-[480px]">
            A registered playschool in Pundri, Haryana offering world-class early childhood education for children aged 2.5 to 4.5 years — built on inquiry-based learning and genuine care.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
            <a
              href="#admissions"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-orange-300 transition-all duration-300 hover:-translate-y-0.5"
            >
              Enroll Your Child
            </a>
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-orange-300 text-orange-600 font-bold text-base px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Programs
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6">
            {[
              { value: "5★", label: "Google Rating" },
              { value: "2.5–4.5", label: "Years Age Group" },
              { value: "3+", label: "Expert Teachers" },
              { value: "April", label: "Session Starts" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-extrabold text-orange-500">{stat.value}</span>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative flex items-center justify-center"
        >
          {/* Decorative ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[90%] h-[90%] rounded-[40%_60%_55%_45%/45%_55%_60%_40%] border-4 border-orange-200/60 animate-spin-very-slow" />
          </div>

          {/* Card */}
          <div className="relative w-full max-w-[460px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={heroImage}
              alt="Happy children learning and playing at Anjali Kids Play School"
              className="w-full h-auto object-cover aspect-[4/5]"
            />
            {/* Overlay gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Floating card — top left */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute top-6 -left-6 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800 leading-tight">Inquiry-Based</p>
              <p className="text-xs text-gray-400 font-medium">Learning Method</p>
            </div>
          </motion.div>

          {/* Floating card — bottom right */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.8 }}
            className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-800 leading-tight">Pundri, Haryana</p>
              <p className="text-xs text-gray-400 font-medium">Open 7 Days a Week</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
