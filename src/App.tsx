import './App.css'
import { useTranslation } from 'react-i18next'
import {Routes, Route, Link} from "react-router-dom";

function App() {
  const { t, i18n } = useTranslation();

  function toggleLanguage() {
    const currentLanguage = i18n.resolvedLanguage;
    const newLanguage = currentLanguage === "en" ? "ja" : "en";
    i18n.changeLanguage(newLanguage);
  }

  return (
    <>
      <header>
        <Link to="/">
          <h1>{t('header.myName')}</h1>
        </Link>
        <button type="button" onClick={toggleLanguage}>{t('header.toggleLanguage')}</button>
        <nav>
          <Link to="/">{t('header.home')}</Link>
          <Link to="/projects">{t('header.projects')}</Link>
          <Link to="/certifications">{t('header.certifications')}</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h2>Welcome to my portfolio website</h2>} />
          <Route path="projects" element={<h2>Projects Page</h2>} />
          <Route path="certifications" element={<h2>Certifications Page</h2>} />
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
        </Routes>
      </main>
      <footer>
        <a href="https://www.linkedin.com/in/laurenceagina/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/laurencecnerual" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </>
  )
}

export default App
