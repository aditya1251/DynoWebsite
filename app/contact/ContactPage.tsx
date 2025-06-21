"use client";
import type React from "react";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  HelpCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import { MdWhatsapp } from "react-icons/md";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ContactFormSection from "@/components/sections/contact-form";
import Copy from "@/components/animation/Copy";

const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Our friendly team is here to help.",
      contact: "info@dynosol.tech",
      href: "mailto:info@dynosol.tech",
      delay: 0,
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm IST.",
      contact: "+91 70601 40150",
      href: "tel:+917060140150",
      delay: 0.2,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our office.",
      contact: "E2 601, Supertech Upcountry, Greater Noida, 203201",
      href: "https://maps.google.com/?q=E2+601+Supertech+Upcountry+Greater+Noida",
      delay: 0.4,
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/dyno.solutions",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/people/Dyno-Solutions/61577346787579/",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "https://x.com/Dyno_Solutions",
      label: "Twitter",
    },
    {
      icon: MdWhatsapp,
      href: "https://wa.me/917060140150",
      label: "WhatsApp",
    },
  ];


export default function ContactPage() {
  
  return (
    <section className="relative bg-[#0f164a] overflow-hidden">
      {/* Radial Gradient Blobs */}
      <div
        className="absolute w-[800px] h-[800px] pointer-events-none top-[20vh] -left-[350px] rounded-full blur-3xl opacity-50 -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(138, 111, 199, 1) 0%, rgba(46, 42, 107, 0) 80%)",
        }}></div>
      <div
        className="absolute w-[800px] h-[800px] pointer-events-none top-[50vh] right-[-350px] rounded-full blur-3xl opacity-50 -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(138, 111, 199, 1) 0%, rgba(46, 42, 107, 0) 80%)",
        }}></div>
      <div
        className="absolute w-full h-[100vh] top-[55vh] bg-white -z-1"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 67% 23% at 50% -1%, transparent 99%, black 100%)",
          maskImage:
            "radial-gradient(ellipse 67% 23% at 50% -1%, transparent 99%, black 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}></div>
      <Header />
      {/* Page Hero */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Copy delay={0.5}>
            <div className="mb-6">
              <span className="text-[#d297fc] text-2xl font-semibold">
                {">"} Let's Connect
              </span>
            </div>
          </Copy>

          <Copy delay={0.5}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Get In <span className="text-[#d297fc]">Touch</span>
            </h1>
          </Copy>

          <Copy delay={0.5}>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Let's discuss how we can help bring your
              ideas to life with cutting-edge solutions.
            </p>
          </Copy>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center space-x-6 mt-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-[#d297fc] transition-all duration-300 border border-white/20 hover:border-[#d297fc]"
                aria-label={social.label}>
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Contact Info Cards */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <motion.div
          className="absolute top-20 right-8 md:right-20 text-[#d297fc]/60 z-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}>
          <HelpCircle size={40} />
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-8 md:left-20 text-[#d297fc]/60 z-20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}>
          <Sparkles size={35} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-8 md:right-20 text-[#d297fc]/60 z-20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}>
          <Sparkles size={35} />
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-10 md:left-40 text-[#d297fc]/60 z-20"
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
          <Zap size={30} />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20">
              <Copy delay={0.5}>
            <span className="text-[#d297fc] text-xl font-semibold mb-4 block animate-pulse">
              Contact Options
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Multiple Ways to{" "}
              <span className="text-[#d297fc] bg-clip-text bg-gradient-to-r from-[#d297fc] to-purple-500 animate-gradient">
                Reach Us
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
              Choose your preferred way to connect with our dedicated team
            </p>
            </Copy>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: info.delay }}
                viewport={{ once: true }}
                className="group perspective-1000">
                <a
                  href={info.href}
                  target={info.icon === MapPin ? "_blank" : "_self"}
                  rel={info.icon === MapPin ? "noopener noreferrer" : ""}
                  className="block bg-white p-10 rounded-[2rem] text-center hover:bg-gradient-to-br hover:from-white hover:to-purple-50 transition-all duration-500 
                  border-2 border-transparent border-[#d297fc] 
                  hover:shadow-[0_0_30px_rgba(210,151,252,0.3)] 
                  transform hover:-translate-y-3 hover:scale-105 
                  backdrop-blur-sm 
                  before:content-[''] before:absolute before:inset-0 before:border-2 before:border-[#d297fc]/20 before:rounded-[2rem] before:scale-105 before:opacity-0 before:transition-all before:duration-300 hover:before:scale-100 hover:before:opacity-100
                  after:content-[''] after:absolute after:inset-0 after:border-2 after:border-[#d297fc]/40 after:rounded-[2rem] after:scale-110 after:opacity-0 after:transition-all after:duration-500 hover:after:scale-100 hover:after:opacity-100
                  relative overflow-hidden">
                  <div className="w-20 h-20 bg-[#d297fc]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#d297fc]/20 transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg">
                    <info.icon className="w-10 h-10 text-[#d297fc] group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg relative z-10">
                    {info.description}
                  </p>
                  <p className="text-[#d297fc] font-semibold text-lg group-hover:text-gray-900 transition-all relative z-10 group-hover:scale-105 transform">
                    {info.contact}
                  </p>
                </a>
              </motion.div>
            ))}{" "}
          </div>
        </div>
      </section>
      {/* Contact Form Section */} <ContactFormSection />
      <Footer />
    </section>
  );
}
