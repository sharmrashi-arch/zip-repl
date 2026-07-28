import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Visit Our School</h3>
            <p className="text-lg text-muted-foreground font-medium">
              We would love to show you around. We are open all week to welcome you and your little ones.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center shrink-0">
                <MapPin />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground font-medium">
                  Anjali Kids Play School<br />
                  Near Bus Stand, Pundri<br />
                  Kaithal District, Haryana 136026
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-full flex items-center justify-center shrink-0">
                <Phone />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Phone</h4>
                <a href="tel:+919768144444" className="text-muted-foreground font-medium hover:text-primary transition-colors text-lg">
                  +91 97681 44444
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 text-accent rounded-full flex items-center justify-center shrink-0">
                <Clock />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Hours</h4>
                <p className="text-muted-foreground font-medium">
                  Monday – Saturday<br />
                  8:00 AM – 1:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center shrink-0">
                <Mail />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2">Email</h4>
                <a href="mailto:sharmaaaarashi@gmail.com" className="text-muted-foreground font-medium hover:text-primary transition-colors">
                  sharmaaaarashi@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full bg-muted rounded-3xl overflow-hidden border border-border shadow-sm flex flex-col"
          >
            <iframe
              src="https://maps.google.com/maps?q=Anjali+Kids+Play+School+Pundri+Haryana+136026&t=m&z=17&output=embed"
              width="100%"
              height="360"
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
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-3 transition-colors duration-200"
            >
              <MapPin size={16} /> View on Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
