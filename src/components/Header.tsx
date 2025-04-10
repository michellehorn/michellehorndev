import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ParticlesBackground from '../components/ParticlesBackground';

const Header: React.FC = () => {
  return (
    <ParticlesBackground>
      <header className="w-full h-screen flex flex-col justify-center text-white overflow-hidden fira-code px-4">
        <div className="text-center items-center justify-center flex flex-col h-full max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-green-400">Michelle Horn</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 font-mono">
            <Typewriter
              words={[
                'Frontend Developer',
                'React Specialist',
                'Learning React Native',
                'UI/UX Enthusiast',
                'Loves design systems 💚',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-2 rounded-md transition text-center"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-medium px-6 py-2 rounded-md transition text-center"
            >
              View Projects
            </a>
          </div>
        </div>
      </header>
    </ParticlesBackground>
  );
};

export default Header;
