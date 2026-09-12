import { FaWhatsapp, FaInstagram } from "react-icons/fa"

const WHATSAPP_URL = "https://wa.me/919768144444"
const INSTAGRAM_URL = "https://www.instagram.com/anjalikidsplayschool"

export default function SocialButtons() {
  return (
    <div
      className="fixed bottom-6 left-4 z-40 flex flex-col gap-3"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Anjali Kids Play School ka Instagram page"
        title="Instagram"
        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg shadow-pink-300/40 flex items-center justify-center transition-transform duration-300 hover:scale-110"
      >
        <FaInstagram size={22} />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp par Anjali Kids Play School ko message karein"
        title="WhatsApp"
        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-lg shadow-green-300/40 flex items-center justify-center transition-transform duration-300 hover:scale-110"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  )
}