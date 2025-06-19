"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How Does It Work?",
      answer:
        "Our process is simple and straightforward. We start with understanding your requirements, then move to design and development phases, followed by testing and deployment.",
    },
    {
      question: "What Platforms Do You Advertise On?",
      answer:
        "We advertise on all major platforms including Google Ads, Facebook, Instagram, LinkedIn, Twitter, and other relevant social media platforms based on your target audience.",
    },
    {
      question: "How Much Is The Commission?",
      answer:
        "Our commission structure varies based on the project scope and requirements. We offer competitive rates and transparent pricing with no hidden fees.",
    },
    {
      question: "How Do We Start?",
      answer:
        "Getting started is easy! Simply contact us through our website, schedule a consultation, and we'll discuss your project requirements and provide a detailed proposal.",
    },
    {
      question: "What Will Be The Revisions System?",
      answer:
        "We offer unlimited revisions during the design phase and up to 3 major revisions during development. Additional revisions can be accommodated based on project needs.",
    },
  ]

  return (
    <section className="bg-white py-20" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-pink-500">{">"}</span> Frequently Asked Questions.
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openFaq === index ? (
                  <Minus className="w-5 h-5 text-purple-600" />
                ) : (
                  <Plus className="w-5 h-5 text-purple-600" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
