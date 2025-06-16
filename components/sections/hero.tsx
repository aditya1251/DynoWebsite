"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Sparkles,
  ArrowRight,
  ChevronRight,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Copy from "../animation/Copy";

export default function HeroSection() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/contact");
  };

  return (
    <section className="relative pt-28 bg-[#0f164a] overflow-hidden">
      {/* Radial Gradient Blob */}
      <div
        className="absolute w-[800px] h-[800px] top-[20vh] -left-[350px] rounded-full blur-3xl opacity-50 -z-0 "
        style={{
          background:
            "radial-gradient(circle, rgba(138, 111, 199, 1) 0%, rgba(46, 42, 107, 0) 80%)",
        }}></div>
      <div
        className="absolute w-[800px] h-[800px] top-[50vh] right-[-350px] rounded-full blur-3xl opacity-50 -z-0 "
        style={{
          background:
            "radial-gradient(circle, rgba(138, 111, 199, 1) 0%, rgba(46, 42, 107, 0) 80%)",
        }}></div>
      {/* Floating Thunder Icons */}
      <motion.div
        className="absolute top-1/4 right-20 text-white/20 z-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}>
        <Zap size={60} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-40 text-white/15 z-20"
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

      {/* Floating Stars */}
      <motion.div
        className="absolute top-1/4 left-20 text-white/20 z-20"
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

      <div
        className="absolute w-full h-[92vh] top-[90vh] bg-white -z-1"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 67% 23% at 50% -1%, transparent 99%, black 100%)",
          maskImage:
            "radial-gradient(ellipse 67% 23% at 50% -1%, transparent 99%, black 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}></div>

      {/* Hero Content */}
      <main className="relative z-10 px-6 pt-16 pb-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <Copy delay={0.5}>
              <h1 className="text-5xl md:text-7xl font-bold font-GoldmanBold  text-white mb-8 leading-tight">
                <span className=" inline-flex items-center">
                  <MdOutlineKeyboardArrowRight
                    className="text-[#d297fc] rounded-none"
                    size={60}
                  />{" "}
                  Turning your dream{" "}
                </span>
                <br />
                ideas into digital reality
              </h1>
            </Copy>
            <Copy delay={0.5}>
              <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                <br />
                Your idea, our expertise together we build seamless web
                experiences that delight visitors and deliver results.
              </p>
            </Copy>
            <div className="relative overflow-hidden">
              <motion.button
                initial={{ opacity: 0, y: 65 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#d297fc] to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto border border-white/10 backdrop-blur-sm">
                <span>Get Started</span>
                <MoveUpRight size={20} />{" "}
              </motion.button>{" "}
            </div>          </div>
          {/* Laptop Mockup with Multiple Background Boxes */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative max-w-4xl mx-auto">
            <div className="relative">
              <motion.div
                className="absolute max-w-4xl inset-0 bg-gradient-to-r from-[#d297fc]/20 to-purple-600/20 rounded-3xl transform rotate-2 scale-105 blur-sm"
                animate={{
                  rotate: [2, -1, 2],
                  scale: [1.05, 1.08, 1.05],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute max-w-4xl inset-0 bg-gradient-to-r from-[#d297fc]/25 to-purple-600/25 rounded-3xl transform -rotate-1 scale-102"
                animate={{
                  rotate: [-1, 1.5, -1],
                  scale: [1.02, 1.04, 1.02],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              <div className="relative max-w-4xl bg-gradient-to-r from-[#d297fc]/30 to-purple-600/30 p-8 rounded-3xl backdrop-blur-sm border border-white/20 shadow-2xl">
                <div className="relative max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-auto max-h-[500px] object-contain">
                    <source src="/DynoSol.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </motion.div>{" "}
        </div>
      </main>
    </section>
  );
}
