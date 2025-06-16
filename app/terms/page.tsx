"use client"

import { motion } from "framer-motion"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-900 to-indigo-900">
        <Header />
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="text-pink-400">{">"}</span> Terms & Conditions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              Last updated: {new Date().toLocaleDateString()}
            </motion.p>
          </div>
        </section>
      </div>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using Solvorry's services, you accept and agree to be bound by the terms and provision
                of this agreement. These terms apply to all visitors, users, and others who access or use the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Description</h2>
              <p className="text-gray-600 mb-4">
                Solvorry provides digital design and development services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Web design and development</li>
                <li>Mobile application development</li>
                <li>UI/UX design services</li>
                <li>Branding and graphic design</li>
                <li>Digital marketing services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
              <p className="text-gray-600 mb-4">Payment terms are as follows:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>50% deposit required before project commencement</li>
                <li>Remaining balance due upon project completion</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are in USD unless otherwise specified</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-600">
                Upon full payment, clients receive full ownership of the final deliverables. Solvorry retains the right
                to showcase completed work in our portfolio and marketing materials unless otherwise agreed upon in
                writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600">
                Solvorry shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use of our services. Our total liability shall not exceed the amount paid for the
                specific service in question.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms & Conditions, please contact us at{" "}
                <a href="mailto:legal@solvorry.com" className="text-purple-600 hover:underline">
                  legal@solvorry.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
