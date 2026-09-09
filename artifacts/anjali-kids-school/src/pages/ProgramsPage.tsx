import { Helmet } from "react-helmet-async"
import { Link } from "wouter"
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
        <section className="pt-10 pb-2 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Programs</h1>
          <p className="text-lg text-gray-500 font-medium mt-3 max-w-2xl mx-auto">
            Play-based curriculum for toddlers and pre-schoolers in Pundri, Haryana.
          </p>
        </section>
        <Programs />
        <section className="py-16 md:py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Enroll?</h2>
            <p className="text-lg text-orange-50 font-medium mb-8 max-w-2xl mx-auto">
              Give your child the best start with a joyful, play-based learning journey at Anjali Kids Play School.
            </p>
            <Link
              to="/admission"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-bold text-base px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Apply for Admission →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
