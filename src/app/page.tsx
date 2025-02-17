"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu
import ImageViewer from "@/components/ImageViewer";

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
              className={`absolute top-16 right-6 bg-black/80 text-white flex flex-col gap-4 p-4 rounded-lg 
          lg:flex lg:flex-row lg:static lg:bg-transparent lg:p-0 lg:gap-6 
          ${isMenuOpen ? "flex" : "hidden"}`}
            >
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`flex items-center hover:underline hover:underline-offset-4 ${
                    activeSection === section.id
                      ? "font-bold underline underline-offset-4"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(section.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(section.id);
                    setIsMenuOpen(false); // Close mobile menu on click
                  }}
                >
                  {section.title}
                </a>
              ))}
            </nav>
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
              Welcome 👋
            </h2>
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
    </div>
  );
}

// Home Section
const HomeContent = () => (
  <div className="max-w-3xl">
    <p>
      I&apos;m a first-generation Cuban-American and a Senior Front-End Engineer
      passionate about building intuitive, high-performance web applications.
    </p>
    <p className="mt-4">
      With expertise in React, TypeScript, and modern front-end architecture, I
      craft seamless user experiences that balance functionality and aesthetics.
      Whether it&apos;s optimizing performance, designing scalable UI
      components, or integrating cutting-edge technologies, I thrive on turning
      ideas into polished digital products.
    </p>
    <p>Explore my work, and feel free to reach out—I&apos;d love to connect!</p>
    <p className="mt-4">
      Beyond coding, I&apos;m a travel enthusiast with a love for the great
      outdoors. You can find me camping, fishing, or simply enjoying the beach.
    </p>
  </div>
);

// Experience Section
const ExperienceContent = () => {
  const experiences = [
    {
      company: "Warner Bros. Discovery",
      logo: "/wbd_logo.jpg",
      tenure: "Apr 2022 - Dec 2024",
      position: "Software Engineer III",
      description: [
        "Developed and maintained the Skybridge Self Service Portal using React, streamlining partner onboarding and integration for Max.",
        "Implemented a robust front-end architecture with React, Axios, and Jest, enhancing code quality and CI/CD practices.",
        "Developed and tested gRPC functions using Protocol Buffers for seamless backend integration.",
      ],
    },
    {
      company: "WarnerMedia",
      logo: "/wm_logo.jpg",
      tenure: "Jun 2021 - Apr 2022",
      position: "Software Engineer II",
      description: [
        "Developed AVOD/SVOD stream plans for HBO Max using React, improving localized text implementation for global markets.",
        "Enhanced the HBO Max Account Provisioning Tool with responsive UI and batch user creation support.",
        "Built a proof-of-concept for Face Recognition Technology using AWS Rekognition and React.",
      ],
    },
    {
      company: "HBO Latin America",
      logo: "/hbola_logo.jpg",
      tenure: "Jun 2019 - Jun 2021",
      position: "Software Engineer",
      description: [
        "Led full-stack development for an asset management system using MongoDB, Okta, .NET Core, and Angular.",
        "Developed HBO Galaxy CMS, a hybrid content management system for account provisioning across multiple platforms.",
      ],
    },
  ];

  return (
    <div>
      {experiences.map((experience, index) => (
        <div key={index} className="mt-8">
          <div className="flex items-center gap-4">
            <Image
              src={experience.logo}
              alt={`${experience.company} Logo`}
              width={80}
              height={80}
              className="object-contain"
            />
            <div>
              <h3 className="text-lg font-bold">{experience.company}</h3>
              <p className="italic">{experience.tenure}</p>
              <p className="font-bold">{experience.position}</p>
            </div>
          </div>
          <ul className="list-disc list-inside mt-2">
            {experience.description.map((desc, idx) => (
              <li key={idx} className="mb-1">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Projects Section
const ProjectsContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Lucky Lotto App */}
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      {/* App Image */}
      <Image
        src="/lucky_lotto_logo.jpg" // Update with actual image file path
        alt="Lucky Lotto App Screenshot"
        width={200}
        height={200}
        className="rounded-lg mb-4"
      />

      {/* App Name */}
      <h3 className="text-lg font-bold">Lucky Lotto</h3>

      {/* Play Store Link */}
      <a
        href="https://play.google.com/store/apps/details?id=com.arielfigue.luckylotto&hl=en_US&pli=1"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center gap-2 text-blue-600 hover:underline hover:pointer-cursor"
      >
        <Image
          src="/google_playstore_logo.png" // Update with actual Play Store icon path
          alt="Google Play Store"
          width={175}
          height={175}
        />
      </a>

      <p className="text-justify mt-6">
        <b>Lucky Lotto</b> is a React Native app I built for generating Florida
        Lottery numbers. As a favor to my dad, a lottery enthusiast, I created
        this app to help him generate numbers for Florida Lottery games. The app
        is available on the Google Play Store and is built using React Native,
        Expo, and TypeScript.
      </p>
    </div>

    {/* AVOD/SVOD Subscription Flow for HBO Max */}
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      {/* Project Image */}
      <ImageViewer
        src={"/hbomax_avod_svod.png"}
        alt={"AVOD/SVOD Subscription Flow Screenshot"}
        width={350}
        height={350}
        className="rounded-lg mb-4"
      />

      {/* Project Name */}
      <h3 className="text-lg font-bold">HBO Max AVOD/SVOD Subscription Flow</h3>

      {/* Project Description */}
      <div className="text-justify mt-4">
        <p>
          I contributed to the development and implementation of AVOD
          (Ad-Supported) and SVOD (Ad-Free) subscription tiers for{" "}
          <b>HBO Max</b>. This involved integrating React components into the
          subscription checkout flow, optimizing API requests for subscription
          validation, and ensuring localized text support for LATAM & EMEA
          regions.
        </p>
        <p>
          I worked closely with UI/UX teams to enhance the customer experience
          and improve the performance of the React-based client application.
          This feature expanded HBO Max&apos;s global reach and increased
          subscription flexibility for users across different markets.
        </p>
      </div>
    </div>

    {/* AWS Rekognition POC */}
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      {/* Project Image */}
      <Image
        src="/aws_rekognition_logo.png" // Update with actual image file path
        alt="AWS Rekognition POC Screenshot"
        width={160}
        height={160}
        className="rounded-lg mb-4"
      />

      {/* Project Name */}
      <h3 className="text-lg font-bold">AWS Rekognition POC</h3>

      {/* Project Description */}
      <div className="text-justify mt-4">
        <p>
          As part of a proof-of-concept for HBO Max&apos;s Content and Promo
          team, I developed a Face Recognition System leveraging AWS
          Rekognition. The system utilized React JS for the frontend and
          integrated with AWS Lambda, API Gateway, S3, and DynamoDB for storing
          facial vectors and collections.
        </p>
        <p className="mt-4">
          This POC demonstrated the feasibility of automated facial recognition
          for content categorization and metadata enhancement, providing
          streamlined tagging and retrieval of media assets.
        </p>
      </div>
    </div>
  </div>
);

// Contact Section
const ContactContent = () => (
  <div className="flex flex-col items-left">
    <p className="mb-4">Want to connect or discuss a project?</p>
    <div className="flex-row mb-4">
      <a
        href="https://www.linkedin.com/in/ariel-figueroa/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-bold mb-4  w-max"
      >
        <Image
          src="/linkedin_logo.png"
          alt="LinkedIn Logo"
          width={45}
          height={45}
          className="inline mr-2"
        />
      </a>
      <a
        href="https://github.com/ariel-figue"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 font-bold mb-4 w-max"
      >
        <Image
          src="/git_logo.png"
          alt="GitHub Logo"
          width={50}
          height={50}
          className="inline mr-2"
        />
      </a>
    </div>
    <div className="flex justify-center sm:justify-start">
      <a
        href="mailto:contact@ariel-figueroa.com?subject=Saw%20Your%20Website%20-%20Let's%20Chat%21"
        className="w-max bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-md font-bold"
      >
        Email me
      </a>
    </div>
  </div>
);
