import { useEffect, useState } from "react";
import { Certification } from "../types";
import { useTranslation } from 'react-i18next'
import { Link, useParams } from "react-router-dom";

export default function CertificationDetails() {
  const { t, i18n } = useTranslation();
  const { title } = useParams();
  const [certification, setCertification] = useState<Certification>();

  useEffect (() => {
    const japaneseCertificationData: Certification[] = Array.from(t('japaneseCertificationData')) as unknown as Certification[];
    const technicalCertificationData: Certification[] = Array.from(t('technicalCertificationData')) as unknown as Certification[];
    const certificationData = japaneseCertificationData.concat(technicalCertificationData);
    setCertification(certificationData.find((cert) => cert.slug === title));
  }, [i18n.resolvedLanguage]);

  return (
    <div className="certification-details">
      <Link to="/certifications"><p>{t('navigation.back')}</p></Link>
      <h2 className="title">{certification?.title}{certification?.abbreviation && ` (${certification?.abbreviation})`}</h2>
      <p className="summary">{certification?.summary}</p>
      { certification?.takenInJapanese && <p className="takenInJapanese">{t('certificationsPage.takenInJapaneseLabel')}</p> }
      <p className="organization">{t('certificationsPage.organizationLabel')}: {certification?.organization}</p>
      <p className="dateEarned">{t('certificationsPage.dateEarnedLabel')}: {certification?.dateEarned}</p>
      { certification?.dateRenewed && <p className="dateRenewed">{t('certificationsPage.dateRenewedLabel')}: {certification?.dateRenewed}</p> }
      { certification?.dateExpiring && <p className="dateExpiring">{t('certificationsPage.dateExpiringLabel')}: {certification?.dateExpiring}</p> }
      { certification?.myScore && <p className="score">{"" + certification?.myScore}{certification?.maxPossibleScore && " / " + certification?.maxPossibleScore} {t('certificationsPage.points')}</p> }
      <p className="certURL">{t('certificationsPage.certURLLabel')}: <a href={certification?.certURL} target="_blank" rel="noopener noreferrer">{certification?.certURL}</a></p>
    </div>
  )
}