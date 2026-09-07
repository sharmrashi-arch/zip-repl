import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import GalleryFull from "@/components/GalleryFull"
import Footer from "@/components/Footer"

export default function GalleryPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Gallery | Anjali Kids Play School | Photo Gallery</title>
      </Helmet>
      <Navigation />
      <main className="pt-24">
        <GalleryFull />
      </main>
      <Footer />
    </div>
  )
}
