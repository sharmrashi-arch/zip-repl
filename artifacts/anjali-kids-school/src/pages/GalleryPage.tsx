import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import GalleryFull from "@/components/GalleryFull"
import Footer from "@/components/Footer"

export default function GalleryPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>School Gallery in Pundri | Anjali Kids Play School</title>
        <meta
          name="description"
          content="See photos and moments from Anjali Kids Play School, Pundri — arts, crafts, outdoor play, festivals, and classroom fun. Explore our school gallery today."
        />
        <link rel="canonical" href="https://zip-repl-anjali-kids-school.vercel.app/gallery" />
        <meta property="og:title" content="School Gallery in Pundri | Anjali Kids Play School" />
        <meta property="og:description" content="See photos and moments from Anjali Kids Play School, Pundri — arts, crafts, outdoor play, festivals, and classroom fun. Explore our school gallery today." />
        <meta property="og:image" content="https://zip-repl-anjali-kids-school.vercel.app/og-image.webp" />
        <meta property="og:url" content="https://zip-repl-anjali-kids-school.vercel.app/gallery" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="School Gallery in Pundri | Anjali Kids Play School" />
        <meta name="twitter:description" content="See photos and moments from Anjali Kids Play School, Pundri — arts, crafts, outdoor play, festivals, and classroom fun. Explore our school gallery today." />
        <meta name="twitter:image" content="https://zip-repl-anjali-kids-school.vercel.app/og-image.webp" />
      </Helmet>
      <Navigation />
      <main className="pt-24">
        <section className="pt-10 pb-2 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Gallery</h1>
          <p className="text-lg text-gray-500 font-medium mt-3 max-w-2xl mx-auto">
            A glimpse into the joyful world of Anjali Kids Play School, Pundri.
          </p>
        </section>
        <GalleryFull />
      </main>
      <Footer />
    </div>
  )
}
