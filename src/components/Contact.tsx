import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full max-w-3xl mx-auto py-20 px-6 text-white text-center">
      <h2 className="text-4xl font-bold text-green-400 mb-6">Contact</h2>
      <p className="text-gray-300 text-lg mb-10">
        Wanna build something together? Or just say hi? 👋 Drop me a message or connect below!
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
