import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import {NavLink, Link} from "react-router-dom";


export default function Header() {
  const { t, i18n } = useTranslation();
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  function toggleLanguage() {
    const currentLanguage = i18n.resolvedLanguage;
    const newLanguage = currentLanguage === "en" ? "ja" : "en";
    i18n.changeLanguage(newLanguage);
  }

  function toggleMenu() {
    let navLinks = document.getElementsByClassName("page-link");
    let home = navLinks[0] as HTMLElement;
    let projects = navLinks[1] as HTMLElement;
    let certifications = navLinks[2] as HTMLElement;

    if (!hamburgerMenuOpen) {
      setHamburgerMenuOpen(true)
      home.classList.add("open-link");
      projects.classList.add("open-link");
      certifications.classList.add("open-link");
    } else {
      setHamburgerMenuOpen(false)
      home.classList.remove("open-link")
      projects.classList.remove("open-link")
      certifications.classList.remove("open-link")
    }
  }


  function determineNavLinkClasses(isActive=false) {
    let classNames = "page-link"; // all pages should have this all the time

    if (isActive) {
      classNames += " active-link" // only applicable to the currently selected page
    }

    if (hamburgerMenuOpen) {
      classNames += " open-link" // only applicable to mobile view - makes options visible only when menu is open
    }

    return classNames;
  }

  return (
    <header>
      <Link to="/">
        <h1 className={i18n.resolvedLanguage === "ja" ? "japanese" : ""}>{t('header.myName')}</h1>
      </Link>
      <button type="button" onClick={toggleLanguage} className={i18n.resolvedLanguage === "ja" ? "japanese" : ""}>{t('header.toggleLanguage')}</button>
      <nav>
        <div className="hamburger-menu" onClick={toggleMenu}>☰</div>
        <NavLink to="/" className={({ isActive }) => isActive ? determineNavLinkClasses(true) : determineNavLinkClasses()}>{t('header.home')}</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? determineNavLinkClasses(true) : determineNavLinkClasses()}>{t('header.projects')}</NavLink>
        <NavLink to="/certifications" className={({ isActive }) => isActive ? determineNavLinkClasses(true) : determineNavLinkClasses()}>{t('header.certifications')}</NavLink>
      </nav>
    </header>
  )
}