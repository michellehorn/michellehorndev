import React from 'react';

const skills = {
  Frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind', 'Styled-Components'],
  Backend: ['Node.js (beginner)', 'Elixir (beginner)', 'C# (beginner)'],
  Tools: ['Git', 'GitHub', 'Figma', 'GraphQL', 'REST APIs', 'CI/CD'],
  Testing: ['Jest', 'Testing Library', 'Cypress'],
};

const highlights = [
  'Currently studying React Native (navigation, auth, Expo, UI with Figma)',
  'Mentored junior devs & taught React workshops at Trybe',
  'Built onboarding docs and learning material',
  'Contributed to internal design systems',
  'Using AI tools like GitHub Copilot & ChatGPT to boost DX',
];

const SkillsAndHighlights: React.FC = () => {
  return (
    <section id="skills" className="w-full max-w-5xl mx-auto py-20 px-6 text-white">
      <h2 className="text-4xl font-bold text-green-400 text-center mb-12">Skills & Highlights</h2>

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
        <h3 className="text-xl font-semibold text-green-300 mb-2">Highlights</h3>
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
