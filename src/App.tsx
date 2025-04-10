import { useEffect } from 'react';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './components/Projects';
import SkillsAndHighlights from './components/SkillsAndHighlights';
import Contact from './components/Contact';
import Navbar from './components/NavBar';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <SkillsAndHighlights />
      <Contact />
    </>
  );
}

export default App;
