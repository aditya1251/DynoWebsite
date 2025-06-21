"use client";

import {
  ArrowUpRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdWhatsapp } from "react-icons/md";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-[#0f164a] text-white py-16 relative">
      <div
        className="absolute w-[800px] h-[800px] pointer-events-none bottom-[20vh] -left-[350px] rounded-full blur-3xl opacity-50 -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(138, 111, 199, 1) 0%, rgba(46, 42, 107, 0) 80%)",
        }}></div>
      <div
        className="absolute w-[800px] h-[800px] pointer-events-none bottom-[50vh] right-[-350px] rounded-full blur-3xl opacity-50 -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(138, 111, 199, 1) 0%, rgba(46, 42, 107, 0) 80%)",
        }}></div>
      <hr className="absolute border-0 bottom-[70vh] h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent mt-2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Dynamic Solutions</h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Turning your dream ideas into digital reality
            </h2>
            <div className="w-16 h-16 bg-gradient-to-r from-[#d297fc] to-purple-600 rounded-full flex items-center justify-center">
              <ArrowUpRight
                onClick={() => router.push("/contact")}
                className="w-8 h-8 text-white"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-wrap justify-end gap-x-8 gap-y-4">
              <Link
                href="/privacy"
                className="text-white/80 hover:text-white transition-colors">
                PRIVACY POLICY
              </Link>
              <Link
                href="/terms"
                className="text-white/80 hover:text-white transition-colors">
                TERMS & CONDITION
              </Link>
              <Link
                href="/about"
                className="text-white/80 hover:text-white transition-colors">
                ABOUT US
              </Link>
              <Link
                href="#faq"
                className="text-white/80 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>

            <div className="flex justify-end space-x-6 mt-8">
              <a
                href="https://www.instagram.com/dyno.solutions"
                className="text-white/80 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Dyno-Solutions/61577346787579/"
                className="text-white/80 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Dyno_Solutions"
                className="text-white/80 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="wa.me/917060140150"
                className="text-white/80 hover:text-white transition-colors">
                <MdWhatsapp className="w-5 h-5" />
              </a>
            </div>

            <div className="text-white/60 text-sm mt-8 text-right">
              © {new Date().getFullYear()} Dyno Sol INC. All Rights Reserved.
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">
            Dynamic Solutions
          </h1>
        </div>
      </div>
    </footer>
  );
}
