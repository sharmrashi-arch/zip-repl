import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export default function MapSection() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-2">Find Us</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Location</h3>
          <p className="text-gray-500 mt-2 font-medium">Anjali Kids Play School, Pundri, Haryana 136026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-orange-100 flex flex-col"
        >
          <iframe
            src="https://maps.google.com/maps?q=Anjali+Kids+Play+School,+Pundri,+Haryana+136026&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
          <a
            href="https://maps.app.goo.gl/7pGQJQk8Z6vxHa6L8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-3 transition-colors duration-200"
          >
            <MapPin size={16} /> View on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  )
}
