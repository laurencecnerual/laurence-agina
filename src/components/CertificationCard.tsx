import { Certification } from "../types";
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";

type CertificationProps = {
  certification: Certification
}

export default function CertificationCard( {certification}: CertificationProps ) {
  const { t } = useTranslation();

  return (
    <Link to={`/certifications/${certification.slug}`}>
      <div className="certification-card">
        <p className="organization">{certification.organization}</p>
        <h4 className="title">{certification.title}{certification.abbreviation && ` (${certification.abbreviation})`}</h4>
        <p className="summary">{certification.summary}</p>
        <p className="dateEarned">{t('certificationsPage.dateEarnedLabel')}: {certification.dateEarned}</p>
        { certification.takenInJapanese && <p className="takenInJapanese">{t('certificationsPage.takenInJapaneseLabel')}</p> }
      </div>
    </Link>
  )
}