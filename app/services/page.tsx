"use client"

import { motion } from "framer-motion"
import { Smartphone, Globe, Settings, Palette, ShoppingCart, BarChart3, ArrowRight, Check } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function ServicesPage() {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "iOS Development", "Android Development"],
      price: "Starting from $5,000",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications.",
      features: ["React/Next.js", "Node.js", "Database Design", "API Development"],
      price: "Starting from $3,000",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting from $2,000",
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration.",
      features: ["Shopify", "WooCommerce", "Custom Solutions", "Payment Gateway"],
      price: "Starting from $4,000",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies and campaigns.",
      features: ["SEO Optimization", "Social Media", "Content Marketing", "Analytics"],
      price: "Starting from $1,500/month",
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "System Integration",
      description: "Seamless integration of business systems and processes.",
      features: ["API Integration", "Database Migration", "Cloud Solutions", "Automation"],
      price: "Starting from $3,500",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals and requirements.",
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "Creating wireframes and prototypes to visualize the solution.",
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution using the latest technologies and best practices.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing and deployment to ensure everything works perfectly.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
              <span className="text-pink-400">{">"}</span> Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              We offer comprehensive digital solutions to help your business grow and succeed in the digital world.
            </motion.p>
          </div>
        </section>
      </div>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <Check size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-6">
                  <div className="text-2xl font-bold text-purple-600 mb-4">{service.price}</div>
                  <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              We follow a proven process to ensure your project is delivered on time and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
