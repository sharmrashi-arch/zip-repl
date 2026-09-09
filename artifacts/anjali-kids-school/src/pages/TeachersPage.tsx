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
        <section className="pt-10 pb-2 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Teachers</h1>
          <p className="text-lg text-gray-500 font-medium mt-3 max-w-2xl mx-auto">
            Meet the experienced and caring educators of Anjali Kids Play School.
          </p>
        </section>
        <Teachers />
      </main>
      <Footer />
    </div>
  )
}
