import Image from "next/image";

export const Hero = () => (
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
      Welcome <span className="inline-block animate-wave">👋🏼</span>
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
      Whether you&apos;re here to explore my work or discuss opportunities,
      let&apos;s build something great together.
    </p>
  </div>
);
