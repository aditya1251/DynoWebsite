"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, User } from "lucide-react"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function BlogPage() {
  const articles = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape and how they'll impact your business.",
      author: "John Smith",
      date: "March 15, 2024",
      image: "/placeholder.svg?height=300&width=400",
      category: "Development",
    },
    {
      title: "UI/UX Design Principles That Drive Conversions",
      excerpt:
        "Learn how to create user experiences that not only look great but also convert visitors into customers.",
      author: "Sarah Johnson",
      date: "March 12, 2024",
      image: "/placeholder.svg?height=300&width=400",
      category: "Design",
    },
    {
      title: "Building Scalable Mobile Applications",
      excerpt: "Best practices for developing mobile apps that can grow with your business needs.",
      author: "Mike Chen",
      date: "March 10, 2024",
      image: "/placeholder.svg?height=300&width=400",
      category: "Mobile",
    },
    {
      title: "The Importance of Brand Identity in Digital Marketing",
      excerpt: "How a strong brand identity can set you apart from competitors and build customer loyalty.",
      author: "Emily Davis",
      date: "March 8, 2024",
      image: "/placeholder.svg?height=300&width=400",
      category: "Branding",
    },
    {
      title: "Optimizing Website Performance for Better SEO",
      excerpt: "Technical strategies to improve your website's speed and search engine rankings.",
      author: "John Smith",
      date: "March 5, 2024",
      image: "/placeholder.svg?height=300&width=400",
      category: "SEO",
    },
    {
      title: "E-commerce Trends That Will Shape 2024",
      excerpt: "Stay ahead of the curve with these emerging e-commerce trends and technologies.",
      author: "Sarah Johnson",
      date: "March 3, 2024",
      image: "/placeholder.svg?height=300&width=400",
      category: "E-commerce",
    },
  ]

  const categories = ["All", "Development", "Design", "Mobile", "Branding", "SEO", "E-commerce"]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900">
        <Header />
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="text-pink-400">{">"}</span> Our Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Insights, tips, and trends from the world of digital design and development.
            </motion.p>
          </div>
        </section>
      </div>

      {/* Categories */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
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

      <Footer />
    </div>
  )
}
