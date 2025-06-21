"use client"

import { motion } from "framer-motion"
import { Smartphone, Globe, Settings, Palette, ShoppingCart, BarChart3, ArrowRight, Check, Sparkles, Zap } from "lucide-react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import Copy from "@/components/animation/Copy"
import ProcessSection from "@/components/sections/process"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const services = [
    {
      icon: <Smartphone className="w-8 md:w-12 h-8 md:h-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "iOS Development", "Android Development"],
      price: "",
    },
    {
      icon: <Globe className="w-8 md:w-12 h-8 md:h-12" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications.",
      features: ["React/Next.js", "Node.js", "Database Design", "API Development"],
      price: "",
    },
    {
      icon: <Palette className="w-8 md:w-12 h-8 md:h-12" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "",
    },
    {
      icon: <ShoppingCart className="w-8 md:w-12 h-8 md:h-12" />,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration.",
      features: ["Shopify", "WooCommerce", "Custom Solutions", "Payment Gateway"],
      price: "",
    },
    {
      icon: <BarChart3 className="w-8 md:w-12 h-8 md:h-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies and campaigns.",
      features: ["SEO Optimization", "Social Media", "Content Marketing", "Analytics"],
      price: "",
    },
    {
      icon: <Settings className="w-8 md:w-12 h-8 md:h-12" />,
      title: "System Integration",
      description: "Seamless integration of business systems and processes.",
      features: ["API Integration", "Database Migration", "Cloud Solutions", "Automation"],
      price: "",
    },
  ]

  const router = useRouter();

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
                {">"} Our Services
              </span>
            </div>
          </Copy>

          <Copy delay={0.5}>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Digital <span className="text-[#d297fc]">Solutions</span>
            </h1>
          </Copy>

          <Copy delay={0.5}>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
              We offer comprehensive digital solutions to help your business grow and succeed in the digital world.
            </p>
          </Copy>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group perspective-1000">
                <div className="block bg-white p-6 md:p-10 rounded-[2rem] text-center hover:bg-gradient-to-br hover:from-white hover:to-purple-50 transition-all duration-500 
                  border-2 border-[#d297fc] 
                  hover:shadow-[0_0_30px_rgba(210,151,252,0.3)] 
                  transform hover:-translate-y-3 hover:scale-105 
                  backdrop-blur-sm 
                  before:content-[''] before:absolute before:inset-0 before:border-2 before:border-[#d297fc]/20 before:rounded-[2rem] before:scale-105 before:opacity-0 before:transition-all before:duration-300 hover:before:scale-100 hover:before:opacity-100
                  after:content-[''] after:absolute after:inset-0 after:border-2 after:border-[#d297fc]/40 after:rounded-[2rem] after:scale-110 after:opacity-0 after:transition-all after:duration-500 hover:after:scale-100 hover:after:opacity-100
                  relative overflow-hidden">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-[#d297fc]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-[#d297fc]/20 transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 relative z-10">{service.title}</h3>
                  <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 relative z-10">{service.description}</p>

                  <ul className="space-y-2 mb-4 md:mb-6 text-left">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm md:text-base text-gray-600">
                        <Check size={16} className="text-[#d297fc] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4 md:pt-6 relative z-10">
                    <div className="text-xl md:text-2xl font-bold text-[#d297fc] mb-3 md:mb-4 group-hover:scale-105 transform">{service.price}</div>
                    <button onClick={() => router.push("/contact")} className="w-full bg-[#d297fc] text-white py-2 md:py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:bg-[#c277ec]">
                      <span>Get Started</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      <Footer />
    </section>
  )
}
