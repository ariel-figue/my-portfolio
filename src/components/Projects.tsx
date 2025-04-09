"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ImageViewer from "./ImageViewer";
import FadeInSection from "./FadeInSection";

// Interfaces remain unchanged
interface StoreImage {
  image: string;
  link?: string;
  width?: number;
  height?: number;
}

interface Project {
  title: string;
  image: string;
  description: React.ReactNode;
  link?: string;
  storeImage?: string | StoreImage;
  useImageViewer?: boolean;
  width?: number;
  height?: number;
}

// Projects array remains unchanged
const projects: Project[] = [
  {
    title: "Lucky Lotto",
    image: "/lucky-lotto-logo.jpg",
    description: (
      <>
        <b>Lucky Lotto</b> is a React Native app I built for generating Florida
        Lottery numbers. As a favor to my dad, a lottery enthusiast, I created
        this app to help him generate numbers for Florida Lottery games. The app
        is available on the <b>Google Play Store</b> and is built using{" "}
        <b>React Native, Expo, and TypeScript</b>.
      </>
    ),
    link: "https://play.google.com/store/apps/details?id=com.arielfigue.luckylotto&hl=en-US&pli=1",
    storeImage: "/google-playstore.png",
    width: 135,
    height: 135,
  },
  {
    title: "Fishly",
    image: "/fishly-logo.png",
    description: (
      <>
        I started development of Fishly in <b>late February 2025</b>, so it is
        in its early stages, with more features being added regularly.
        <br />
        <br />
        <b>Fishly</b> is a fishing companion app providing{" "}
        <b>
          real-time fishing insights, catch logging, and location-based
          recommendations.
        </b>{" "}
        When complete, it will feature an interactive <b>map</b> for pinning
        fishing spots, tracking catches, and analyzing trends over time. Built
        with <b>Next.js, React, Tailwind CSS, and Neon DB</b>, it leverages{" "}
        <b>Next.js API routes</b> for seamless data handling.
      </>
    ),
    link: "https://fishly-af.vercel.app",
    storeImage: {
      link: "https://github.com/ariel-figue/fishly",
      image: "/git-logo.png",
      width: 100,
      height: 100,
    },
    width: 175,
    height: 175,
  },
  {
    title: "FICUS LLC",
    image:
      "https://api.screenshotone.com/take?url=https://ficus-llc.vercel.app&access_key=0PYVnBERLWhW2A",
    description: (
      <>
        <b>FICUS LLC</b> is an ecological consulting firm founded by my twin
        brother,
        <b> Dr. Adrian Figueroa</b>. I created the website to showcase
        FICUS&apos;s services, mission, and expertise in{" "}
        <b>
          conservation biology, ecological data analysis, GIS mapping, and
          science communication
        </b>
        .
        <br />
        <br />
        The site highlights Adrian’s extensive experience with federal, state,
        and local agencies, as well as academic and nonprofit partners,
        supporting conservation initiatives across{" "}
        <b>South Florida and beyond</b>. Built with <b>Next.js and React</b>,
        the website provides a clean, accessible, and professional online
        presence.
      </>
    ),
    link: "https://ficus-llc.vercel.app",
    width: 225,
    height: 225,
  },
  {
    title: "HBO Max AVOD/SVOD",
    image: "/hbomax-avod-svod.png",
    description: (
      <>
        I contributed to the development and implementation of{" "}
        <b>AVOD (Ad-Supported) and SVOD (Ad-Free)</b> subscription tiers for{" "}
        <b>HBO Max</b>. This involved integrating <b>React components</b> into
        the subscription checkout flow, optimizing <b>API requests</b> for
        validation, and ensuring localized support for <b>LATAM & EMEA</b>{" "}
        regions. I worked closely with <b>UI/UX teams</b> to enhance the{" "}
        customer experience and improve performance. This feature expanded HBO
        Max&apos;s global reach and increased flexibility for users across
        different markets.
      </>
    ),
    useImageViewer: true,
    width: 225,
    height: 225,
  },
  {
    title: "AWS Rekognition POC",
    image: "/aws-rekognition-logo.png",
    description: (
      <>
        I developed a <b>Face Recognition System</b> using <b>React</b> and{" "}
        <b>AWS Rekognition</b> for HBO Max&apos;s Content and Promo team. The
        system integrated with <b>AWS Lambda, API Gateway, S3, and DynamoDB</b>{" "}
        to store facial vectors and collections.
        <br />
        <br />
        This POC demonstrated the feasibility of{" "}
        <b>automated facial recognition</b> for content categorization and{" "}
        metadata enhancement.
      </>
    ),
    width: 100,
    height: 100,
  },
];

