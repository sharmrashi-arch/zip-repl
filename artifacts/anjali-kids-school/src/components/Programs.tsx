import { motion } from "framer-motion"
import { Palette, BookOpen, Music, Trees, Smile, Compass, Library, Star, Calendar, CheckCircle, Clock, Users, Lightbulb, Heart } from "lucide-react"
import progImg1 from "@assets/21_1784699060075.jpg"
import progImg2 from "@assets/11_image_1784699138864.jfif"
import progImg3 from "@assets/10_image_1784699150805.jpeg"

const corePrograms = [
  {
    title: "Playgroup",
    age: "1.5 – 2.5 yrs",
    duration: "3 hrs/day",
    seats: "15 seats",
    desc: "Our Playgroup programme gently introduces your toddler to the school environment through sensory play, music, stories, and simple craft activities. Children learn to separate from parents confidently, follow basic routines, and begin building their first friendships.",
    outcomes: ["Social confidence & separation ease", "Sensory & motor skill development", "First words, songs & rhymes", "Safe & loving school transition"],
    color: "bg-blue-100 text-blue-600",
    border: "border-blue-200",
    badge: "bg-blue-50 text-blue-700",
    icon: Smile
  },
  {
    title: "Nursery",
    age: "2.5 – 3.5 yrs",
    duration: "3.5 hrs/day",
    seats: "18 seats",
    desc: "The Nursery programme builds language, fine motor skills, and social intelligence through structured yet playful activities. Children explore colours, shapes, numbers, and letters through hands-on activities, art, outdoor time, yoga, and daily circle time.",
    outcomes: ["Pre-reading & pre-writing skills", "Number & colour recognition", "Improved communication", "Teamwork & sharing"],
    color: "bg-green-100 text-green-600",
    border: "border-green-200",
    badge: "bg-green-50 text-green-700",
    icon: Star
  },
  {
    title: "LKG / Pre-KG",
    age: "3.5 – 4.5 yrs",
    duration: "4 hrs/day",
    seats: "20 seats",
    desc: "LKG / Pre-KG at Anjali Kids prepares children for primary school with a structured curriculum covering early literacy, numeracy, critical thinking, and creative expression. Children graduate with strong school readiness — confident, curious, and ready to learn.",
    outcomes: ["Letter writing & phonics foundation", "Numbers 1–20 & basic maths concepts", "Independent reading readiness", "School routine & classroom behaviour"],
    color: "bg-purple-100 text-purple-600",
    border: "border-purple-200",
    badge: "bg-purple-50 text-purple-700",
    icon: BookOpen
  }
]

const activities = [
  { title: "Inquiry-Based Learning", desc: "Child-led exploration and curiosity-driven discovery activities every day.", icon: Compass },
  { title: "Arts & Crafts", desc: "Creative expression through painting, drawing, clay, and seasonal craftwork.", icon: Palette },
  { title: "Music & Movement", desc: "Rhythm, songs, dance, and physical development through daily music sessions.", icon: Music },
  { title: "Outdoor Play & Sports", desc: "Physical fitness, teamwork, and gross motor skill development in the open air.", icon: Trees },
  { title: "Story Time & Library", desc: "Language enrichment and a love of reading through books and storytelling.", icon: Library },
  { title: "Yoga & Mindfulness", desc: "Calm, focus, and body awareness taught through fun, age-appropriate yoga.", icon: Smile },
  { title: "Festivals & Events", desc: "Celebrating Indian festivals, building cultural identity and community bonds.", icon: Calendar },
  { title: "Life Skills Activities", desc: "Cooking day, mini theatre, and role play teach independence and responsibility.", icon: Lightbulb },
]

const dailySchedule = [
  { time: "8:00 AM", activity: "Welcome & Morning Circle", icon: Heart },
  { time: "8:30 AM", activity: "Structured Learning Activity", icon: BookOpen },
  { time: "9:15 AM", activity: "Art, Craft or Music Session", icon: Palette },
  { time: "10:00 AM", activity: "Outdoor Play & Physical Activity", icon: Trees },
  { time: "10:30 AM", activity: "Snack Time", icon: Smile },
  { time: "11:00 AM", activity: "Story Time / Library", icon: Library },
  { time: "11:30 AM", activity: "Free Play & Exploration", icon: Compass },
  { time: "12:00 PM", activity: "Wrap-up & Departure", icon: Star },
]

export default function Programs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="programs" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-40 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-3">Our Curriculum</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Learning Through Play</h3>
            <p className="text-lg text-muted-foreground font-medium">
              A broad, balanced, and internationally inspired curriculum designed for children aged 1.5 to 4.5 years — helping every child achieve their full potential through joy, curiosity, and care.
            </p>
          </motion.div>
        </div>

        {/* Core Age Group Cards — expanded */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {corePrograms.map((prog, i) => (
            <motion.div key={i} variants={itemVariants} className={`bg-white rounded-3xl border ${prog.border} shadow-sm hover:-translate-y-2 transition-transform duration-300 overflow-hidden`}>
              <div className="p-8 pb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${prog.color}`}>
                  <prog.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">{prog.title}</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${prog.badge}`}>Age: {prog.age}</span>
                  <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-gray-100 text-gray-600">{prog.duration}</span>
                  <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-gray-100 text-gray-600">{prog.seats}</span>
                </div>
                <p className="text-muted-foreground font-medium leading-relaxed text-sm mb-5">{prog.desc}</p>
              </div>
              <div className={`px-8 pb-7 border-t ${prog.border} pt-5`}>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">What your child will gain</p>
                <ul className="flex flex-col gap-2">
                  {prog.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-gray-600 font-medium">
                      <CheckCircle size={15} className="text-orange-500 shrink-0 mt-0.5" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
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
              <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-bold text-sm">{img.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Daily Schedule */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h4 className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-2">A Typical Day</h4>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Daily Schedule</h3>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">A balanced routine that blends structured learning with free play, rest, and outdoor time.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {dailySchedule.map(({ time, activity, icon: Icon }, i) => (
              <motion.div
                key={time}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-orange-500 mb-0.5 flex items-center gap-1"><Clock size={11} /> {time}</p>
                  <p className="text-sm font-semibold text-gray-800">{activity}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="max-w-5xl mx-auto">
          <h4 className="text-2xl font-bold text-center mb-4 text-foreground">Enriching Activities</h4>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">Every week, children experience a rich mix of activities that develop the whole child — mind, body, and heart.</p>
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
