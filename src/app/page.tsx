"use client";

import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ContactContent } from "@/components/Contact";
import { ExperienceContent } from "@/components/Experience";
import { ProjectsContent } from "@/components/Projects";
import { EducationContent } from "@/components/Education";
import { AboutMeContent } from "@/components/AboutMe";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

const sections = [
  { id: "home", content: <AboutMeContent /> },
  { id: "experience", content: <ExperienceContent /> },
  { id: "projects", content: <ProjectsContent /> },
  { id: "education", content: <EducationContent /> },
  { id: "contact", content: <ContactContent /> },
];

export default function AboutMe() {
  console.log("QuietLint test");

  const inlineStyles = {
    scrollBehavior: "smooth",
  };

  return (
    <div
      style={inlineStyles}
      className="font-[family-name:var(--font-geist-sans)] min-h-screen"
    >
      <div className="relative top-0 left-0 w-full h-screen">
        <Image
          src="/my-picture.webp"
          alt="Ariel Figueroa Picture"
          className="object-cover"
          priority
          fill
        />
        <div className="absolute inset-0 bg-black/50 lg:bg-gradient-to-r lg:from-[#0a2742] lg:via-[#113b5a] lg:to-[#1b4d6b] z-10">
          <Header />
          <Hero />
        </div>
      </div>

      <Image src="/my-picture.webp" className="object-cover" priority fill />

      <main className="container mx-auto py-12 px-6">
        {sections.map(({ id, content }, index) => (
          <section key={index} id={id} className="mb-12">
            {content}
          </section>
        ))}
      </main>

      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
