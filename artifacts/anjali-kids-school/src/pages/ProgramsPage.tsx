import { Helmet } from "react-helmet-async"
import Navigation from "@/components/Navigation"
import Programs from "@/components/Programs"
import Footer from "@/components/Footer"

export default function ProgramsPage() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Programs | Anjali Kids Play School | Early Education Courses</title>
      </Helmet>
      <Navigation />
      <main className="pt-24">
        <Programs />
      </main>
      <Footer />
    </div>
  )
}
