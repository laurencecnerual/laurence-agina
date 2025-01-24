import { useEffect, useState } from "react";
import { Project } from "../types.ts";
import { useTranslation } from 'react-i18next'
import ProjectCard from "./ProjectCard.tsx";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const projectData: Project[] = Array.from(t('projectData')) as unknown as Project[];
    setProjects(projectData);
  }, [i18n.resolvedLanguage]);

  return (
    <>
      <h2>{t('projectsPage.projectsLabel')}</h2>
      <div className="project-list">
        { projects.map((project) => <ProjectCard key={project.title} project={project} />) }
      </div>
    </>
  )
}