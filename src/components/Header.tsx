import { useTranslation } from 'react-i18next'
import {NavLink, Link} from "react-router-dom";


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
        <h1 className={i18n.resolvedLanguage === "ja" ? "japanese" : ""}>{t('header.myName')}</h1>
      </Link>
      <button type="button" onClick={toggleLanguage} className={i18n.resolvedLanguage === "ja" ? "japanese" : ""}>{t('header.toggleLanguage')}</button>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>{t('header.home')}</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>{t('header.projects')}</NavLink>
        <NavLink to="/certifications" className={({ isActive }) => isActive ? "active-link" : ""}>{t('header.certifications')}</NavLink>
      </nav>
    </header>
  )
}