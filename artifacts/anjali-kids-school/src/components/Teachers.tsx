import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, GraduationCap, BookOpen, Heart, Star } from "lucide-react"
import soniaImg from "@assets/generated_images/teacher-sonia.jpg"
import ansulImg from "@assets/generated_images/teacher-ansul.jpg"
import manishaImg from "@assets/generated_images/teacher-manisha.jpg"

const teachers = [
  {
    name: "Sonia Gupta",
    role: "Lead Teacher & Head of Curriculum",
    ageGroup: "Playgroup (1.5 – 2.5 yrs)",
    image: soniaImg,
    color: "from-orange-400 to-orange-600",
    bgLight: "bg-orange-50",
    accent: "text-orange-500",
    experience: "8+ Years Experience",
    qualification: "M.A. Education, B.Ed., Montessori Certified",
    bio: "Sonia Gupta is the founding lead teacher of Anjali Kids Play School and the heart of our curriculum. With over 8 years of early childhood education experience, she has developed our unique play-based inquiry programme that has helped hundreds of children in Pundri make a confident, joyful transition from home to school. She specialises in child psychology, early language development, and creative learning environments.",
    specialties: ["Inquiry-Based Learning", "Early Language & Literacy", "Child Psychology", "Parent Communication"],
    philosophy: "\"Every child is a natural learner. My job is to protect that curiosity and give it room to grow.\"",
  },
  {
    name: "Ansul Aggarwal",
    role: "Activity & Arts Teacher",
    ageGroup: "Nursery (2.5 – 3.5 yrs)",
    image: ansulImg,
    color: "from-blue-400 to-blue-600",
    bgLight: "bg-blue-50",
    accent: "text-blue-500",
    experience: "5+ Years Experience",
    qualification: "B.A. Fine Arts, Diploma in Early Childhood Education",
    bio: "Ansul Aggarwal brings creativity and energy to every classroom. A trained fine arts graduate with a specialisation in early childhood education, Ansul leads all art & craft sessions, music and movement activities, and seasonal festival celebrations at Anjali Kids. His enthusiasm for hands-on learning has made him a favourite among children and parents alike in Pundri.",
    specialties: ["Art & Craft", "Music & Rhymes", "Festival Activities", "Physical Education"],
    philosophy: "\"When a child creates something with their own hands, their confidence grows in ways no textbook can teach.\"",
  },
  {
    name: "Manisha Solanki",
    role: "Senior Teacher & Care Coordinator",
    ageGroup: "LKG / Pre-KG (3.5 – 4.5 yrs)",
    image: manishaImg,
    color: "from-green-400 to-green-600",
    bgLight: "bg-green-50",
    accent: "text-green-600",
    experience: "6+ Years Experience",
    qualification: "B.Ed. (Early Childhood), Diploma in Child Development",
    bio: "Manisha Solanki is our senior teacher for the LKG and Pre-KG age group, preparing children for their smooth transition to primary school. With 6 years of experience, she focuses on school readiness — number and letter recognition, fine motor skills, social skills, and classroom behaviour. She also coordinates closely with parents on each child's developmental progress through regular feedback sessions.",
    specialties: ["School Readiness", "Fine Motor Skills", "Number & Letter Recognition", "Parent Feedback Sessions"],
    philosophy: "\"The goal of early education is not to fill a child's mind, but to light a fire in their heart for lifelong learning.\"",
  },
]

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
}

export default function Teachers() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (delta: number) => {
    setDirection(delta)
    setCurrent((prev) => (prev + delta + teachers.length) % teachers.length)
  }

  const teacher = teachers[current]

  return (
    <section id="teachers" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-3">Our Educators</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Meet Our Caring Staff</h3>
            <p className="text-lg text-gray-500 font-medium">
              Dedicated professionals committed to nurturing every child's potential with love, patience, and expertise.
            </p>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              {/* Left — Photo */}
              <div className={`relative bg-gradient-to-br ${teacher.color} flex flex-col items-center justify-end p-8 min-h-80`}>
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-52 h-52 object-cover rounded-full border-4 border-white shadow-2xl mb-6"
                />
                <div className="text-center">
                  <h4 className="text-2xl font-extrabold text-white">{teacher.name}</h4>
                  <p className="text-white/80 font-semibold text-sm mt-1">{teacher.role}</p>
                  <span className="inline-block mt-3 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {teacher.ageGroup}
                  </span>
                </div>
              </div>

              {/* Right — Details */}
              <div className={`${teacher.bgLight} p-8 flex flex-col justify-center gap-5`}>

                {/* Experience & Qualification */}
                <div className="flex flex-wrap gap-3">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-white border border-gray-200 ${teacher.accent}`}>
                    <Star size={13} /> {teacher.experience}
                  </span>
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-white border border-gray-200 ${teacher.accent}`}>
                    <GraduationCap size={13} /> {teacher.qualification}
                  </span>
                </div>

                {/* Bio */}
                <div>
                  <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${teacher.accent} mb-2`}>
                    <BookOpen size={13} /> About
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{teacher.bio}</p>
                </div>

                {/* Specialties */}
                <div>
                  <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${teacher.accent} mb-2`}>
                    <Heart size={13} /> Specialties
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {teacher.specialties.map((s) => (
                      <span key={s} className="text-xs font-semibold bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Philosophy */}
                <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-500 text-sm leading-relaxed">
                  {teacher.philosophy}
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => go(-1)}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-orange-50 hover:border-orange-300 flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft size={22} className="text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {teachers.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-orange-500" : "w-2.5 bg-gray-300"}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-orange-50 hover:border-orange-300 flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight size={22} className="text-gray-600" />
            </button>
          </div>

          {/* Counter */}
          <p className="text-center text-sm text-gray-400 font-medium mt-3">
            {current + 1} / {teachers.length}
          </p>
        </div>
      </div>
    </section>
  )
}
