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
      </Helmet>
      <Navigation />
      <main className="pt-24">
        <GalleryFull />
      </main>
      <Footer />
    </div>
  )
}
