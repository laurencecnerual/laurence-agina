import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer>
      <a href="https://www.linkedin.com/in/laurenceagina/?locale=en_US" target="_blank" rel="noopener noreferrer" className={i18n.resolvedLanguage === "ja" ? "japanese" : ""}>LinkedIn ({t('footer.english')})</a>
      <a href="https://www.linkedin.com/in/laurenceagina/?locale=ja_JP" target="_blank" rel="noopener noreferrer" className={i18n.resolvedLanguage === "ja" ? "japanese" : ""}>LinkedIn ({t('footer.japanese')})</a>
      <a href="https://github.com/laurencecnerual" target="_blank" rel="noopener noreferrer">GitHub</a>
    </footer>
  )
}