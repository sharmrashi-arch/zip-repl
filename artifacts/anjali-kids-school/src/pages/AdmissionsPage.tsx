import { useState } from "react"
import Navigation from "@/components/Navigation"
import { motion } from "framer-motion"

export default function AdmissionsPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [form, setForm] = useState({
    childName: "",
    dob: "",
    program: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-orange-50">
      <Navigation />
      <div className="pt-28 pb-20 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-8 md:p-10"
        >
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Application Submitted!</h2>
              <p className="text-gray-500">We'll get in touch with you soon.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <span className="text-xs font-bold text-orange-500 tracking-widest uppercase">Admissions</span>
                <h1 className="text-3xl font-extrabold text-gray-900 mt-1">Apply Now</h1>
              </div>

              {status === "error" && (
                <div className="mb-4 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium text-center">
                  Kuch galat hua. Please dobara try karein ya school ko call karein.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Child's Full Name</label>
                  <input
                    type="text"
                    name="childName"
                    required
                    value={form.childName}
                    onChange={handleChange}
                    placeholder="Enter child's name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    required
                    value={form.dob}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Program</label>
                  <select
                    name="program"
                    required
                    value={form.program}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition bg-white"
                  >
                    <option value="">Select a program</option>
                    <option value="Playgroup (1.5 – 2.5 yrs)">Playgroup (1.5 – 2.5 yrs)</option>
                    <option value="Nursery (2.5 – 3.5 yrs)">Nursery (2.5 – 3.5 yrs)</option>
                    <option value="LKG / Pre-KG (3.5 – 4.5 yrs)">LKG / Pre-KG (3.5 – 4.5 yrs)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Parent / Guardian Name</label>
                  <input
                    type="text"
                    name="parentName"
                    required
                    value={form.parentName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="optional"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Address</label>
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Home address (optional)"
                    rows={2}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold text-base py-3 rounded-full shadow-md hover:shadow-orange-300 transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "loading" ? "Submitting…" : "Submit Application"}
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}
