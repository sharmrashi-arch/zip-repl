import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import Programs from "@/components/Programs"
import Footer from "@/components/Footer"

export default function ProgramsPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Play-Based Learning Programs | Anjali Kids Play School</title>
        <meta
          name="description"
          content="Explore play-based learning programs at Anjali Kids Play School, Pundri, designed to nurture curiosity, creativity, and confidence in toddlers."
        />
      </Helmet>
      <Navigation />
      <main className="pt-24">
        <Programs />
      </main>
      <Footer />
    </div>
  )
}
