import { motion } from "framer-motion"
import { Palette, BookOpen, Music, Trees, Smile, Compass, Library, Star, Calendar } from "lucide-react"
import progImg1 from "@assets/21_1784699060075.jpg"
import progImg2 from "@assets/11_image_1784699138864.jfif"
import progImg3 from "@assets/10_image_1784699150805.jpeg"

const corePrograms = [
  {
    title: "Playgroup",
    age: "1.5 - 2.5 yrs",
    desc: "Gentle introduction to school environment through play and sensory activities.",
    color: "bg-blue-100 text-blue-600",
    icon: Smile
  },
  {
    title: "Nursery",
    age: "2.5 - 3.5 yrs",
    desc: "Language development, motor skills, and vital social interaction.",
    color: "bg-green-100 text-green-600",
    icon: Star
  },
  {
    title: "LKG / Pre-KG",
    age: "3.5 - 4.5 yrs",
    desc: "Structured learning, early literacy, numeracy, and creative thinking.",
    color: "bg-purple-100 text-purple-600",
    icon: BookOpen
  }
]

const activities = [
  { title: "Inquiry-Based Learning", desc: "Child-led exploration and curiosity-driven discovery.", icon: Compass },
  { title: "Arts & Crafts", desc: "Creative expression through painting, drawing, and craftwork.", icon: Palette },
  { title: "Music & Movement", desc: "Rhythm, songs, dance, and physical development.", icon: Music },
  { title: "Outdoor Play & Sports", desc: "Physical fitness, teamwork, and gross motor development.", icon: Trees },
  { title: "Story Time & Library", desc: "Language enrichment through books and storytelling.", icon: Library },
  { title: "Yoga & Mindfulness", desc: "Calm, focus, and body awareness for young children.", icon: Smile },
  { title: "Festivals & Events", desc: "Celebrating Indian festivals and building cultural identity.", icon: Calendar },
]

export default function Programs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="programs" className="py-24 bg-background relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-40 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-3">Our Curriculum</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Learning Through Play</h3>
            <p className="text-lg text-muted-foreground font-medium">
              We provide a broad and balanced curriculum designed to allow children to achieve their self-potential at every age.
            </p>
          </motion.div>
        </div>

        {/* Core Age Groups */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {corePrograms.map((prog, i) => (
            <motion.div key={i} variants={itemVariants} className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${prog.color}`}>
                <prog.icon size={32} />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-2">{prog.title}</h4>
              <div className="inline-block px-3 py-1 bg-background text-sm font-bold text-muted-foreground rounded-full mb-4">
                Age: {prog.age}
              </div>
              <p className="text-muted-foreground font-medium leading-relaxed">
                {prog.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* School Photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 max-w-5xl mx-auto"
        >
          {[
            { src: progImg1, label: "School Activities" },
            { src: progImg2, label: "Hands-on Learning" },
            { src: progImg3, label: "Creative Sessions" },
          ].map((img, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl shadow-md group aspect-[4/3]">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-bold text-sm">{img.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Activities Grid */}
        <div className="max-w-5xl mx-auto">
          <h4 className="text-2xl font-bold text-center mb-10 text-foreground">Enriching Activities</h4>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {activities.map((act, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white p-6 rounded-2xl border border-border flex flex-col items-center text-center group hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <act.icon size={24} />
                </div>
                <h5 className="font-bold text-foreground mb-2">{act.title}</h5>
                <p className="text-sm text-muted-foreground">{act.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
