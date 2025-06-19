"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Minus, Sparkles, Zap, HelpCircle } from "lucide-react"

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
  {
    question: "How Does it Work?",
    answer:
      "Our process is simple and straightforward. We start with understanding your requirements, then move to design and development phases, followed by testing and deployment.",
  },
  {
    question: "What Services Do You Offer?",
    answer:
      "We offer a full suite of digital services including web design, development, branding, UI/UX, digital marketing, and ongoing support.",
  },
  {
    question: "How Much Do Your Services Cost?",
    answer:
      "Our pricing is tailored to each project based on scope, complexity, and timeline. Contact us for a custom quote.",
  },
  {
    question: "How Long Will My Project Take?",
    answer:
      "Project timelines vary depending on your requirements, but most websites and branding projects are completed within 2–6 weeks.",
  },
  {
    question: "Do You Offer Revisions?",
    answer:
      "Absolutely. We work closely with you throughout the process and include multiple rounds of revisions to ensure you're happy with the final result.",
  },
  {
    question: "Can You Work With My Existing Brand or Website?",
    answer:
      "Yes! Whether you need a refresh, redesign, or just improvements to an existing platform, we can help.",
  },
  {
    question: "Do You Provide Ongoing Support?",
    answer:
      "Yes, we offer maintenance and support plans to keep your website running smoothly long after launch.",
  },
];


  return (
    <section className="relative bg-white py-20" id="faq">
      <motion.div
        className="absolute top-20 right-20 text-purple-300 z-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}>
        <HelpCircle size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-purple-300 z-20"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}>
        <Sparkles size={50} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-40 text-purple-300 z-20"
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
        <Zap size={40} />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-purple-500">{">"}</span> Frequently Asked Questions.
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
              className="border border-gray-200 rounded-xl overflow-hidden backdrop-blur-sm hover:border-purple-200 transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openFaq === index ? (
                  <Minus className="w-5 h-5 text-purple-600" />
                ) : (
                  <Plus className="w-5 h-5 text-purple-600" />
                )}
              </button>
              {openFaq === index && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
