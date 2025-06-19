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

export default function Footer() {

  const router = useRouter();
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Dynamic Solutions</h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Turning your dream ideas into digital reality
            </h2>
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
              <ArrowUpRight onClick={() => router.push("/contact")} className="w-8 h-8 text-white" />
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
                href="#"
                className="text-white/80 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
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
