"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import { ContactContent } from "@/components/Contact";
import { ExperienceContent } from "@/components/Experience";
import { HomeContent } from "@/components/Home";
import { ProjectsContent } from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track mobile menu state

  const sections = [
    { id: "home", title: "About Me", content: <HomeContent /> },
    { id: "experience", title: "Experience", content: <ExperienceContent /> },
    { id: "projects", title: "Projects", content: <ProjectsContent /> },
    { id: "contact", title: "Contact", content: <ContactContent /> },
  ];

  return (
    <div className="scroll-smooth font-[family-name:var(--font-geist-sans)] min-h-screen">
      {/* Full height container */}
      <div className="relative top-0 left-0 w-full h-screen">
        {/* Background Image (Visible Only on Small Screens) */}
        <div className="absolute w-full h-full lg:hidden">
          <Image
            src="/my_picture.jpg"
            alt="Ariel Figueroa Picture"
            layout="fill"
            objectFit="cover"
            className="w-full h-full object-cover"
            priority
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Gradient Overlay (Only Visible on Large Screens) */}
        <div className="absolute top-0 left-0 w-full h-screen lg:bg-gradient-to-r lg:from-[#0a2742] lg:via-[#113b5a] lg:to-[#1b4d6b] z-10">
          {/* Mobile-Friendly Header */}
          <header className="w-full flex justify-between items-center bg-transparent py-4 px-6 relative z-20">
            <h1 className="text-3xl font-bold text-white">Ariel Figueroa</h1>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            {/* Navigation Links */}
            <nav
              className={`absolute top-16 right-6 bg-black/80 text-white flex flex-col gap-2 p-1 rounded-lg 
  lg:flex lg:flex-row lg:static lg:bg-transparent lg:p-0 lg:gap-4 transition-all duration-500 ease-in-out
  ${
    isMenuOpen
      ? "opacity-100 scale-100 translate-y-0 animate-navItems"
      : "opacity-0 scale-95 pointer-events-none"
  }
  lg:opacity-100 lg:translate-y-0 lg:scale-100 lg:pointer-events-auto`}
            >
              {sections.map((section, index) => {
                const isActive = activeSection === section.id;

                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`group flex items-center relative overflow-hidden rounded-full px-2 py-1 transition-all duration-300 ease-in-out
          ${
            isActive
              ? "font-bold bg-white/10 scale-105"
              : "bg-transparent hover:bg-white/15"
          }
        `}
                    style={{ animationDelay: `${index * 0.15}s` }} // Staggered animation delay
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(section.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                      setActiveSection(section.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {/* Text */}
                    <span className="relative z-10">{section.title}</span>
                  </a>
                );
              })}
            </nav>

            <style jsx>{`
              /* Navigation item animation */
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }

              /* Apply animation to each nav item when mobile menu opens */
              .animate-navItems a {
                opacity: 0;
                transform: translateY(10px);
                animation: fadeInUp 0.5s ease-out forwards;
              }

              /* Apply animation to each nav item when desktop menu is rendered */
              @media (min-width: 1024px) {
                nav a {
                  opacity: 0;
                  transform: translateY(10px);
                  animation: fadeInUp 0.33s ease-out forwards;
                }
              }
            `}</style>
          </header>

          {/* Hero Text */}
          <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 flex flex-col items-center">
            {/* Circular Image (Only on Large Screens) */}
            <div className="hidden lg:flex justify-center items-center w-64 h-64 mb-6">
              <Image
                src="/my_picture.jpg"
                alt="Ariel Figueroa"
                width={2000}
                height={2000}
                className="w-full h-full rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>

            <h2 className="text-4xl lg:text-6xl font-extrabold mb-4 animate-fade-in lg:tracking-wide">
              Welcome <span className="inline-block animate-wave">👋🏼 </span>
            </h2>

            <style jsx>{`
              @keyframes wave {
                0% {
                  transform: rotate(0deg);
                }
                10% {
                  transform: rotate(14deg);
                }
                20% {
                  transform: rotate(-8deg);
                }
                30% {
                  transform: rotate(14deg);
                }
                40% {
                  transform: rotate(-4deg);
                }
                50% {
                  transform: rotate(10deg);
                }
                60% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(0deg);
                }
              }

              .animate-wave {
                display: inline-block;
                animation: wave 7s ease-in-out forwards;
                transform-origin: 70% 70%;
              }
            `}</style>

            <p className="text-xl font-light animate-slide-up opacity-90">
              I&apos;m a Senior Front-End Engineer crafting seamless digital
              experiences.
            </p>
            <p className="text-lg mt-2 animate-slide-up opacity-90">
              Whether you&apos;re here to explore my work or discuss
              opportunities, let&apos;s build something great together.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-6">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mb-12">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            {section.content}
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
