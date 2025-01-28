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
    <>
      <Link to="/projects" className="back-to-list">{t('navigation.back')}</Link>
      <div className="project-details">
        <h2 className="title">{project?.title}</h2>
        <p className="summary">{project?.summary}</p>
        { project?.role && <p className="role">{t('projectsPage.roleLabel')}: <span>{project?.role}</span></p> }
        <p className="teamSize">{t('projectsPage.teamSizeLabel')}: {"" + project?.teamSize}</p>
        <p className="stack">{t('projectsPage.stackLabel')}: {project?.stack}</p>
        <p className="dates">{project?.startDate} ~{project?.endDate && ` ${project.endDate}`}</p>
        <p>{t('projectsPage.contributionsLabel')}:</p>
        <ul className="contributions">
          {project?.contributions.map((contribution, index) => <li key={index}>{contribution}</li>)}
        </ul>
        <p className="gitHubURL"><a href={project?.gitHubURL} target="_blank" rel="noopener noreferrer">{t('projectsPage.gitHubURLLabel')}</a></p>
        { project?. deploymentURL && <p className="deploymentURL"> <a href={project?.deploymentURL} target="_blank" rel="noopener noreferrer">{t('projectsPage.deploymentURLLabel')}</a></p> }
      </div>
    </>
  )
}