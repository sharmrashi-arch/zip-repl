import { motion } from "framer-motion"
import soniaImg from "@assets/generated_images/teacher-sonia.jpg"
import ansulImg from "@assets/generated_images/teacher-ansul.jpg"
import manishaImg from "@assets/generated_images/teacher-manisha.jpg"

const teachers = [
  {
    name: "Sonia Gupta",
    role: "Lead Teacher",
    ageGroup: "1–2 year olds",
    image: soniaImg,
    color: "bg-orange-100"
  },
  {
    name: "Ansul Aggarwal",
    role: "Teacher",
    ageGroup: "2–3 year olds",
    image: ansulImg,
    color: "bg-blue-100"
  },
  {
    name: "Manisha Solanki",
    role: "Teacher",
    ageGroup: "3–4 year olds",
    image: manishaImg,
    color: "bg-green-100"
  }
]

export default function Teachers() {
  return (
    <section id="teachers" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-3">Our Educators</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Meet Our Caring Staff</h3>
            <p className="text-lg text-muted-foreground font-medium">
              Dedicated professionals committed to providing a safe, joyful, and stimulating learning environment.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {teachers.map((teacher, i) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className={`absolute inset-0 rounded-full scale-105 opacity-50 transition-transform duration-500 group-hover:scale-110 ${teacher.color}`} />
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white shadow-lg"
                />
              </div>
              <h4 className="text-2xl font-bold text-foreground mb-1">{teacher.name}</h4>
              <p className="text-primary font-bold mb-2">{teacher.role}</p>
              <div className="inline-block bg-white px-4 py-1 rounded-full border border-border text-sm font-medium text-muted-foreground shadow-sm">
                Classes: {teacher.ageGroup}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
