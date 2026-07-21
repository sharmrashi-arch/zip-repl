import Navigation from "@/components/Navigation"
import GalleryFull from "@/components/GalleryFull"
import Footer from "@/components/Footer"

export default function GalleryPage() {
  return (
    <div className="w-full">
      <Navigation />
      <main className="pt-24">
        <GalleryFull />
      </main>
      <Footer />
    </div>
  )
}
