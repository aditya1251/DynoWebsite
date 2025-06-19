"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TrueFocus from "../animation/TrueFocus";
import CardSwap, { Card } from "../animation/CardSwap";
import Copy from "../animation/Copy";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function JourneySection() {
  const router = useRouter();
  return (
    <section className="bg-gradient-to-b px-4 md:px-8 lg:pr-24 from-white overflow-hidden to-purple-50 py-10 md:py-20 mt-10 md:mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <Copy delay={0.5}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-SpaceMonoRegular font-bold text-gray-900 mb-4 md:mb-6">
                <span className="inline-flex items-center">
                  <MdOutlineKeyboardArrowRight
                    className="text-[#d297fc] rounded-none w-8 h-8 sm:w-10 sm:h-10 md:w-[60px] md:h-[60px]"
                  />{" "}
                  Our Vision & Mission
                </span>
              </h2>
            </Copy>
            <Copy delay={0.7}>
              <p className="text-gray-600 text-base md:text-lg pl-4 md:pl-14 mb-6 md:mb-8 leading-relaxed">
                We aim to create the digital world through modern,{" "}
                <span className="md:block inline">
                  visually striking design that user friendly and elevates brands.
                </span>{" "}
                Our mission is to craft engaging, future-ready digital experiences
                where bold aesthetics, seamless usability, and smart strategy
                come together to help businesses stand out, connect, and grow in
                an ever-changing digital landscape.
              </p>
            </Copy>
            <button
              onClick={() => router.push("/about")}
              className="bg-gradient-to-r from-[#d297fc] to-purple-600 ml-4 md:ml-14 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
            className="relative mt-12 md:mt-24 lg:mt-44">
            <div className="scale-75 sm:scale-90 md:scale-100">
              <CardSwap
                width={300}
                height={250}
                cardDistance={40}
                verticalDistance={30}
                delay={3000}
                pauseOnHover={true}>
                <Card sentence="Modern Design" variant="gradient"></Card>
                <Card sentence="Future Ready" variant="gradient"></Card>
                <Card sentence="User Friendly" variant="gradient"></Card>
              </CardSwap>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}