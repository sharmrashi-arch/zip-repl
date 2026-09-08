import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import Contact from "@/components/Contact"
import MapSection from "@/components/MapSection"
import Footer from "@/components/Footer"

export default function ContactPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Contact Anjali Kids Play School | Playschool in Pundri</title>
        <meta
          name="description"
          content="Get in touch with Anjali Kids Play School, Pundri. Visit us, call, or fill our enquiry form for admission and fee details."
        />
      </Helmet>
      <Navigation />
      <main className="pt-24">
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </div>
  )
}