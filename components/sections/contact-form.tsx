"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { MdWhatsapp } from "react-icons/md";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Mobile App",
    "Website Design",
    "Branding",
    "Web Development",
    "Illustration",
    "Logo Design",
    "Graphic Design",
  ];

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      toast.success("Thanks for reaching out! We'll contact you soon.", {
        duration: 5000,
      });
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, services: selectedServices }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast.success("Message sent successfully!", {
        duration: 5000,
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      setSelectedServices([]);
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-[#0f164a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#d297fc] rounded-full opacity-30"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600 rounded-full opacity-20"></div>

            <div className="relative z-10">
              <h2 className="text-6xl md:text-7xl font-bold mb-6">
                <span className="text-[#d297fc]">Say Hi!</span> <br />
                <span className="text-white">and tell me about your idea</span>
              </h2>

              <p className="text-xl text-white/80">
                Have a nice works? Reach out and let's chat.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.instagram.com/dyno.solutions"
                  className="text-white/80 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/people/Dyno-Solutions/61577346787579/"
                  className="text-white/80 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/Dyno_Solutions"
                  className="text-white/80 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="wa.me/917060140150"
                  className="text-white/80 hover:text-white transition-colors">
                  <MdWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/80 mb-1">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Hello..."
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 focus:ring-2 focus:ring-[#d297fc] focus:border-transparent outline-none transition-all text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Where can I reply?"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 focus:ring-2 focus:ring-[#d297fc] focus:border-transparent outline-none transition-all text-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-white/80 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company or website?"
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 focus:ring-2 focus:ring-[#d297fc] focus:border-transparent outline-none transition-all text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-3">
                  What's in your mind?*
                </label>
                <div className="flex flex-wrap gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        selectedServices.includes(service)
                          ? "bg-[#d297fc] text-white"
                          : "bg-white/10 text-white/80 hover:bg-white/20 border border-white/20"
                      }`}>
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 focus:ring-2 focus:ring-[#d297fc] focus:border-transparent outline-none transition-all text-white"></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#d297fc] to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 disabled:opacity-70 border border-white/10">
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
