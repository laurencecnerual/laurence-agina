import { Project } from "../types";
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiDotsHorizontalCircleOutline, mdiSourceRepositoryMultiple, mdiRocketLaunch } from "@mdi/js";

type ProjectProps = {
  project: Project
}

export default function ProjectCard( {project}: ProjectProps ) {
  const { t } = useTranslation();

  return (
    <div className="project-card">
      <h3 className="title">{project.title}</h3>
      <p className="summary">{project.summary}</p>
      <img className="screenshotURL" src={project?.screenshotURL} alt={"Screenshot of " + project?.title} loading="lazy"/>
      { project.role && <p className="role">{t('projectsPage.roleLabel')}: <span>{project.role}</span></p> }
      <p className="teamSize">{t('projectsPage.teamSizeLabel')}: {"" + project.teamSize}</p>
      <p className="stack">{t('projectsPage.stackLabel')}: {project.stack}</p>
      <p className="gitHubURL"><a href={project?.gitHubURL} target="_blank" rel="noopener noreferrer">{t('projectsPage.gitHubURLLabel')} <Icon path={mdiSourceRepositoryMultiple} size={1} /></a></p>
      { project?. deploymentURL && <p className="deploymentURL"> <a href={project?.deploymentURL} target="_blank" rel="noopener noreferrer">{t('projectsPage.deploymentURLLabel')} <Icon path={mdiRocketLaunch} size={1} /></a></p> }
      <p className="moreInfo"><Link to={`/projects/${project.slug}`}><Icon path={ mdiDotsHorizontalCircleOutline } size={1} /></Link></p>
    </div>
  )
}