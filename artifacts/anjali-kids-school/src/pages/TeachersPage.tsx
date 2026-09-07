import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import Teachers from "@/components/Teachers"
import Footer from "@/components/Footer"

export default function TeachersPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Teachers | Anjali Kids Play School | Our Educators</title>
      </Helmet>
      <Navigation />
      <main className="pt-24">
        <Teachers />
      </main>
      <Footer />
    </div>
  )
}
