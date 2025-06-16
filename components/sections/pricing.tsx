"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "per project",
      description: "Perfect for small businesses and startups",
      features: [
        "Custom Website Design",
        "Responsive Development",
        "Basic SEO Setup",
        "Contact Form Integration",
        "3 Months Support",
        "2 Revisions",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "per project",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Starter",
        "Advanced Animations",
        "CMS Integration",
        "E-commerce Functionality",
        "Advanced SEO",
        "6 Months Support",
        "5 Revisions",
        "Performance Optimization",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "For large-scale projects",
      features: [
        "Everything in Professional",
        "Custom Development",
        "Third-party Integrations",
        "Advanced Security",
        "Dedicated Project Manager",
        "12 Months Support",
        "Unlimited Revisions",
        "Priority Support",
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-pink-500">{">"}</span> Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your project. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-3xl shadow-lg p-8 ${
                plan.popular ? "ring-2 ring-purple-600 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                <span>Get Started</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
