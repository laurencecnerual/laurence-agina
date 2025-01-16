import { useEffect, useState } from "react";
import { Project } from "../types.ts";
import { useTranslation } from 'react-i18next'

export default function Projects() {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    const projectData: Project[] = Array.from(t('projectData')) as unknown as Project[]
    setProjects(projectData);
  }, [i18n.resolvedLanguage])

  return (
    <>
      <h2>Projects Page</h2>
      { projects.map((project) => project.contributions.map((contribution) => <p>{contribution}</p>)) }
    </>
  )
}