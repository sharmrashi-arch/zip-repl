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
        <link rel="canonical" href="https://zip-repl-anjali-kids-school.vercel.app/contact" />
        <meta property="og:title" content="Contact Anjali Kids Play School | Playschool in Pundri" />
        <meta property="og:description" content="Get in touch with Anjali Kids Play School, Pundri. Visit us, call, or fill our enquiry form for admission and fee details." />
        <meta property="og:image" content="https://zip-repl-anjali-kids-school.vercel.app/og-image.webp" />
        <meta property="og:url" content="https://zip-repl-anjali-kids-school.vercel.app/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Anjali Kids Play School | Playschool in Pundri" />
        <meta name="twitter:description" content="Get in touch with Anjali Kids Play School, Pundri. Visit us, call, or fill our enquiry form for admission and fee details." />
        <meta name="twitter:image" content="https://zip-repl-anjali-kids-school.vercel.app/og-image.webp" />
      </Helmet>
      <Navigation />
      <main className="pt-24">
        <section className="pt-10 pb-2 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Contact Us</h1>
          <p className="text-lg text-gray-500 font-medium mt-3 max-w-2xl mx-auto">
            Visit us, call, or send an enquiry — we'd love to hear from you.
          </p>
        </section>
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </div>
  )
}