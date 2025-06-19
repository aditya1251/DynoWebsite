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
    <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Grow Faster?
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl mt-2 block bg-clip-text text-transparent bg-gray-300">Let's Talk About Your Next Big Move</span>
          </h2>
          <motion.button
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-[0_0_30px_rgba(219,39,119,0.3)] transition-all duration-300 flex items-center space-x-2 mx-auto group cursor-pointer"
          >
            <span className="group-hover:translate-x-1 transition-transform duration-300">Contact Our Team</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
          <p className="text-gray-300 mt-4 text-sm sm:text-base">Take the first step towards your success story</p>
        </motion.div>
      </div>
    </section>
  )
}
