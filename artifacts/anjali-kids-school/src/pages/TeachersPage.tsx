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
        <link rel="canonical" href="https://zip-repl-anjali-kids-school.vercel.app/teachers" />
        <meta property="og:title" content="Expert Teachers in Pundri | Anjali Kids Play School" />
        <meta property="og:description" content="Meet the experienced and caring teachers at Anjali Kids Play School, Pundri who nurture every child with love, patience, and proven expertise." />
        <meta property="og:image" content="https://zip-repl-anjali-kids-school.vercel.app/og-image.webp" />
        <meta property="og:url" content="https://zip-repl-anjali-kids-school.vercel.app/teachers" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Teachers in Pundri | Anjali Kids Play School" />
        <meta name="twitter:description" content="Meet the experienced and caring teachers at Anjali Kids Play School, Pundri who nurture every child with love, patience, and proven expertise." />
        <meta name="twitter:image" content="https://zip-repl-anjali-kids-school.vercel.app/og-image.webp" />
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
