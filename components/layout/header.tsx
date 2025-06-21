"use client";

import {  ChevronDown, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <header className="relative z-30 px-4 py-2 w-full">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center">
            <Image
              src={
                "https://res.cloudinary.com/dg029rpjr/image/upload/v1749975374/Dynologo_zmye2h.png"
              }
              alt="Dyno Logo"
              width={80}
              height={80}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col items-start ml-2">
            <span className="text-white font-GoldmanRegular text-lg sm:text-xl">Dynamic</span>
            <span className="text-white font-GoldmanRegular text-lg sm:text-xl">Solution</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/projects"
            className="flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer transition-colors duration-200">
            <span>Projects</span>
          </Link>
          <Dot size={10} color="white" />
          <Link
            href="/services"
            className="flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer transition-colors duration-200">
            <span>Services</span>
          </Link>
          <Dot size={10} color="white" />
          <Link
            href="/about"
            className="flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer transition-colors duration-200">
            <span>About</span>
          </Link>
          <Dot size={10} color="white" />
          <Link
            href="/pages"
            className="flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer transition-colors duration-200">
            <span>Pages</span>
            <ChevronDown size={16} />
          </Link>
        </div>

        <button
          onClick={handleContactClick}
          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center space-x-2">
          <ShinyText text="Let's talk ↗" disabled={false} speed={2} className="text-white font-medium text-sm sm:text-base" />
        </button>
      </nav>

      <hr className="border-0 h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent mt-2" />
    </header>
  );
}

export const ShinyText = ({ text = "Hello World", disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-inherit bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};