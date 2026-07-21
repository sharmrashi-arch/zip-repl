import Navigation from "@/components/Navigation"
import Teachers from "@/components/Teachers"
import Footer from "@/components/Footer"

export default function TeachersPage() {
  return (
    <div className="w-full">
      <Navigation />
      <main className="pt-24">
        <Teachers />
      </main>
      <Footer />
    </div>
  )
}
