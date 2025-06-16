"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function BlogSection() {
  const articles = [
    {
      title: "They Are Asking All Respondents About The Business",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 15, 2024",
    },
    {
      title: "They Are Asking All Respondents About The Business",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 12, 2024",
    },
    {
      title: "They Are Asking All Respondents About The Business",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 10, 2024",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-pink-500">{">"}</span> Our Latest News And Article
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-2"
            >
              <div className="overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 mb-3">{article.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{article.title}</h3>
                <div className="flex items-center text-purple-600 font-semibold">
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
