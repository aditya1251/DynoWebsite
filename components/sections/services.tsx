"use client"

import { motion } from "framer-motion"
import { Smartphone, Globe, Settings } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "App Development",
      description: "Creating The Best Marketing Material For Your Business.",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "Creating The Best Marketing Material For Your Business.",
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "System Development",
      description: "Creating The Best Marketing Material For Your Business.",
    },
  ]

  return (
    <section className=" bg-[#f1f1f3] h-screen py-20 shadow-[0_10px_20px_-20px_rgba(0,0,0,0.3)]"> 
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-pink-500">{">"}</span> We Offer A Wide Range Of Design Services.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
            >
              <div className="text-purple-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}