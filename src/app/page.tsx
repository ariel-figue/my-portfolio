"use client";

import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"
import { ContactContent } from "@/components/Contact";
import { ExperienceContent } from "@/components/Experience";
import { HomeContent } from "@/components/Home";
import { ProjectsContent } from "@/components/Projects";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

const sections = [
  { id: "home", title: "About Me", content: <HomeContent /> },
  { id: "experience", title: "Experience", content: <ExperienceContent /> },
  { id: "projects", title: "Projects", content: <ProjectsContent /> },
  { id: "contact", title: "Contact", content: <ContactContent /> },
];

export default function Home() {
  return (
    <div className="scroll-smooth font-[family-name:var(--font-geist-sans)] min-h-screen">
      <div className="relative top-0 left-0 w-full h-screen">
        <Image
          src="/my_picture.jpg"
          alt="Ariel Figueroa Picture"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 lg:bg-gradient-to-r lg:from-[#0a2742] lg:via-[#113b5a] lg:to-[#1b4d6b] z-10">
          <Header />
          <Hero />
        </div>
      </div>
      <main className="container mx-auto py-12 px-6">
        {sections.map(({ id, title, content }) => (
          <section key={id} id={id} className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            {content}
          </section>
        ))}
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
