"use client";

import { useState } from "react";
import Image from "next/image";
import ImageViewer from "./ImageViewer";

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

const projects: Project[] = [
  {
    title: "Lucky Lotto",
    image: "/lucky_lotto_logo.jpg",
    description: (
      <>
        <b>Lucky Lotto</b> is a React Native app I built for generating Florida
        Lottery numbers. As a favor to my dad, a lottery enthusiast, I created
        this app to help him generate numbers for Florida Lottery games. The app
        is available on the <b>Google Play Store</b> and is built using{" "}
        <b>React Native, Expo, and TypeScript</b>.
      </>
    ),
    link: "https://play.google.com/store/apps/details?id=com.arielfigue.luckylotto&hl=en_US&pli=1",
    storeImage: "/google_playstore_logo.png",
    width: 135,
    height: 135,
  },
  {
    title: "Fishly",
    image: "/fishly_logo.png",
    description: (
      <>
        <b>Fishly</b> is a fishing companion app providing{" "}
        <b>
          real-time fishing insights, catch logging, and location-based
          recommendations.
        </b>{" "}
        It features an interactive <b>map</b> for pinning fishing spots,
        tracking catches, and analyzing trends over time. Built with{" "}
        <b>Next.js, React, Tailwind CSS, and Neon DB</b>, it leverages{" "}
        <b>Next.js API routes</b> for seamless data handling.
        <br />
        <br />I started this project in <b>late February 2025</b>, and it is
        still under early development, with more features being added regularly.
      </>
    ),
    link: "https://fishly-af.vercel.app",
    storeImage: {
      link: "https://github.com/ariel-figue/fishly",
      image: "/git_logo.png",
      width: 100,
      height: 100,
    },
    width: 175,
    height: 175,
  },
  {
    title: "HBO Max AVOD/SVOD",
    image: "/hbomax_avod_svod.png",
    description: (
      <>
        I contributed to the development and implementation of{" "}
        <b>AVOD (Ad-Supported) and SVOD (Ad-Free)</b> subscription tiers for{" "}
        <b>HBO Max</b>. This involved integrating <b>React components</b> into
        the subscription checkout flow, optimizing <b>API requests</b> for
        validation, and ensuring localized support for <b>LATAM & EMEA</b>{" "}
        regions. I worked closely with <b>UI/UX teams</b> to enhance the{" "}
        customer experience and improve performance. This feature expanded HBO
        Max&apos;s global reach and increased flexibility for users across different
        markets.
      </>
    ),
    useImageViewer: true,
    width: 225,
    height: 225,
  },
  {
    title: "AWS Rekognition POC",
    image: "/aws_rekognition_logo.png",
    description: (
      <>
        I developed a <b>Face Recognition System</b> using <b>React</b> and{" "}
        <b>AWS Rekognition</b> for HBO Max&apos;s Content and Promo team. The
        system integrated with <b>AWS Lambda, API Gateway, S3, and DynamoDB</b>{" "}
        to store facial vectors and collections.
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
  width = 150, // Default width
  height = 150, // Default height
  setSelectedImage,
}: Project & {
  setSelectedImage: (image: { src: string; width: number; height: number } | null) => void;
}) => {
  return (
    <div className="rounded-2xl shadow-md p-6 border border-gray-200 flex flex-col items-center text-center bg-white transition-all transform hover:scale-105 max-w-[350px] h-[500px]">
      {/* Image */}
      {useImageViewer ? (
        <Image
          src={image}
          alt={`${title} Screenshot`}
          width={width}
          height={height}
          className="rounded-lg mb-4 cursor-pointer hover:opacity-80"
          onClick={() => setSelectedImage({ src: image, width, height })}
        />
      ) : (
        <Image
          src={image}
          alt={`${title} Screenshot`}
          width={width}
          height={height}
          className={`rounded-lg mb-4 ${link ? "cursor-pointer hover:opacity-80" : ""}`}
          onClick={link ? () => window.open(link, "_blank") : undefined}
        />
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold text-[#2c3e50]">{title}</h3>

      {/* Description Area */}
      <div className="description-area flex-1 w-full mt-4 text-gray-700 px-1 text-sm text-justify h-[80px] scrollable">
        {description}
      </div>

      {/* Store Link (if applicable) */}
      {link && storeImage && (
        <a
          href={typeof storeImage === "string" ? link : storeImage.link}
          className={`${link ? "cursor-pointer hover:opacity-80" : ""}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={typeof storeImage === "string" ? storeImage : storeImage.image}
            alt="Store Link"
            width={typeof storeImage === "string" ? 150 : storeImage.width ?? 150}
            height={typeof storeImage === "string" ? 150 : storeImage.height ?? 150}
          />
        </a>
      )}
    </div>
  );
};

export const ProjectsContent = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; width: number; height: number } | null>(null);

  return (
    <div className="relative w-full py-6">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} setSelectedImage={setSelectedImage} />
        ))}
      </div>

      {/* Image Viewer Modal */}
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
    </div>
  );
};
