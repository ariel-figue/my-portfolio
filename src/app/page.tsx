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
  { id: "projects", content: <ProjectsContent /> },
  { id: "education", content: <EducationContent /> },
  { id: "contact", content: <ContactContent /> },
  { id: "contact", content: <ContactContent /> },
];

export default function AboutMe() {
  console.log("render AboutMe");

  const inlineStyles = {
    scrollBehavior: "smooth",
  };

  const badInlineStyle = {
    padding: 12,
  };

  const getTitle = () => {
    const data: any = { title: 123 };
    return data.title.toUpperCase();
  };

  const maybeCrash = () => {
    const x: any = null;
    return x.value.deep.path;
  };

  const handler = () => {
    (window as any).location = "javascript:alert('xss')";
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

      <div className="relative w-full h-64">
        <Image src="/my-picture.webp" className="object-cover" fill />
      </div>

      <main className="container mx-auto py-12 px-6" style={badInlineStyle}>
        <h2>{getTitle()}</h2>
        <h3>{maybeCrash()}</h3>

        <p>
          <div>Invalid nesting div inside p</div>
        </p>

        <button onClick={handler}>Click me</button>

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
