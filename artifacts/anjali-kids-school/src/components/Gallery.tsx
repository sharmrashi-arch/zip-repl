import { motion } from "framer-motion"

// I'll import the 6 generated images
import artsImg from "@assets/generated_images/gallery-arts.jpg"
import readingImg from "@assets/generated_images/gallery-reading.jpg"
import outdoorImg from "@assets/generated_images/gallery-outdoor.jpg"
import musicImg from "@assets/generated_images/gallery-music.jpg"
import yogaImg from "@assets/generated_images/gallery-yoga.jpg"
import learningImg from "@assets/generated_images/gallery-learning.jpg"

const images = [
  { src: artsImg, title: "Arts & Crafts", className: "md:col-span-2 md:row-span-2" },
  { src: readingImg, title: "Story Time", className: "md:col-span-1 md:row-span-1" },
  { src: outdoorImg, title: "Outdoor Play", className: "md:col-span-1 md:row-span-1" },
  { src: musicImg, title: "Music & Movement", className: "md:col-span-1 md:row-span-1" },
  { src: yogaImg, title: "Yoga", className: "md:col-span-1 md:row-span-1" },
  { src: learningImg, title: "Classroom Learning", className: "md:col-span-2 md:row-span-1" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Our Moments</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">A Glimpse of Joy</h3>
            <p className="text-lg text-muted-foreground font-medium">
              Every day is an adventure filled with learning, laughter, and new discoveries.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl group ${img.className}`}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h4 className="text-white font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
