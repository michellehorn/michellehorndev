import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div style={{ position: 'fixed', top: 70, right: 0, gap: 8, zIndex: 50 }}>
      <button style={{ backgroundColor: 'transparent', display: 'block' }} onClick={() => setLanguage('pt')} disabled={language === 'pt'}>
        🇧🇷
      </button>
      <button style={{ backgroundColor: 'transparent', display: 'block' }} onClick={() => setLanguage('en')} disabled={language === 'en'}>
        🇺🇸
      </button>
    </div>
  );
}
