import React from 'react';

import { useLanguage } from '../contexts/LanguageContext';
import { aboutMeEN } from '../mocks/en';
import { aboutMePT } from '../mocks/pt';

const translations = {
  en: aboutMeEN,
  pt: aboutMePT,
};

const AboutMe: React.FC = () => {
  const { language } = useLanguage();
  const content = translations[language];

  return (
    <section id="about" className="scroll-mt-5 w-full max-w-4xl mx-auto py-20 px- text-white text-center">
      <h2 className="text-4xl font-bold mb-6 text-green-400">{content.title}</h2>
      <p className="text-lg text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.content }} />
    </section>
  );
};

export default AboutMe;
