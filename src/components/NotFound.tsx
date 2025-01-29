import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t, i18n } = useTranslation();

  return (
    <div className="not-found">
      <h2 className={i18n.resolvedLanguage === "ja" ? "japanese" : ""}>{t('notFoundPage.404')}</h2>
      <iframe 
        style={{aspectRatio: '16/9'}}
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
      </iframe>
    </div>
  )
}