import { Certification } from "../types";
import { useTranslation } from 'react-i18next'
import Icon from "@mdi/react";
import { mdiCertificate, mdiInformation } from "@mdi/js";

type CertificationProps = {
  certification: Certification
}

export default function CertificationCard( {certification}: CertificationProps ) {
  const { t } = useTranslation();

  return (
    <div className="certification-card">
      <div className="image-side">
        <img className="logoURL" src={certification?.logoURL} alt={"Logo for " + certification?.organization + " " + certification?.title} loading="lazy"/>
      </div>
      <div className="text-side">
        <div className="main-content">
          <p className="organization">{certification.organization}</p>
          <h4 className="title">{certification.title}{certification.abbreviation && ` (${certification.abbreviation})`}</h4>
          <p className="summary">{certification.summary}</p>
          <p className="dateEarned">{t('certificationsPage.dateEarnedLabel')}: {certification.dateEarned}</p>
          { certification.takenInJapanese && <p className="takenInJapanese">{t('certificationsPage.takenInJapaneseLabel')}</p> }
        </div>
        <div className="external-links">
          <p className="moreInfoURL"><a href={certification?.moreInfoURL} target="_blank" rel="noopener noreferrer">{t('certificationsPage.moreInfoURLLabel')} <Icon path={mdiInformation} size={1} /></a></p>
          <p className="certURL"><a href={certification?.certURL} target="_blank" rel="noopener noreferrer">{t('certificationsPage.certURLLabel')} <Icon path={mdiCertificate} size={1} /></a></p>
        </div>
      </div>
    </div>
  )
}