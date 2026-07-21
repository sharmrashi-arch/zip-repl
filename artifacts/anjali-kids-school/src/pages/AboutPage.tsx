import Navigation from "@/components/Navigation"
import About from "@/components/About"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="w-full">
      <Navigation />
      <main className="pt-24">
        <About />
      </main>
      <Footer />
    </div>
  )
}
