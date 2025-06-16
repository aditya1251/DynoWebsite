"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "Mobile App UI Design",
      description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting.",
      image: "/mobile-app-ui.png",
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Professional dashboard interface with data visualization.",
      image: "/dashboard-ui.png",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with seamless user experience.",
      image: "/ecommerce-ui.png",
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            <span className="text-pink-500">{">"}</span> Projects We Have For Our Clients
          </motion.h2>

          <div className="flex space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center hover:bg-purple-200 transition-colors"
              aria-label="Previous project"
            >
              <ArrowLeft size={20} className="text-purple-600" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center hover:bg-purple-600 transition-colors"
              aria-label="Next project"
            >
              <ArrowRight size={20} className="text-white" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-3xl">
                  <div className="bg-purple-200/50 rounded-3xl overflow-hidden p-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={1200}
                      height={675}
                      className="w-full h-auto max-h-[400px] object-contain rounded-2xl"
                    />
                  </div>
                  <div className="mt-8 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
