"use client";

import Image from "next/image";

// Education Section
export const EducationContent = () => {
  const education = [
    {
      school: "Florida International University",
      logo: "/fiu_logo.jpg",
      tenure: "2014 - 2018",
      major: "Bachelor of Science in Information Technology",
    },
    {
      school: "Miami Dade College",
      logo: "/mdc_logo.png",
      tenure: "2014 - 2016",
      major: "Associate of Arts in Computer Science",
    },
  ];

  return (
    <div>
      {education.map((edu, index) => (
        <div key={index} className="mt-8">
          <div className="flex items-center gap-4">
            <Image
              src={edu.logo}
              alt={`${edu.school} Logo`}
              width={80}
              height={80}
              className="object-contain mr-4"
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
  );
};
