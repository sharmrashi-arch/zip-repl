import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Programs from "@/components/Programs"
import WhyChooseUs from "@/components/WhyChooseUs"
import Teachers from "@/components/Teachers"
import Gallery from "@/components/Gallery"
import Testimonials from "@/components/Testimonials"
import Admissions from "@/components/Admissions"
import Contact from "@/components/Contact"
import MapSection from "@/components/MapSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="w-full">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <Teachers />
        <Gallery />
        <Testimonials />
        <Admissions />
        <MapSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
