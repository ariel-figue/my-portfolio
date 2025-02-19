"use client";

import Image from "next/image";
import ImageViewer from "./ImageViewer";

// Projects Section
export const ProjectsContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Lucky Lotto App */}
    <div className="rounded-lg shadow-xl p-6 border border-gray-300 flex flex-col items-center text-center">
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
    <div className="rounded-lg shadow-xl p-6 border border-gray-300 flex flex-col items-center text-center">
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
    <div className="rounded-lg shadow-xl p-6 border border-gray-300 flex flex-col items-center text-center">
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
