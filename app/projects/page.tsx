"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  const categories = ["All", "Mobile Apps", "Web Development", "UI/UX Design", "E-commerce"]

  const projects = [
    {
      id: 1,
      title: "Mobile Banking App",
      category: "Mobile Apps",
      description: "A comprehensive mobile banking solution with modern UI/UX design.",
      image: "/mobile-app-ui.png",
      tags: ["React Native", "UI/UX", "Finance"],
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      category: "Web Development",
      description: "Analytics dashboard for e-commerce businesses with real-time data.",
      image: "/dashboard-ui.png",
      tags: ["React", "Dashboard", "Analytics"],
    },
    {
      id: 3,
      title: "Restaurant Website",
      category: "Web Development",
      description: "Modern restaurant website with online ordering system.",
      image: "/ecommerce-ui.png",
      tags: ["Next.js", "Restaurant", "Ordering"],
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      category: "Mobile Apps",
      description: "Health and fitness tracking application with social features.",
      image: "/mobile-app-ui.png",
      tags: ["Flutter", "Health", "Social"],
    },
    {
      id: 5,
      title: "Corporate Website",
      category: "Web Development",
      description: "Professional corporate website with CMS integration.",
      image: "/dashboard-ui.png",
      tags: ["WordPress", "Corporate", "CMS"],
    },
    {
      id: 6,
      title: "Shopping App UI",
      category: "UI/UX Design",
      description: "Modern shopping app interface with seamless user experience.",
      image: "/ecommerce-ui.png",
      tags: ["Figma", "Shopping", "Mobile"],
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with dark background */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900">
        <Header />

        {/* Page Hero */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="text-pink-400">{">"}</span> Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Explore our portfolio of successful projects across various industries and technologies.
            </motion.p>
          </div>
        </section>
      </div>

      {/* Projects Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setCurrentPage(1)
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-purple-50 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-purple-600 font-semibold">
                    <span>View Details</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={20} className="text-purple-600" />
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                      currentPage === page ? "bg-purple-600 text-white" : "bg-white text-gray-600 hover:bg-purple-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowRight size={20} className="text-purple-600" />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
