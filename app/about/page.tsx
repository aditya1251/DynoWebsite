// app/about/page.tsx
import AboutPage from "./AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Dyno Solutions",
  description:
    "Learn about Dyno Solutions - your trusted partner for innovative digital solutions and software development in India. Discover our journey, expertise, and commitment to excellence.",
  robots: "index, follow",
  keywords: [
    "Dyno Solutions",
    "About Dyno",
    "Software company India",
    "IT company Noida",
    "Tech solutions provider",
    "Digital transformation",
  ],
  openGraph: {
    title: "About | Dyno Solutions",
    description:
      "Discover who we are and what makes Dyno Solutions your ideal technology partner.",
    url: "https://www.dynosol.tech/about",
    siteName: "Dyno Solutions",
    type: "website",
    images: [
      {
        url: "https://www.dynosol.tech/dyno_logo.png",
        width: 1200,
        height: 630,
        alt: "Dyno Solutions About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Dyno Solutions",
    description: "Learn more about Dyno Solutions and our expertise in technology solutions.",
    images: ["https://www.dynosol.tech/dyno_logo.png"],
    
  },
  alternates: {
    canonical: "https://www.dynosol.tech/about",
  },
};

export default function Page() {
  return <AboutPage />;
}