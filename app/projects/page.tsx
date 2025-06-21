// app/projects/page.tsx
import ProjectsPage from "./ProjectsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Dyno Solutions",
  description:
    "Explore Dyno Solutions' portfolio of innovative digital and software development projects. See how we transform ideas into reality.",
  robots: "index, follow",
  keywords: [
    "Dyno Solutions",
    "Project Portfolio",
    "Web development Projects",
    "Software Projects India",
    "IT solutions Portfolio",
    "Tech Projects",
  ],
  openGraph: {
    title: "Projects | Dyno Solutions",
    description:
      "Discover our portfolio of successful tech projects and digital solutions.",
    url: "https://www.dynosol.tech/projects",
    siteName: "Dyno Solutions",
    type: "website",
    images: [
      {
        url: "https://www.dynosol.tech/dyno_logo.png",
        width: 1200,
        height: 630,
        alt: "Dyno Solutions Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Dyno Solutions",
    description: "View our showcase of innovative tech solutions and development projects.",
    images: ["https://www.dynosol.tech/dyno_logo.png"],
    
  },
  alternates: {
    canonical: "https://www.dynosol.tech/projects",
  },
};

export default function Page() {
  return <ProjectsPage />;
}