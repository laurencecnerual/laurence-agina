import { Certification } from "../types.ts";
import { useTranslation } from 'react-i18next'

export default function Certifications() {
  const { t } = useTranslation();
  let certifications: Certification[];
  certifications = [
    {
      organization: "Organization 1",
      title: t('certificationData.certification01.title'),
      summary: "Summary 1",
      dateEarned: new Date("2024/08"),
      dateRenewed: new Date("2024/09"),
      dateExpiring: new Date("2026/10"),
      takenInJapanese: false,
      myScore: 90,
      maxPossibleScore: 100,
      certURL: "PDF URL 1"
    },
    {
      organization: "Organization 2",
      title: t('certificationData.certification02.title'),
      summary: "Summary 2",
      dateEarned: new Date("2024/09"),
      dateRenewed: new Date("2024/10"),
      dateExpiring: new Date("2026/11"),
      takenInJapanese: false,
      myScore: 90,
      maxPossibleScore: 100,
      certURL: "PDF URL 2"
    },
  ];

  return (
    <>
      <h2>Certifications Page</h2>
      {certifications.map((certification) => <p>{certification.title}</p>)}
    </>
  )
}