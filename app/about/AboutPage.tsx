"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Award,
  Heart,
  HelpCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Copy from "@/components/animation/Copy";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "We work closely with our clients to achieve shared success.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project we undertake.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "We love what we do and it shows in our work quality.",
    },
  ];

  const team = [
    {
      name: "Aditya Bansal",
      role: "CEO & Founder",
      image: "https://avatars.githubusercontent.com/u/124298494?v=4",
      bio: "2+ years of experience in digital transformation and Expert in full-stack development and system architecture.",
    },
    {
      name: "Raikant Chaudhary",
      role: "Co Founder",
      image:
        "https://th.bing.com/th/id/OIP.-BGHYgWIij1hyUnK2Yj1AAAAAA?r=0&rs=1&pid=ImgDetMain",
      //   image: "https://media.licdn.com/dms/image/v2/D5603AQGT0GJCOV90Wg/profile-displayphoto-shrink_400_400/B56ZR.P2WWHQAg-/0/1737284872209?e=1755734400&v=beta&t=mjnBgAp9w_XtdTIR9irHIJ4oKwNedYDCNu4EAzWQ4uQ",
      bio: "Expert in full-stack development and system architecture.",
    },
    {
      name: "Sahil",
      role: "Member",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQHRcMV6nGD0Gg/profile-displayphoto-shrink_800_800/B56ZRKxMBLHIAg-/0/1736421197095?e=1755734400&v=beta&t=Wie5ElJl_m8VDrmWpuxK7pZCcNfCAJlUOBrby9WVFuY",
      bio: "Creative designer with expertise in UI/UX design, branding, and visual storytelling. Passionate about creating intuitive and engaging user experiences.",
    },
    {
      name: "Nitish",
      role: "Member",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQFhVO7_DgFzFA/profile-displayphoto-shrink_400_400/B56ZT9dKPDGsAk-/0/1739419068607?e=1755734400&v=beta&t=SRnswU2dsCmbSHyGpgvqZtdpGzh3NarPx2TBeFGG4iw",
      bio: "Ensures projects are delivered on time and within budget.",
    },
  ];

  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "3+", label: "Happy Clients" },
    { number: "1+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

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
        className="absolute w-full h-[100vh] top-[45vh] bg-white -z-1"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 67% 23% at 50% -1%, transparent 99%, black 100%)",
          maskImage:
            "radial-gradient(ellipse 67% 23% at 50% -1%, transparent 99%, black 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}></div>

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

      <Header />
      {/* Page Hero */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Copy delay={0.5}>
            <div className="mb-6">
              <span className="text-[#d297fc] text-2xl font-semibold">
                {">"} About Us
              </span>
            </div>
          </Copy>

          <Copy delay={0.5}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our <span className="text-[#d297fc]">Story</span>
            </h1>
          </Copy>

          <Copy delay={0.5}>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of digital innovators dedicated to
              transforming businesses through technology.
            </p>
          </Copy>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center mb-10 md:mb-20">
            <div className="col-span-2 bg-white p-6 md:p-8 lg:p-10 rounded-[2rem] hover:bg-gradient-to-br hover:from-white hover:to-purple-50 transition-all duration-500 border-2 border-[#d297fc] hover:shadow-[0_0_30px_rgba(210,151,252,0.3)] h-auto lg:h-[600px]">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Our Journey
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                At Dyno Solutions, we specialize in crafting custom software
                solutions that empower businesses to thrive in the digital
                world. From concept to launch and beyond we provide end-to-end
                development services tailored to your unique needs.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Our team leverages modern technologies and industry best
                practices to build scalable, high-performance web and mobile
                applications. We believe in delivering not just code, but
                complete solutions that are reliable, maintainable, and designed
                to evolve with your business. Whether you're a startup or an
                enterprise, we work closely with you to transform ideas into
                impactful digital products.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Our commitment doesn't end at launch we offer continuous
                support, updates, and optimization to ensure long-term success.
                At Dyno Solutions, we're more than developers we're your
                technology partner in innovation.
              </p>
            </div>

            <div className="relative hidden md:block mt-6 lg:mt-0">
              <div className="rounded-[2rem] overflow-hidden shadow-[0_0_30px_rgba(210,151,252,0.3)] border-2 border-[#d297fc]">
                <Image
                  src="/laptop.jpeg"
                  alt="Our team at work"
                  width={600}
                  height={600}
                  className="w-full md:h-[450px] lg:h-[600px] object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-10 rounded-[2rem] hover:bg-gradient-to-br hover:from-white hover:to-purple-50 transition-all duration-500 border-2 border-[#d297fc] hover:shadow-[0_0_30px_rgba(210,151,252,0.3)]">
                <div className="text-4xl font-bold text-[#d297fc] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          {/* Values Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2rem] hover:bg-gradient-to-br hover:from-white hover:to-purple-50 transition-all duration-500 border-2 border-[#d297fc] hover:shadow-[0_0_30px_rgba(210,151,252,0.3)]">
                <div className="w-16 h-16 bg-[#d297fc]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-[#d297fc]">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience
              and a passion for innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] hover:bg-gradient-to-br hover:from-white hover:to-purple-50 transition-all duration-500 border-2 border-[#d297fc] hover:shadow-[0_0_30px_rgba(210,151,252,0.3)]">
                <div className="relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-[2rem]"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-[#d297fc] font-semibold mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
}
