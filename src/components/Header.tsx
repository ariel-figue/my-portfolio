import { X, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "home", title: "About Me" },
    { id: "experience", title: "Experience" },
      { id: "education", title: "Education" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("home");

  return (
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
              className={`group flex items-center relative overflow-hidden rounded-full px-2 py-1 transition-all duration-300 ease-in-out font-light
  ${
    isActive
      ? "font-medium bg-white/10 scale-105"
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
  );
};
