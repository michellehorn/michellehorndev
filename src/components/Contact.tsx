import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { contactEN } from '../mocks/en';
import { contactPT } from '../mocks/pt';

const translations = {
  en: contactEN,
  pt: contactPT,
};

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const { title, description } = translations[language];


  return (
    <section id="contact" className="w-full max-w-3xl mx-auto py-20 px-6 text-white text-center">
      <h2 className="text-4xl font-bold text-green-400 mb-6">{title}</h2>
      <p className="text-gray-300 text-lg mb-10">
        {description}
      </p>

      <div className="flex justify-center gap-8 text-2xl text-green-400">
        <a
          href="https://github.com/michellehorn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/michelle-horn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:michellehorn@live.com" className="hover:text-white transition">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Contact;
