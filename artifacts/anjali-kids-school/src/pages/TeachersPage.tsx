import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import Teachers from "@/components/Teachers"
import Footer from "@/components/Footer"

export default function TeachersPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Expert Teachers in Pundri | Anjali Kids Play School</title>
        <meta
          name="description"
          content="Meet the experienced and caring teachers at Anjali Kids Play School, Pundri who nurture every child with love, patience, and proven expertise."
        />
      </Helmet>
      <Navigation />
      <main className="pt-24">
        <Teachers />
      </main>
      <Footer />
    </div>
  )
}
