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
    <section className="bg-gradient-to-b pr-24 from-white overflow-hidden to-purple-50 py-20 mt-20">
      <div className="max-w-7xl mx-auto ">
        <div className="grid lg:grid-cols-3 items-center ">
          <div className="lg:col-span-2">
            <Copy delay={0.5}>
              <h2 className="text-4xl md:text-5xl font-SpaceMonoRegular font-bold text-gray-900 mb-6">
                <span className=" inline-flex items-center">
                  <MdOutlineKeyboardArrowRight
                    className="text-[#d297fc] rounded-none"
                    size={60}
                  />{" "}
                  Our Vision & Mission
                </span>
              </h2>
            </Copy>
            <Copy delay={0.7}>
              <p className="text-gray-600 text-lg pl-14 mb-8 leading-relaxed">
                We aim to create the digital world through modern, <br /> visually
                striking design that user friendly and elevates brands. Our
                mission is to craft engaging, future-ready digital experiences
                where bold aesthetics, seamless usability, and smart strategy
                come together to help businesses stand out, connect, and grow in
                an ever-changing digital landscape.
              </p>
            </Copy>
            <button
              onClick={() => router.push("/about")}
              className="bg-gradient-to-r from-[#d297fc] to-purple-600 ml-14 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight size={20} />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8 }}
            viewport={{ once: true }}
            className="relative mt-44 ">
            {/* <div className="rounded-2xl w-xl bg-[#0f164a] h-[50vh] flex justify-center items-center overflow-hidden shadow-2xl">
              <TrueFocus
                sentence="Modern Design"
                manualMode={false}
                blurAmount={3}
                borderColor="#d297fc"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </div> */}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
