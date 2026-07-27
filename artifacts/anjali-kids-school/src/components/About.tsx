import { motion } from "framer-motion"
import {
  Target, Sparkles, BookOpen, Heart, Users, Award, CheckCircle, Star,
  Leaf, Music, Palette, Activity
} from "lucide-react"

import img1 from "@assets/4_image_1784612296095.jpg"
import img2 from "@assets/5_image_1784612309341.jfif"
import img3 from "@assets/7_image_1784612342920.jpg"
import img4 from "@assets/8_image_1784612353936.jpg"

const stats = [
  { value: "2018", label: "Established", icon: Award },
  { value: "150+", label: "Happy Students", icon: Users },
  { value: "3+", label: "Expert Teachers", icon: Star },
  { value: "2.5–4.5", label: "Age Group (Years)", icon: Heart },
]

const curriculum = [
  { icon: BookOpen, title: "Inquiry-Based Learning", desc: "Children explore the world through questions, experiments, and hands-on discovery — building critical thinking from the very start." },
  { icon: Palette, title: "Art & Craft Activities", desc: "Creativity is nurtured through painting, clay modelling, collage, and seasonal craft projects that stimulate imagination." },
  { icon: Music, title: "Music & Rhymes", desc: "Daily songs, rhymes, and musical activities develop language skills, memory, rhythm, and social bonding among children." },
  { icon: Leaf, title: "Outdoor Play & Yoga", desc: "Structured outdoor time, yoga, and movement activities build physical strength, coordination, and emotional well-being." },
  { icon: Activity, title: "Life Skills & Activities", desc: "Practical activities like cooking day, mini-theatre, and role play teach children responsibility, teamwork, and independence." },
  { icon: Heart, title: "Socio-Emotional Learning", desc: "Our care-centred approach helps children build confidence, empathy, and strong bonds through daily interactions and group activities." },
]

const whyUs = [
  "CCTV-monitored, safe & secure campus",
  "Play-based & child-centred curriculum",
  "Individual attention for every child",
  "Smooth home-to-school transition",
  "Celebration of all festivals & events",
  "Regular parent-teacher meetings",
  "Qualified & experienced teaching staff",
  "Hygienic mid-day snack facility",
]

const facilities = [
  { title: "Colourful Classrooms", desc: "Bright, child-friendly rooms with age-appropriate learning corners, reading nooks, and activity zones." },
  { title: "Safe Play Area", desc: "Dedicated outdoor play zone with slides, swings, and sensory equipment to encourage physical development." },
  { title: "Activity Hall", desc: "Spacious hall for cultural programmes, annual day celebrations, yoga, and group activities." },
  { title: "CCTV Surveillance", desc: "24×7 CCTV coverage across the campus ensures the safety and security of every child at all times." },
]

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
            <h2 className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">A Right Start for Little Ones</h3>
            <p className="text-lg text-gray-500 leading-relaxed">
              Anjali Kids Play School is a registered early childhood education institution located in Pundri, Kaithal District, Haryana. Founded in 2018, we are committed to providing world-class early childhood education that blends globally accepted best teaching practices — including inquiry-based learning, play-based pedagogy, and socio-emotional development — with the warmth of a caring, home-like environment. Our mission is simple: give every child in Pundri the best possible start in life.
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
            <div key={i} className="overflow-hidden rounded-2xl shadow-md aspect-square group">
              <img
                src={src}
                alt={`School activity ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center bg-orange-50 rounded-2xl py-7 px-4 border border-orange-100"
            >
              <Icon size={26} className="text-orange-500 mx-auto mb-2" />
              <p className="text-3xl font-extrabold text-gray-900">{value}</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Curriculum Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h4 className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-2">What We Teach</h4>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Curriculum & Activities</h3>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">A holistic programme designed for children aged 1.5 to 4.5 years, blending structured learning with joyful play.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {curriculum.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:border-orange-200 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-orange-500" />
                </div>
                <h5 className="font-bold text-gray-900 text-base mb-2">{title}</h5>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h4 className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-2">Infrastructure</h4>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Facilities</h3>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {facilities.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 bg-orange-50 rounded-2xl p-6 border border-orange-100"
              >
                <CheckCircle size={22} className="text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">{title}</h5>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-52 overflow-hidden">
              <img src={img2} alt="Our Vision" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Sparkles size={22} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">Our Vision</h4>
              </div>
            </div>
            <div className="bg-white p-7">
              <p className="text-gray-500 leading-relaxed font-medium">
                To be the most trusted early childhood education centre in Pundri and Kaithal District — a beacon of excellence that empowers young children to explore, learn, and grow into confident, curious, and compassionate individuals ready for the world.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-52 overflow-hidden">
              <img src={img3} alt="Our Mission" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Target size={22} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">Our Mission</h4>
              </div>
            </div>
            <div className="bg-white p-7">
              <p className="text-gray-500 leading-relaxed font-medium">
                To provide every child between the ages of 1.5 and 4.5 years a nurturing, stimulating, and inclusive learning environment that fosters holistic development — cognitive, physical, social, emotional, and creative — through globally accepted best teaching practices.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-10 text-white"
        >
          <div className="text-center mb-8">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-2 text-orange-100">Why Parents Choose Us</h4>
            <h3 className="text-3xl font-extrabold">What Makes Anjali Kids Special</h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {whyUs.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 bg-white/10 rounded-2xl p-4"
              >
                <CheckCircle size={18} className="text-orange-200 shrink-0 mt-0.5" />
                <p className="text-sm font-semibold text-white leading-snug">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
