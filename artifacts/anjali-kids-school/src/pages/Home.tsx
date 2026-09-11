import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Programs from "@/components/Programs"
import WhyChooseUs from "@/components/WhyChooseUs"
import Teachers from "@/components/Teachers"
import Gallery from "@/components/Gallery"
import Testimonials from "@/components/Testimonials"
import Admissions from "@/components/Admissions"
import Contact from "@/components/Contact"
import MapSection from "@/components/MapSection"
import Footer from "@/components/Footer"

const schemaData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Anjali Kids Play School",
  description:
    "A nurturing, play-based preschool and daycare offering early childhood education in Pundri.",
  url: "https://zip-repl-anjali-kids-school.vercel.app",
  logo: "https://zip-repl-anjali-kids-school.vercel.app/logo.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Bus Stand, Pundri",
    addressLocality: "Pundri",
    addressRegion: "Haryana",
    postalCode: "136026",
    addressCountry: "IN",
  },
  telephone: "+91 97681 44444",
  openingHours: "Mo-Sa 08:00-13:00",
}

export default function Home() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Best Preschool in Pundri | Anjali Kids Play School</title>
        <meta
          name="description"
          content="Anjali Kids Play School offers safe, nurturing, and play-based early education in Pundri. Enroll your child today for a joyful learning journey."
        />
        <link rel="canonical" href="https://zip-repl-anjali-kids-school.vercel.app/" />
        <meta property="og:title" content="Best Preschool in Pundri | Anjali Kids Play School" />
        <meta property="og:description" content="Anjali Kids Play School offers safe, nurturing, and play-based early education in Pundri. Enroll your child today for a joyful learning journey." />
        <meta property="og:image" content="https://zip-repl-anjali-kids-school.vercel.app/og-image.webp" />
        <meta property="og:url" content="https://zip-repl-anjali-kids-school.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Preschool in Pundri | Anjali Kids Play School" />
        <meta name="twitter:description" content="Anjali Kids Play School offers safe, nurturing, and play-based early education in Pundri. Enroll your child today for a joyful learning journey." />
        <meta name="twitter:image" content="https://zip-repl-anjali-kids-school.vercel.app/og-image.webp" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <Teachers />
        <Gallery />
        <Testimonials />
        <Admissions />
        <MapSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
