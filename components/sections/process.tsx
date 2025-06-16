"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code, Rocket } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      number: "01",
      title: "Discovery & Research",
      description: "We dive deep into understanding your business goals, target audience, and market landscape.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      number: "02",
      title: "Design & Strategy",
      description: "Creating wireframes, prototypes, and visual designs that align with your brand identity.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      number: "03",
      title: "Development",
      description: "Building your solution using cutting-edge technologies and best development practices.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      number: "04",
      title: "Launch & Support",
      description: "Deploying your project and providing ongoing support to ensure continued success.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-pink-500">{">"}</span> Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to ensure your project is delivered on time and exceeds expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  {step.icon}
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
