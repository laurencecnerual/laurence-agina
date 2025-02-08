import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <h2 className={i18n.resolvedLanguage === "ja" ? " title home-text japanese" : "title home-text"}>{t('homePage.title')}</h2>
      <p className="summary home-text">{t('homePage.summary')}</p>
      <p className="work home-text">{t('homePage.work')}</p>
      <p className="skills home-text">{t('homePage.skills')}</p>
      <p className="education home-text">{t('homePage.education')}</p>
      <p className="contact home-text">{t('homePage.contact')}</p>
    </>
  )
}