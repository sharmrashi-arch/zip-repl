import { Helmet } from "react-helmet-async"
import { Link } from "wouter"
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
        <section className="pt-10 pb-2 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">About Anjali Kids Play School</h1>
          <p className="text-lg text-gray-500 font-medium mt-3 max-w-2xl mx-auto">
            A nurturing preschool and daycare in Pundri, Haryana for ages 1.5 to 4.5 years.
          </p>
        </section>
        <About />
        <section className="py-16 md:py-20 bg-orange-50 border-t border-orange-100">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Get to Know Us Better</h2>
            <p className="text-lg text-gray-600 font-medium mb-8 max-w-2xl mx-auto">
              Explore our play-based curriculum or reach out for any questions about your child's early education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Our Programs
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-orange-50 text-orange-600 font-bold text-base px-8 py-4 rounded-lg shadow border-2 border-orange-200 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
