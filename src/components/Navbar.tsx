import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80); // Adjust threshold as needed
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-8 flex justify-end space-x-6 font-mono text-sm transition-colors duration-300 ${
        scrolled
          ? "bg-[#0f0f0f]/80 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <a href="#about" className="text-gray-300 hover:text-green-400 transition">
        About
      </a>
      <a href="#projects" className="text-gray-300 hover:text-green-400 transition">
        Projects
      </a>
      <a href="#skills" className="text-gray-300 hover:text-green-400 transition">
        Skills
      </a>
      <a href="#contact" className="text-gray-300 hover:text-green-400 transition">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
