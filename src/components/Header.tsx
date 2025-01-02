import { useTranslation } from 'react-i18next'
import {Link} from "react-router-dom";


export default function Header() {
  const { t, i18n } = useTranslation();

  function toggleLanguage() {
    const currentLanguage = i18n.resolvedLanguage;
    const newLanguage = currentLanguage === "en" ? "ja" : "en";
    i18n.changeLanguage(newLanguage);
  }

  return (
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
  )
}