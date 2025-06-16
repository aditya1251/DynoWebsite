"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/team-photo.jpg"
                alt="Happy clients"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-pink-500">{">"}</span> Clients Adore Our Support Staff, And Here's Why
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our Customers Are The Business And Our Clients Always First. We Provide 24/7 Support For Our Clients And
              We Are Always Ready To Help.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">32K</div>
                <div className="text-gray-600">Satisfied Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24+</div>
                <div className="text-gray-600">Years Of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">12.4+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">400+</div>
                <div className="text-gray-600">Professional Experts</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
