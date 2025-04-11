import React, { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { navbarEN } from "../mocks/en";
import { navbarPT } from "../mocks/pt";

const translations = {
  en: navbarEN,
  pt: navbarPT,
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-8 flex justify-end space-x-6 font-mono text-sm transition-colors duration-300 ${
        scrolled ? "bg-[#0f0f0f]/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <a href="#about" className="text-gray-300 hover:text-green-400 transition">{t.about}</a>
      <a href="#projects" className="text-gray-300 hover:text-green-400 transition">{t.projects}</a>
      <a href="#skills" className="text-gray-300 hover:text-green-400 transition">{t.skills}</a>
      <a href="#contact" className="text-gray-300 hover:text-green-400 transition">{t.contact}</a>
    </nav>
  );
};

export default Navbar;
