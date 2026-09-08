import { useState } from "react"
import { motion } from "framer-motion"
import { ImageIcon } from "lucide-react"

import img1 from "@assets/gallery-cooking-activity.jfif"
import img2 from "@assets/gallery-play-area.jfif"
import img3 from "@assets/gallery-art-craft.jpg"
import img4 from "@assets/gallery-baisakhi-celebration.jfif"
import img5 from "@assets/gallery-master-chef-1.jfif"
import img6 from "@assets/gallery-master-chef-2.jfif"
import img7 from "@assets/gallery-classroom-activity.jpg"
import img8 from "@assets/gallery-fun-learning.jpg"
import img9 from "@assets/gallery-school-activity.jpg"
import img10 from "@assets/gallery-creative-time.jfif"
import img11 from "@assets/gallery-school-moments.jpeg"
import img12 from "@assets/gallery-mini-theatre.jpg"
import img13 from "@assets/gallery-play-room.jfif"
import img14 from "@assets/gallery-classroom.webp"
import img15 from "@assets/gallery-outdoor-activity.jpg"

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

function GalleryImageCard({
  img,
  onClick,
}: {
  img: GalleryImage
  onClick: (img: GalleryImage) => void
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      onClick={() => onClick(img)}
      className="relative flex-shrink-0 w-[70vw] h-44 sm:w-64 sm:h-48 rounded-2xl overflow-hidden cursor-pointer group bg-orange-50"
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-orange-50 text-orange-500">
          <ImageIcon size={18} className="animate-pulse" />
          <span className="text-sm font-semibold text-orange-500 text-center px-3">
            {img.title}
          </span>
        </div>
      )}
      <img
        src={img.src}
        alt={`${img.title} at Anjali Kids Play School, Pundri`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} group-hover:scale-110`}
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span className="text-white font-bold text-sm">{img.title}</span>
      </div>
    </div>
  )
}

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
          <GalleryImageCard key={i} img={img} onClick={onSelect} />
        ))}
      </div>
    </div>
  )
}

export default function GalleryFull() {
  const [selected, setSelected] = useState<GalleryImage | null>(null)
  const [lightboxLoaded, setLightboxLoaded] = useState(false)

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
            <div className="relative w-full flex items-center justify-center overflow-hidden rounded-2xl">
              {!lightboxLoaded && (
                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-gray-800 text-orange-400">
                  <ImageIcon size={24} className="animate-pulse" />
                  <span className="font-semibold text-lg text-center">{selected.title}</span>
                </div>
              )}
              <img
                src={selected.src}
                alt={`${selected.title} at Anjali Kids Play School, Pundri`}
                onLoad={() => setLightboxLoaded(true)}
                className={`max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl transition-opacity duration-500 ${lightboxLoaded ? "opacity-100" : "opacity-0"}`}
              />
            </div>
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
