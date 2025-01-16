import { Project } from "../types.ts";
import { useTranslation } from 'react-i18next'

export default function Projects() {
  const { t } = useTranslation();
  let projects: Project[];

  projects = [
    {
      title: t('projectData.project01.title'),
      summary: "Summary 1",
      contributions: ["Contribution 1.1", "Contribution 1.2", "Contribution 1.3"],
      role: "Role 1",
      teamSize: 4,
      startDate: new Date("2024/11"),
      endDate: new Date("2024/11"),
      gitHubURL: "GitHub URL 1",
      deploymentURL: "Render URL 1"
    },
    {
      title: t('projectData.project02.title'),
      summary: "Summary 2",
      contributions: ["Contribution 2.1", "Contribution 2.2", "Contribution 2.3"],
      role: "Role 2",
      teamSize: 1,
      startDate: new Date("2024/12"),
      endDate: new Date("2024/12"),
      gitHubURL: "GitHub URL 2",
      deploymentURL: "Render URL 2"
    },
  ];

  return (
    <>
      <h2>Projects Page</h2>
      {projects.map((project) => <p>{project.title}</p>)}
    </>
  )
}