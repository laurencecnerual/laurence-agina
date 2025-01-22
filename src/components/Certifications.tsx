import { useEffect, useState } from "react";
import { Certification } from "../types.ts";
import { useTranslation } from 'react-i18next'
import CertificationCard from "./CertificationCard.tsx";

export default function Certifications() {
  const { t, i18n } = useTranslation();
  const [japaneseCertifications, setJapaneseCertifications] = useState<Certification[]>([]);
  const [technicalCertifications, setTechnicalCertifications] = useState<Certification[]>([]);

    useEffect(() => {
      const japaneseCertificationData: Certification[] = Array.from(t('japaneseCertificationData')) as unknown as Certification[]
      setJapaneseCertifications(japaneseCertificationData);
      const technicalcertificationData: Certification[] = Array.from(t('technicalCertificationData')) as unknown as Certification[]
      setTechnicalCertifications(technicalcertificationData);
    }, [i18n.resolvedLanguage])

  return (
    <>
      <h2>{t('certificationsPage.certificationsLabel')}</h2>
      <h3>{t('certificationsPage.japaneseCertificationsLabel')}</h3>
      <div className="certification-list">
        { japaneseCertifications.map((certification) => <CertificationCard key={certification.title} certification={certification}/>) }
      </div>
      <h3>{t('certificationsPage.technicalCertificationsLabel')}</h3>
      <div className="certification-list">
        { technicalCertifications.map((certification) => <CertificationCard key={certification.title} certification={certification}/>) }
      </div>
    </>
  )
}