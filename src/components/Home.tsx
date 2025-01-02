import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <h2>{t('homePage.title')}</h2>
      <p>{t('homePage.summary')}</p>
      <p>{t('homePage.work')}</p>
      <p>{t('homePage.skills')}</p>
      <p>{t('homePage.education')}</p>
      <p>{t('homePage.contact')}</p>
    </>
  )
}