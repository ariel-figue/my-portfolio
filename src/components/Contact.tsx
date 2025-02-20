"use client";

import Image from "next/image";

// Contact Section
export const ContactContent = () => (
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
          src="/linkedin.png"
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
          src="/git-logo.png"
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
        className="w-full sm:w-[280px] bg-gradient-to-r from-[#0c3d5c] to-[#1e5b7a] hover:from-[#13506f] hover:to-[#1c5a76] text-white py-2 px-4 rounded-md font-bold text-center"
      >
        Email me
      </a>
    </div>
  </div>
);
