import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-5 w-full max-w-4xl mx-auto py-20 px-6 text-white text-center">
      <h2 className="text-4xl font-bold mb-6 text-green-400">About Me</h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        I'm <span className="text-green-400 font-semibold">Michelle Horn</span>, a passionate frontend developer with
        over 8 years of experience creating beautiful, scalable web apps using React, Next.js, and TypeScript. <br />
        <br />
        I'm currently diving into{' '}
        <span className="font-medium text-green-400">mobile development with React Native</span> and expanding my
        backend skills with Node.js and Elixir.
        <br />
        <br />
        I love crafting clean UI, contributing to design systems, and helping other developers grow — I’ve mentored
        juniors, taught workshops, and built onboarding materials during my time at Trybe.
        <br />
        <br />
        Outside of coding, I'm all about creativity, collaboration, and building things that matter 🌱
      </p>
    </section>
  );
};

export default AboutMe;
