import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"

export default function MapSection() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-2">Find Us</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Location</h3>
          <p className="text-gray-500 mt-2 font-medium">Anjali Kids Play School, Pundri, Haryana 136026</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: MapPin, label: "Address", value: "Near Bus Stand, Pundri, Kaithal District, Haryana – 136026" },
            { icon: Phone, label: "Contact", value: "+91 97681 44444" },
            { icon: Clock, label: "School Hours", value: "Mon–Sat: 8:00 AM – 1:00 PM" },
          ].map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-5 shadow-sm border border-orange-100 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-orange-500" />
              </div>
              <div>
                <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-sm font-semibold text-gray-700">{value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-orange-100 flex flex-col"
        >
          <iframe
            src="https://maps.google.com/maps?q=Jashan+Complex+Pundri+Haryana+136026&t=m&z=18&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
          <a
            href="https://share.google/VpWx8nmVRO1zjVBot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-3.5 transition-colors duration-200"
          >
            <Navigation size={16} /> Get Directions on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  )
}
