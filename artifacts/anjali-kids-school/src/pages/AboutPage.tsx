import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import About from "@/components/About"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>About Anjali Kids Play School | Pundri, Haryana</title>
      </Helmet>
      <Navigation />
      <main className="pt-24">
        <About />
      </main>
      <Footer />
    </div>
  )
}
