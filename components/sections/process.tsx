"use client";

import { useEffect, useRef } from "react";
import { Search, Palette, Code, Rocket } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Copy from "../animation/Copy";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const stepsRef = useRef([]);

  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      number: "01",
      title: "Discovery & Research",
      description:
        "We dive deep into understanding your business goals, target audience, and market landscape.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      number: "02",
      title: "Design & Strategy",
      description:
        "Creating wireframes, prototypes, and visual designs that align with your brand identity.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      number: "03",
      title: "Development",
      description:
        "Building your solution using cutting-edge technologies and best development practices.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      number: "04",
      title: "Launch & Support",
      description:
        "Deploying your project and providing ongoing support to ensure continued success.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });

      stepsRef.current.forEach((step, index) => {
        gsap.from(step, {
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: index * 0.2,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-[#f1f1f3] overflow-hidden">
      <div
        className="absolute w-[800px] h-[800px] top-[20vh] -left-[350px] rounded-full blur-3xl opacity-30 -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(138, 111, 199, 1) 0%, rgba(46, 42, 107, 0) 80%)",
        }}></div>
      <div
        className="absolute w-[800px] h-[800px] bottom-[20vh] right-[-350px] rounded-full blur-3xl opacity-30 -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(138, 111, 199, 1) 0%, rgba(46, 42, 107, 0) 80%)",
        }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <Copy delay={0.5}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-SpaceMonoRegular font-bold text-gray-900 mb-4 md:mb-6">
              <span className="inline-flex items-center">
                <MdOutlineKeyboardArrowRight className="text-[#d297fc] rounded-none w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-[60px] lg:h-[60px]" />{" "}
                Our Process
              </span>
            </h2>
          </Copy>
          <Copy delay={0.7}>
          <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
            We follow a proven methodology to ensure your project is delivered
            on time and exceeds expectations.
          </p>
          </Copy>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                if (el && stepsRef.current) {
                  (stepsRef.current as (HTMLDivElement | null)[])[index] = el;
                }
              }}
              className="relative group">
              <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10">
                <div className="w-20 h-20 bg-gradient-to-r from-[#d297fc] to-purple-600 rounded-2xl rotate-3 group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center text-white mx-auto mb-8 shadow-lg shadow-purple-500/30">
                  {step.icon}
                </div>
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d297fc] to-purple-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {step.title}
                </h3>
                <p className="text-black/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-1 bg-gradient-to-r from-[#d297fc] to-purple-600 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}{" "}
        </div>
      </div>
    </section>
  );
}
