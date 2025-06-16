"use client";

import { motion } from "framer-motion";
import { Dot } from "lucide-react";
import { useRef } from "react";

const scrollItems = [
  "Web Development",
  "UI/UX Design",
  "Mobile Apps",
  "E-commerce",
  "Branding",
  "SEO Optimization",
  "Digital Marketing",
  "Custom Solutions",
  "API Integration",
  "Performance Optimization",
  "Consulting",
  "Maintenance & Support",
];

export default function ScrollVelocitySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative mb-10 overflow-hidden">
      <div className="relative z-10">
        <div ref={containerRef} className="relative">
          {/* First Row - Left to Right */}
          <div className="flex mb-8">
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}>
              {[...scrollItems, ...scrollItems].map((item, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 bg-white/5 font-GoldmanRegular backdrop-blur-sm flex justify-center items-center py-3 transition-all duration-300">
                  <span className="text-[#0f164a] font-bold text-4xl whitespace-nowrap">
                    {item}
                  </span>
                  <Dot className="ml-10 text-[#0f164a] text-xl" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="flex">
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}>
              {[
                ...scrollItems.slice().reverse(),
                ...scrollItems.slice().reverse(),
              ].map((item, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 flex justify-center items-center bg-white/5 backdrop-blur-sm py-3 transition-all duration-300">
                  <span className="text-[#0f164a] font-bold font-GoldmanRegular text-4xl whitespace-nowrap">
                    {item}
                  </span>
                  <Dot className="ml-10 text-[#0f164a] text-xl" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
