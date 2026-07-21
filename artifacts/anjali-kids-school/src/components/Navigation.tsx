import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Teachers", href: "#teachers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Admissions", href: "#admissions" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-display font-bold text-xl group-hover:scale-110 transition-transform">
            AK
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl leading-tight text-foreground">Anjali Kids</span>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Play School</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild size="sm" className="font-bold">
            <a href="#admissions">Enroll Now</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-border lg:hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-lg font-medium text-foreground hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full">
                  <a href="#admissions" onClick={() => setIsMobileMenuOpen(false)}>
                    Enroll Now
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
