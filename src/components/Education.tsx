"use client";

import Image from "next/image";
import FadeInSection from "./FadeInSection";

// Education Section
export const EducationContent = () => {
  const education = [
    {
      school: "Florida International University",
      logo: "/fiu-logo.jpg",
      tenure: "2014 - 2018",
      major: "Bachelor of Science in Information Technology",
      width: 80,
      height: 80,
    },
    {
      school: "Miami Dade College",
      logo: "/mdc-logo.png",
      tenure: "2014 - 2016",
      major: "Associate of Arts in Computer Science",
      width: 80,
      height: 80,
    },
  ];

  return (
    <FadeInSection>
      <h2 className="text-3xl font-bold text-left text-[#2c3e50] mb-2">
        Education
      </h2>
      <div>
        {education.map((edu, index) => (
          <div key={index} className="mt-8">
            <div className="flex items-center gap-4">
              <Image
                src={edu.logo}
                alt={`${edu.school} Logo`}
                width={edu.width}
                height={edu.height}
                className="object-contain mr-4"
                priority={false}
              />
              <div>
                <h3 className="text-lg font-bold">{edu.school}</h3>
                <p className="italic">{edu.tenure}</p>
                <p className="font-bold">{edu.major}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FadeInSection>
  );
};
