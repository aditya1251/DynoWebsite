"use client"

import { motion } from "framer-motion"
import { FileText, Users, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function PagesDirectory() {
  const pageCategories = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Company Pages",
      description: "Learn more about our company, team, and values.",
      pages: [
        { name: "About Us", href: "/about", description: "Our story and mission" },
        { name: "Our Team", href: "/about#team", description: "Meet the people behind Solvorry" },
        { name: "Careers", href: "/careers", description: "Join our growing team" },
        { name: "Contact", href: "/contact", description: "Get in touch with us" },
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Services & Work",
      description: "Explore our services and portfolio of work.",
      pages: [
        { name: "Services", href: "/services", description: "Our comprehensive service offerings" },
        { name: "Projects", href: "/projects", description: "Portfolio of our work" },
        { name: "Case Studies", href: "/case-studies", description: "Detailed project breakdowns" },
        { name: "Testimonials", href: "/testimonials", description: "What our clients say" },
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Resources",
      description: "Helpful resources and information.",
      pages: [
        { name: "Blog", href: "/blog", description: "Latest insights and updates" },
        { name: "FAQ", href: "/faq", description: "Frequently asked questions" },
        { name: "Privacy Policy", href: "/privacy", description: "How we protect your data" },
        { name: "Terms of Service", href: "/terms", description: "Our terms and conditions" },
      ],
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
              <span className="text-pink-400">{">"}</span> Site Pages
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Explore all the pages and resources available on our website.
            </motion.p>
          </div>
        </section>
      </div>

      {/* Pages Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {pageCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-purple-600 mb-6">{category.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-gray-600 mb-8">{category.description}</p>

                <div className="space-y-4">
                  {category.pages.map((page, pageIndex) => (
                    <Link
                      key={pageIndex}
                      href={page.href}
                      className="block p-4 rounded-xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                            {page.name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">{page.description}</p>
                        </div>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-purple-600 transition-colors" />
                      </div>
                    </Link>
                  ))}
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
