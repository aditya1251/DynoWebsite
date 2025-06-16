"use client";

import { Sparkles, ChevronDown, ArrowRight, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <header className="relative z-30 px-4 py-2">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <div className="w-20 h-20 rounded-lg flex items-center justify-center">
            <Image
              src={
                "https://res.cloudinary.com/dg029rpjr/image/upload/v1749975374/Dynologo_zmye2h.png"
              }
              alt="Dyno Logo"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white font-GoldmanRegular">Dynamic</span>
            <span className="text-white font-GoldmanRegular">Solution</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-3">
          <Link
            href="/projects"
            className="flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer">
            <span>Projects</span>
          </Link>
          <Dot size={10} color="white" />
          <Link
            href="/services"
            className="flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer">
            <span>Services</span>
          </Link>
          <Dot size={10} color="white" />
          <Link
            href="/about"
            className="flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer">
            <span>About</span>
          </Link>
          <Dot size={10} color="white" />
          <Link
            href="/pages"
            className="flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer">
            <span>Pages</span>
            <ChevronDown size={16} />
          </Link>
        </div>

        <button
          onClick={handleContactClick}
          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
          <ShinyText text="Let's talk ↗" disabled={false} speed={2} className=' justify-center flex items-center' />
        </button>
      </nav>

      <hr className="border-0 h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </header>
  );
}

export const ShinyText = ({ text = "Hello World", disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};