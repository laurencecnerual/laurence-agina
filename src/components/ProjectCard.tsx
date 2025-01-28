import { Project } from "../types";
import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";

type ProjectProps = {
  project: Project
}

export default function ProjectCard( {project}: ProjectProps ) {
  const { t } = useTranslation();

  return (
    <Link to={`/projects/${project.slug}`}>
      <div className="project-card">
        <h3 className="title">{project.title}</h3>
        <p className="summary">{project.summary}</p>
        { project.role && <p className="role">{t('projectsPage.roleLabel')}: <span>{project.role}</span></p> }
        <p className="teamSize">{t('projectsPage.teamSizeLabel')}: {"" + project.teamSize}</p>
        <p className="stack">{t('projectsPage.stackLabel')}: {project.stack}</p>
      </div>
    </Link>
  )
}