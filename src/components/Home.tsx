import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="title">{t('homePage.title')}</h2>
      <p className="summary">{t('homePage.summary')}</p>
      <p className="work">{t('homePage.work')}</p>
      <p className="skills">{t('homePage.skills')}</p>
      <p className="education">{t('homePage.education')}</p>
      <p className="contact">{t('homePage.contact')}</p>
    </>
  )
}