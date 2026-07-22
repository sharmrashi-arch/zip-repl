import Navigation from "@/components/Navigation"
import Programs from "@/components/Programs"
import Footer from "@/components/Footer"

export default function ProgramsPage() {
  return (
    <div className="w-full">
      <Navigation />
      <main className="pt-24">
        <Programs />
      </main>
      <Footer />
    </div>
  )
}