const ProjectCard = ({
  title,
  image,
  description,
  link,
  storeImage,
  useImageViewer,
  width = 150,
  height = 150,
  setSelectedImage,
  onClick,
  isModal = false,
}: Project & {
  setSelectedImage: (
    image: { src: string; width: number; height: number } | null
  ) => void;
  onClick?: () => void;
  isModal?: boolean;
}) => {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col items-center text-center bg-white max-w-[350px] h-[500px] ${
        !isModal ? "shadow-md border border-gray-200 transition-all transform hover:scale-105" : ""
      }`}
      onClick={onClick}
    >
      {useImageViewer ? (
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={width}
          height={height}
          className="rounded-lg mb-4 cursor-pointer hover:opacity-80"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedImage({ src: image, width, height });
          }}
        />
      ) : (
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={width}
          height={height}
          className={`rounded-lg mb-4 ${link ? "cursor-pointer hover:opacity-80" : ""}`}
          onClick={link ? () => window.open(link, "_blank") : undefined}
        />
      )}

      <h3 className="text-xl font-semibold text-[#2c3e50] flex items-center justify-space-between">
        {title.toLowerCase() === "ficus llc" ? (
          <>
            {title}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ficus-llc.vercel.app"
              className="pointer hover:opacity-80 mr-1"
            >
              <Image
                src="https://ficus-llc.vercel.app/images/logo-w-text.png"
                alt="FICUS LLC Logo"
                width={30}
                height={30}
                className="rounded-full ml-4"
              />
            </a>
          </>
        ) : (
          title
        )}
      </h3>

      <div className="description-area flex-1 w-full mt-4 text-gray-700 px-1 text-sm text-justify h-[80px] scrollable">
        {description}
      </div>

      {link && storeImage && (
        <a
          href={typeof storeImage === "string" ? link : storeImage.link}
          className={`mt-2 ${link ? "cursor-pointer hover:opacity-80" : ""}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={typeof storeImage === "string" ? storeImage : storeImage.image}
            alt="Store Link"
            width={typeof storeImage === "string" ? 150 : storeImage.width ?? 150}
            height={typeof storeImage === "string" ? 150 : storeImage.height ?? 150}
            className={`${title.toLowerCase() === "ficus llc" ? "rounded-full " : ""}`}
          />
        </a>
      )}
    </div>
  );
};

export const ProjectsContent = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    width: number;
    height: number;
  } | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Detect if on mobile
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isMobile = () => window.innerWidth <= 768;

  const handleCardClick = (project: Project) => {
    if (isMobile()) {
      setIsPaused(true);
      setSelectedProject(project);
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject && isMobile()) {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // Prevent scrolling on the body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';

      // Re-enable scrolling and restore position on cleanup
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    }
  }, [selectedProject, isMobile]);

  // Calculate the total width of one set of projects (in pixels)
  const projectWidth = 350 + 24; // max-w-[350px] + space-x-6 (24px in Tailwind)
  const totalWidth = projects.length * projectWidth;

  return (
    <FadeInSection>
      <h2 className="text-3xl font-bold text-left text-[#2c3e50] mb-2">
        Projects
      </h2>
      <div className="relative w-full py-6 overflow-x-hidden">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex space-x-6 animate-scroll"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
            width: `${totalWidth * 3}px`, // Triplicate width for seamless looping
          }}
          onMouseEnter={() => !isMobile() && setIsPaused(true)}
          onMouseLeave={() => !isMobile() && setIsPaused(false)}
        >
          {[...projects, ...projects, ...projects].map((project, index) => (
            <div key={index} className="flex-shrink-0">
              <ProjectCard
                {...project}
                setSelectedImage={setSelectedImage}
                onClick={() => handleCardClick(project)}
              />
            </div>
          ))}
        </div>

        {/* Image Viewer Modal (Desktop) */}
        {selectedImage && (
          <ImageViewer
            src={selectedImage.src}
            alt="Expanded Image"
            isOpen={!!selectedImage}
            onClose={() => setSelectedImage(null)}
            width={1200}
            height={1200}
          />
        )}

        {/* Mobile Modal */}
        {selectedProject && isMobile() && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-[90%] max-h-[90%] overflow-y-auto relative">
              <button
                className="absolute top-2 right-4 text-2xl font-bold text-gray-700"
                onClick={() => {
                  setSelectedProject(null);
                  setIsPaused(false);
                }}
              >
                X
              </button>
              <ProjectCard
                {...selectedProject}
                setSelectedImage={setSelectedImage}
                isModal={true}
              />
            </div>
          </div>
        )}
      </div>

      {/* Inline CSS for animation and scrollbar hiding */}
      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite; /* Adjust duration for speed */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalWidth}px); /* Move by one set of projects */
          }
        }

        /* Hide scrollbar */
        .overflow-x-hidden {
          overflow-x: hidden;
        }

        .animate-scroll::-webkit-scrollbar {
          display: none;
        }

        .animate-scroll {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </FadeInSection>
  );
};