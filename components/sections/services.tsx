"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Globe, Settings, AppWindow } from "lucide-react";
import Copy from "../animation/Copy";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const services = [
    {
      icon: <Smartphone className="w-8 md:w-12 h-8 md:h-12" />,
      title: "App Development",
      description:
        "We specialize in creating innovative mobile applications that deliver exceptional user experiences...",
      image:
        "https://res.cloudinary.com/dg029rpjr/image/upload/v1750100245/Desarrollo-apps-moviles_zvagxd.jpg",
    },
    {
      icon: <Globe className="w-8 md:w-12 h-8 md:h-12" />,
      title: "Web Development",
      description:
        "From responsive websites to complex web applications, we build modern, scalable, and secure web solutions...",
      image:
        "https://res.cloudinary.com/dg029rpjr/image/upload/v1750100383/5467393_1687-scaled_zpxa5u.jpg",
    },
    {
      icon: <Settings className="w-8 md:w-12 h-8 md:h-12" />,
      title: "SEO Optimization",
      description:
        "Our system development services focus on creating robust, efficient, and scalable solutions...",
      image:
        "https://res.cloudinary.com/dg029rpjr/image/upload/v1750100675/52b0042a5d3458aee19b56621ff9255b_jyutz8.jpg",
    },
    {
      icon: <AppWindow className="w-8 md:w-12 h-8 md:h-12" />,
      title: "CRM Development",
      description:
        "Transform your customer relationships with our custom CRM solutions...",
      image:
        "https://res.cloudinary.com/dg029rpjr/image/upload/v1750101390/crm-finger-over-digital-touchboard-1280x72-1_af8p08.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="bg-[#f1f1f3] min-h-screen py-10 md:py-20 shadow-[0_10px_20px_-20px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Copy delay={0.5}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-SpaceMonoRegular font-bold text-gray-900 mb-6">
            <span className="inline-flex items-center">
              <MdOutlineKeyboardArrowRight className="text-[#d297fc] rounded-none w-8 h-8 sm:w-10 sm:h-10 md:w-[60px] md:h-[60px]" />
              We Offer A Wide Range Of Design Services.
            </span>
          </h2>
        </Copy>
        <div className="gap-4 md:gap-6 flex flex-col justify-center items-start mt-8 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full items-center justify-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                onClick={() => setActiveIndex(index)}
                className={`relative bg-white p-3 md:p-4 flex overflow-hidden gap-2 md:gap-3 justify-start items-center rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  activeIndex === index
                    ? "border-2 border-purple-600 w-full"
                    : "w-full"
                }`}>
                <div className="text-purple-600 transition-transform duration-300 hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900">
                  {service.title}
                </h3>

                {activeIndex === index && (
                  <motion.div
                    layoutId="progressBar"
                    className="absolute bottom-0 pointer-events-none left-0 right-0 h-1"
                    initial={{
                      background:
                        "linear-gradient(90deg, #9333ea 0%, #d946ef 100%)",
                    }}
                    animate={{
                      scaleX: [0, 1],
                      background: [
                        "linear-gradient(90deg, #9333ea 0%, #d946ef 100%)",
                        "linear-gradient(90deg, #d946ef 0%, #9333ea 100%)",
                      ],
                    }}
                    transition={{
                      scaleX: { duration: 2.8, ease: "easeInOut" },
                      background: {
                        duration: 2.8,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 sm:p-8 md:p-10 overflow-hidden rounded-2xl w-full max-w-7xl shadow-2xl relative backdrop-blur-sm border border-purple-100">
            <div className="absolute top-0 right-0 p-4">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-purple-500 text-2xl">
                ➜
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="rounded-xl w-[400px] h-[200px] object-cover shadow-lg"
                  />
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-2/3">
                  <motion.p className="text-base md:text-lg font-SpaceMonoRegular text-gray-700 leading-relaxed">
                    {services[activeIndex].description}
                  </motion.p>
                  <motion.div
                    className="mt-4 flex gap-2 text-sm text-purple-600"
                    animate={{
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}>
                    Learn more <span>→</span>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-20" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
