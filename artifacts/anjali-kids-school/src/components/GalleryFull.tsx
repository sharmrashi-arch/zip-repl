import { motion } from "framer-motion"

import img1 from "@assets/1_image_1784612261212.jfif"
import img2 from "@assets/image_2_1784612271636.jfif"
import img3 from "@assets/4_image_1784612296095.jpg"
import img4 from "@assets/5_image_1784612309341.jfif"
import img5 from "@assets/6_image_1784612319071.jfif"
import img6 from "@assets/6_image_1784612333214.jfif"
import img7 from "@assets/7_image_1784612342920.jpg"
import img8 from "@assets/8_image_1784612353936.jpg"
import img9 from "@assets/d9dace56-5901-4bb0-8871-4fa19b3cb26f_1784612375496.jpg"
import img10 from "@assets/9_image_1784612386393.jfif"
import img11 from "@assets/10_image_1784612396798.jpeg"

const images = [
  { src: img1,  title: "Free Cooking Activity" },
  { src: img2,  title: "Play Area" },
  { src: img3,  title: "Art & Craft" },
  { src: img4,  title: "Baisakhi Celebration" },
  { src: img5,  title: "Master Chef Activity" },
  { src: img6,  title: "Master Chef Activity" },
  { src: img7,  title: "Classroom Activity" },
  { src: img8,  title: "Fun Learning" },
  { src: img9,  title: "School Activity" },
  { src: img10, title: "Creative Time" },
  { src: img11, title: "School Moments" },
]

export default function GalleryFull() {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-3">Our Moments</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">School Gallery</h3>
            <p className="text-lg text-gray-500 font-medium">
              A glimpse into the joyful world of Anjali Kids Play School, Pundri.
            </p>
          </motion.div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl group break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white font-bold text-base translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  {img.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
