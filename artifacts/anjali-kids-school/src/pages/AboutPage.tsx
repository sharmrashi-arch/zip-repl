import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import About from "@/components/About"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Trusted Preschool in Pundri | Anjali Kids Play School</title>
        <meta
          name="description"
          content="Learn about Anjali Kids Play School's mission, experienced teachers, and child-friendly environment designed for holistic development in Pundri."
        />
      </Helmet>
      <Navigation />
      <main className="pt-24">
        <About />
      </main>
      <Footer />
    </div>
  )
}
