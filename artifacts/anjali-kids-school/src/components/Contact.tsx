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
                  Pundri, Haryana 136026<br />
                  India
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
                  Open all 7 days<br />
                  6:30 AM – 11:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-[400px] bg-muted rounded-3xl overflow-hidden border border-border shadow-sm relative group"
          >
            {/* Embedded map placeholder - using an iframe since it's a real place but I will use a stylized placeholder or simple map if iframe isn't strictly requested to work perfectly without API keys. Actually, a simple google maps iframe works if we just use the name and town */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110196.4714151752!2d76.48002660270058!3d29.756184918454522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390df1a3c6b24503%3A0xc3c54c30c33a25b3!2sPundri%2C%20Haryana%20136026!5e0!3m2!1sen!2sin!4v1709560000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[0.9] opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
