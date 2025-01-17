import { Project } from "../types";
import { useTranslation } from 'react-i18next'

type ProjectProps = {
  project: Project
}

export default function ProjectsCard( {project}: ProjectProps ) {
  const { t } = useTranslation();

  return (
    <div className="project-card">
      <h3 className="title">{t('projectsPage.titleLabel')}: {project.title}</h3>
      { project.role && <p className="role">{t('projectsPage.roleLabel')}: {project.role}</p> }
      <p className="startDate">{t('projectsPage.startDateLabel')}: {project.startDate}</p>
      { project.endDate && <p className="endDate">{t('projectsPage.endDateLabel')}: {project.endDate}</p> }
      <p className="summary">{t('projectsPage.summaryLabel')}: {project.summary}</p>
      <p className="stack">{t('projectsPage.stackLabel')}: {project.stack}</p>
      <p className="teamSize">{t('projectsPage.teamSizeLabel')}: {"" + project.teamSize}</p>
      <p>{t('projectsPage.contributionsLabel')}:</p>
      <ul className="contributions">
        {project.contributions.map((contribution, index) => <li key={index}>{contribution}</li>)}
      </ul>
      <p className="gitHubURL">{t('projectsPage.gitHubURLLabel')}: <a href={project.gitHubURL}>{project.gitHubURL}</a></p>
      { project. deploymentURL && <p className="deploymentURL">{t('projectsPage.deploymentURLLabel')}: <a href={project.deploymentURL}>{project.deploymentURL}</a></p> }
    </div>
  )
}