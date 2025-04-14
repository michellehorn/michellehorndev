import React, { useEffect, useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const BackToTopButton: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300 z-50"
      aria-label="Back to top"
    >
      <FiChevronUp size={20} />
    </button>
  );
};

export default BackToTopButton;
