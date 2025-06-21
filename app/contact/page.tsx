// app/contact/page.tsx
import ContactPage from "./ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Dyno Solutions",
  description:
    "Contact Dyno Solutions for cutting-edge digital and software development services in India. Let's bring your ideas to life.",
  robots: "index, follow",
  keywords: [
    "Dyno Solutions",
    "Contact Dyno",
    "Web development India",
    "Software agency Noida",
    "IT solutions",
    "Tech support",
  ],
  openGraph: {
    title: "Contact Us | Dyno Solutions",
    description:
      "Looking for a reliable tech partner? Reach out to Dyno Solutions today.",
    url: "https://www.dynosol.tech/contact",
    siteName: "Dyno Solutions",
    type: "website",
    images: [
      {
        url: "https://www.dynosol.tech/dyno_logo.png",
        width: 1200,
        height: 630,
        alt: "Dyno Solutions Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Dyno Solutions",
    description: "Get in touch with Dyno Solutions for tech solutions and web development.",
    images: ["https://www.dynosol.tech/dyno_logo.png"],
    
  },
  alternates: {
    canonical: "https://www.dynosol.tech/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
