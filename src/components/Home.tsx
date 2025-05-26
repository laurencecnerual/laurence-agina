import { useState } from 'react';
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  

  return (
    <>
      <h2 className={i18n.resolvedLanguage === "ja" ? " title home-text japanese" : "title home-text"}>{t('homePage.title')}</h2>
      <img className="my-photo" src="/me.jpg" alt="A photo of me" onLoad={handleImageLoad}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}/>
      <p className="summary home-text">{t('homePage.summary')}</p>
      <p className="work home-text">{t('homePage.work')}</p>
      <p className="skills home-text">{t('homePage.skills')}</p>
      <p className="education home-text">{t('homePage.education')}</p>
      <p className="contact home-text">{t('homePage.contact')}</p>
    </>
  )
}