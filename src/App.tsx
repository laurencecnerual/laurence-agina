import './App.css'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation();

  function toggleLanguage() {
    const currentLanguage = i18n.resolvedLanguage;
    const newLanguage = currentLanguage === "en" ? "ja" : "en";
    i18n.changeLanguage(newLanguage);
  }

  return (
    <>
      <h1>{t('header.myName')}</h1>
      <button type="button" onClick={toggleLanguage}>Toggle Language</button>
    </>
  )
}

export default App
