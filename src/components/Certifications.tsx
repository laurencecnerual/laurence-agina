import { useEffect, useState } from "react";
import { Certification } from "../types.ts";
import { useTranslation } from 'react-i18next'
import CertificationCard from "./CertificationCard.tsx";

export default function Certifications() {
  const { t, i18n } = useTranslation();
  const [certifications, setCertifications] = useState<Certification[]>([]);

    useEffect(() => {
      const certificationData: Certification[] = Array.from(t('certificationData')) as unknown as Certification[]
      setCertifications(certificationData);
    }, [i18n.resolvedLanguage])

  return (
    <>
      <h2>{t('certificationsPage.certificationsLabel')}</h2>
      <div className="certification-list">
        { certifications.map((certification) => <CertificationCard key={certification.title} certification={certification}/>) }
      </div>
    </>
  )
}