import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation, Link } from "wouter"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [location] = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const isHome = location === "/"

  const navLinks = [
    { name: "Home",       href: "/",            page: true },
    { name: "About",      href: "/about",        page: true },
    { name: "Programs",   href: isHome ? "#programs"   : "/#programs",   page: false },
    { name: "Teachers",   href: "/teachers",     page: true },
    { name: "Gallery",    href: "/gallery",      page: true },
    { name: "Admissions", href: isHome ? "#admissions" : "/#admissions", page: false },
    { name: "Contact",    href: isHome ? "#contact"    : "/#contact",    page: false },
  ]

  const isActive = (href: string) => {
    if (href === "/") return location === "/"
    return location.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md py-3"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-orange-100"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-orange-300 group-hover:scale-105 transition-all duration-300">
            <span className="text-white font-extrabold text-base tracking-tight">AK</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-[1.15rem] text-gray-900 tracking-tight">Anjali Kids</span>
            <span className="text-[0.65rem] font-bold text-orange-500 uppercase tracking-[0.15em]">Play School</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            const cls = `relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              active ? "text-orange-600" : "text-gray-600 hover:text-orange-500"
            }`
            return link.page ? (
              <Link key={link.name} href={link.href} className={cls}>
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-orange-50 rounded-full border border-orange-200"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ) : (
              <a key={link.name} href={link.href} className={cls}>
                <span className="relative z-10">{link.name}</span>
              </a>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href={isHome ? "#admissions" : "/#admissions"}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-orange-300 transition-all duration-300 hover:scale-105"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-xl hover:bg-orange-50 text-gray-700 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-orange-100 shadow-xl"
          >
            <nav className="container mx-auto px-4 py-5 flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                const cls = `block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  active ? "bg-orange-50 text-orange-600" : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                }`
                return link.page ? (
                  <Link key={link.name} href={link.href} className={cls}>
                    {link.name}
                  </Link>
                ) : (
                  <a key={link.name} href={link.href} className={cls} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                )
              })}
              <div className="pt-3">
                <a
                  href={isHome ? "#admissions" : "/#admissions"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold text-base px-6 py-3 rounded-full shadow-md"
                >
                  Enroll Now
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
