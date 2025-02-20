"use client";

import Image from "next/image";
import FadeInSection from "./FadeInSection";

// Experience Section
export const ExperienceContent = () => {
  const experiences = [
    {
      company: "Warner Bros. Discovery",
      logo: "/wbd.jpg",
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
      logo: "/wm.jpg",
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
      logo: "/hbola.jpg",
      tenure: "Jun 2019 - Jun 2021",
      position: "Software Engineer",
      description: [
        "Led full-stack development for an asset management system using MongoDB, Okta, .NET Core, and Angular.",
        "Developed HBO Galaxy CMS, a hybrid content management system for account provisioning across multiple platforms.",
      ],
    },
  ];

  return (
    <FadeInSection>
      <h2 className="text-3xl font-bold text-left text-[#2c3e50] mb-6">
        Experience
      </h2>
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
    </FadeInSection>
  );
};
