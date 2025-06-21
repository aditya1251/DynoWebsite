"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Sparkles, Zap } from "lucide-react"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Copy from "@/components/animation/Copy"
import { useRouter } from "next/navigation"

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
      link: "/projects/mobile-banking-app",
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      category: "Web Development",
      description: "Analytics dashboard for e-commerce businesses with real-time data.",
      image: "/dashboard-ui.png",
      tags: ["React", "Dashboard", "Analytics"],
      link: "/projects/ecommerce-dashboard",
    },
    {
      id: 3,
      title: "Restaurant Website",
      category: "Web Development",
      description: "Modern restaurant website with online ordering system.",
      image: "/ecommerce-ui.png",
      tags: ["Next.js", "Restaurant", "Ordering"],
      link: "/projects/restaurant-website",
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      category: "Mobile Apps",
      description: "Health and fitness tracking application with social features.",
      image: "/mobile-app-ui.png",
      tags: ["Flutter", "Health", "Social"],
      link: "/projects/fitness-tracking-app",
    },
    {
      id: 5,
      title: "Corporate Website",
      category: "Web Development",
      description: "Professional corporate website with CMS integration.",
      image: "/dashboard-ui.png",
      tags: ["WordPress", "Corporate", "CMS"],
    link: "/projects/corporate-website",
    },
    {
      id: 6,
      title: "Shopping App UI",
      category: "UI/UX Design",
      description: "Modern shopping app interface with seamless user experience.",
      image: "/ecommerce-ui.png",
      tags: ["Figma", "Shopping", "Mobile"],
      link: "/projects/shopping-app-ui",
    },
  ]

  const router = useRouter();
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage)

  return (
    <section className="relative bg-[#0f164a] overflow-hidden">
      {/* Radial Gradient Blobs */}
      <div
        className="absolute w-[300px] md:w-[800px] h-[300px] md:h-[800px] pointer-events-none top-[20vh] -left-[150px] md:-left-[350px] rounded-full blur-3xl opacity-50 -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(138, 111, 199, 1) 0%, rgba(46, 42, 107, 0) 80%)",
        }}></div>
      <div
        className="absolute w-[300px] md:w-[800px] h-[300px] md:h-[800px] pointer-events-none top-[50vh] right-[-150px] md:right-[-350px] rounded-full blur-3xl opacity-50 -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(138, 111, 199, 1) 0%, rgba(46, 42, 107, 0) 80%)",
        }}></div>
      <div
        className="absolute w-full h-[100vh] top-[45vh] bg-white -z-1"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 67% 23% at 50% -1%, transparent 99%, black 100%)",
          maskImage:
            "radial-gradient(ellipse 67% 23% at 50% -1%, transparent 99%, black 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}></div>

      <motion.div
        className="absolute bottom-20 left-4 sm:left-8 md:left-20 text-[#d297fc]/60 z-20"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}>
        <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-4 sm:right-8 md:right-20 text-[#d297fc]/60 z-20"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}>
        <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-4 sm:left-10 md:left-40 text-[#d297fc]/60 z-20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}>
        <Zap className="w-6 h-6 md:w-8 md:h-8" />
      </motion.div>

      <Header />

      {/* Page Hero */}
      <section className="py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Copy delay={0.5}>
            <div className="mb-4 md:mb-6">
              <span className="text-[#d297fc] text-xl md:text-2xl font-semibold">
                {">"} Our Projects
              </span>
            </div>
          </Copy>

          <Copy delay={0.5}>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Our <span className="text-[#d297fc]">Portfolio</span>
            </h1>
          </Copy>

          <Copy delay={0.5}>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </Copy>
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
                    ? "bg-[#d297fc] text-white shadow-lg"
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group perspective-1000"
              >
                <div className="block bg-white p-6 md:p-10 rounded-[2rem] text-center hover:bg-gradient-to-br hover:from-white hover:to-purple-50 transition-all duration-500 
                  border-2 border-[#d297fc] 
                  hover:shadow-[0_0_30px_rgba(210,151,252,0.3)] 
                  transform hover:-translate-y-3 hover:scale-105 
                  backdrop-blur-sm 
                  before:content-[''] before:absolute before:inset-0 before:border-2 before:border-[#d297fc]/20 before:rounded-[2rem] before:scale-105 before:opacity-0 before:transition-all before:duration-300 hover:before:scale-100 hover:before:opacity-100
                  after:content-[''] after:absolute after:inset-0 after:border-2 after:border-[#d297fc]/40 after:rounded-[2rem] after:scale-110 after:opacity-0 after:transition-all after:duration-500 hover:after:scale-100 hover:after:opacity-100
                  relative overflow-hidden">
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 relative z-10">{project.title}</h3>
                  <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 relative z-10">{project.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#d297fc]/10 text-[#d297fc] text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button onClick={() => router.push(project.link)} className="w-full bg-[#d297fc] text-white py-2 md:py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:bg-[#c277ec]">
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </button>
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
                className="p-2 rounded-full bg-white border-2 border-[#d297fc] shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft size={20} className="text-[#d297fc]" />
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                      currentPage === page ? "bg-[#d297fc] text-white" : "bg-white text-gray-600 hover:bg-[#d297fc]/10 border-2 border-[#d297fc]"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-white border-2 border-[#d297fc] shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowRight size={20} className="text-[#d297fc]" />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </section>
  )
}
