import { useEffect } from 'react';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Projects from './components/Projects';
import SkillsAndHighlights from './components/SkillsAndHighlights';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import { initializeApp } from 'firebase/app';
import BackToTopButton from './components/BackToTopButton';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

function App() {
  initializeApp(firebaseConfig);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <SkillsAndHighlights />
      <Contact />
      <BackToTopButton />
    </LanguageProvider>
  );
}

export default App;
