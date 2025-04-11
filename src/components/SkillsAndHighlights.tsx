import React from 'react';
import { skillsAndHighlightsEN } from '../mocks/en';
import { skillsAndHighlightsPT } from '../mocks/pt';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  en: skillsAndHighlightsEN,
  pt: skillsAndHighlightsPT,
};

const SkillsAndHighlights: React.FC = () => {

const { language } = useLanguage();
const { title, highlightsTitle, skills, highlights } = translations[language];

  return (
    <section id="skills" className="w-full max-w-5xl mx-auto py-20 px-6 text-white">
      <h2 className="text-4xl font-bold text-green-400 text-center mb-12">{title}</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} data-aos="fade-up">
            <h3 className="text-xl font-semibold text-green-300 mb-3">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800 border border-green-600 text-sm text-green-400 px-3 py-1 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-left max-w-3xl mx-auto space-y-4" data-aos="fade-up">
        <h3 className="text-xl font-semibold text-green-300 mb-2">{highlightsTitle}</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsAndHighlights;
