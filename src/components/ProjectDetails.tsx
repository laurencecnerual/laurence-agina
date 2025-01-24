import { useEffect, useState } from "react";
import { Project } from "../types";
import { useTranslation } from 'react-i18next'
import { Link, useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { t, i18n } = useTranslation();
  const { title } = useParams();
  const [project, setProject] = useState<Project>();

  useEffect (() => {
    const projectData: Project[] = Array.from(t('projectData')) as unknown as Project[];
    setProject(projectData.find((prj) => prj.slug === title));
  }, [i18n.resolvedLanguage]);

  return (
    <div className="project-details">
      <Link to="/projects"><p>{t('navigation.back')}</p></Link>
      <h2 className="title">{t('projectsPage.titleLabel')}: {project?.title}</h2>
      { project?.role && <p className="role">{t('projectsPage.roleLabel')}: {project?.role}</p> }
      <p className="startDate">{t('projectsPage.startDateLabel')}: {project?.startDate}</p>
      { project?.endDate && <p className="endDate">{t('projectsPage.endDateLabel')}: {project?.endDate}</p> }
      <p className="summary">{t('projectsPage.summaryLabel')}: {project?.summary}</p>
      <p className="stack">{t('projectsPage.stackLabel')}: {project?.stack}</p>
      <p className="teamSize">{t('projectsPage.teamSizeLabel')}: {"" + project?.teamSize}</p>
      <p>{t('projectsPage.contributionsLabel')}:</p>
      <ul className="contributions">
        {project?.contributions.map((contribution, index) => <li key={index}>{contribution}</li>)}
      </ul>
      <p className="gitHubURL">{t('projectsPage.gitHubURLLabel')}: <a href={project?.gitHubURL} target="_blank" rel="noopener noreferrer">{project?.gitHubURL}</a></p>
      { project?. deploymentURL && <p className="deploymentURL">{t('projectsPage.deploymentURLLabel')}: <a href={project?.deploymentURL} target="_blank" rel="noopener noreferrer">{project?.deploymentURL}</a></p> }
    </div>
  )
}