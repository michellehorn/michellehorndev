import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { general, projectsEN } from '../mocks/en';
import { projectsPT } from '../mocks/pt';

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const projects = language === 'pt' ? projectsPT : projectsEN;
  const wipText = language === 'pt' ? general.wip : general.wip;

  return (
    <section id="projects" className="w-full max-w-5xl mx-auto py-20 px-6 text-white">
      <h2 className="text-4xl font-bold text-green-400 text-center mb-12">
        {language === 'pt' ? 'Projetos' : 'Projects'}
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-green-500/10 transition"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-semibold mb-2 text-green-300">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-green-600 text-black text-xs font-semibold px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              {project.github && (
                <a href={project.github} target="_blank" className="text-green-400 hover:underline">
                  GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" className="text-green-400 hover:underline">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
        <span className="text-center font-bold">{wipText}...</span>
      </div>
    </section>
  );
};

export default Projects;
