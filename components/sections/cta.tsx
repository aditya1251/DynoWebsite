"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CtaSection() {
  const router = useRouter()

  const handleContactClick = () => {
    router.push("/contact")
  }

  return (
    <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Apply For Free Guide.
            <br />
            Build Yourself With This Free Guide.
          </h2>
          <button
            onClick={handleContactClick}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>Download Guide</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
