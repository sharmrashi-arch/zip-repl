import { useState } from "react"
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
import img12 from "@assets/21_1784699753720.jpg"
import img13 from "@assets/22_1784699765142.jfif"
import img14 from "@assets/23_1784699775148.webp"
import img15 from "@assets/24_1784699788478.jpg"

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
  { src: img12, title: "Mini Theatre" },
  { src: img13, title: "Play Room" },
  { src: img14, title: "Classroom" },
  { src: img15, title: "Outdoor Activity" },
]

const row1 = images.slice(0, 8)
const row2 = images.slice(7)

type GalleryImage = { src: string; title: string }

function MarqueeRow({
  items,
  direction,
  onSelect,
}: {
  items: GalleryImage[]
  direction: "left" | "right"
  onSelect: (img: GalleryImage) => void
}) {
  const doubled = [...items, ...items]
  const animClass = direction === "left" ? "marquee-left" : "marquee-right"

  return (
    <div className="overflow-hidden w-full">
      <div className={`flex gap-4 w-max ${animClass}`}>
        {doubled.map((img, i) => (
          <div
            key={i}
            onClick={() => onSelect(img)}
            className="relative flex-shrink-0 w-64 h-48 rounded-2xl overflow-hidden cursor-pointer group"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-bold text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function GalleryFull() {
  const [selected, setSelected] = useState<GalleryImage | null>(null)

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left  { animation: marquee-left  35s linear infinite; }
        .marquee-right { animation: marquee-right 35s linear infinite; }
        .marquee-left:hover,
        .marquee-right:hover { animation-play-state: paused; }
      `}</style>

      <section className="py-20 bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-3">Our Moments</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">School Gallery</h3>
              <p className="text-lg text-gray-500 font-medium">
                A glimpse into the joyful world of Anjali Kids Play School, Pundri.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="mb-4 px-0">
          <MarqueeRow items={row1} direction="left" onSelect={setSelected} />
        </div>

        {/* Row 2 — scrolls right */}
        <div className="px-0">
          <MarqueeRow items={row2} direction="right" onSelect={setSelected} />
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.title}
              className="max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl"
            />
            <p className="mt-4 text-white font-semibold text-lg">{selected.title}</p>
          </motion.div>

          {/* Close button */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-5 right-6 text-white text-4xl font-light hover:scale-110 transition-transform leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}
