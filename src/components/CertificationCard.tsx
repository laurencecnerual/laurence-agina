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
        <h4 className="title">{t('certificationsPage.titleLabel')}: {certification.title}{certification.abbreviation && ` (${certification.abbreviation})`}</h4>
        <p className="organization">{t('certificationsPage.organizationLabel')}: {certification.organization}</p>
        <p className="summary">{t('certificationsPage.summaryLabel')}: {certification.summary}</p>
        { certification.takenInJapanese && <p className="takenInJapanese">{t('certificationsPage.takenInJapaneseLabel')}</p>}
        <p className="dateEarned">{t('certificationsPage.dateEarnedLabel')}: {certification.dateEarned}</p>
        { certification.dateRenewed && <p className="endDate">{t('certificationsPage.dateRenewedLabel')}: {certification.dateRenewed}</p> }
        { certification.dateExpiring && <p className="endDate">{t('certificationsPage.dateExpiringLabel')}: {certification.dateExpiring}</p> }
        { certification.myScore && <p className="myScore">{t('certificationsPage.myScoreLabel')}: {"" + certification.myScore}</p> }
        { certification.maxPossibleScore && <p className="maxPossibleScore">{t('certificationsPage.maxPossibleScoreLabel')}: {"" + certification.maxPossibleScore}</p> }
        <p className="certURL">{t('certificationsPage.certURLLabel')}: <a href={certification.certURL} target="_blank" rel="noopener noreferrer">{certification.certURL}</a></p>
      </div>
    </Link>
  )
}