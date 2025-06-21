// app/services/page.tsx
import ServicesPage from "./ServicesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Dyno Solutions",
  description:
    "Explore Dyno Solutions' comprehensive range of digital services including web development, mobile apps, cloud solutions, and custom software development.",
  robots: "index, follow",
  keywords: [
    "Dyno Solutions services",
    "Web development",
    "Mobile app development",
    "Cloud solutions",
    "Custom software",
    "Digital services India",
  ],
  openGraph: {
    title: "Our Services | Dyno Solutions",
    description:
      "Discover our full range of tech services and solutions at Dyno Solutions.",
    url: "https://www.dynosol.tech/services",
    siteName: "Dyno Solutions",
    type: "website",
    images: [
      {
        url: "https://www.dynosol.tech/dyno_logo.png",
        width: 1200,
        height: 630,
        alt: "Dyno Solutions Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Dyno Solutions",
    description: "Professional tech services and solutions by Dyno Solutions.",
    images: ["https://www.dynosol.tech/dyno_logo.png"],
    
  },
  alternates: {
    canonical: "https://www.dynosol.tech/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}