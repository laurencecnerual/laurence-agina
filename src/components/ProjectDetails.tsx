import { useEffect, useState } from "react";
import { Project } from "../types";
import { useTranslation } from 'react-i18next'
import { Link, useParams } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiRocketLaunch, mdiSourceRepositoryMultiple  } from '@mdi/js';

export default function ProjectDetails() {
  const { t, i18n } = useTranslation();
  const { title } = useParams();
  const [project, setProject] = useState<Project>();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

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
        <img className="screenshotURL" src={project?.screenshotURL} alt={"Screenshot of " + project?.title} onLoad={handleImageLoad}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}/>
        <p className="gitHubURL"><a href={project?.gitHubURL} target="_blank" rel="noopener noreferrer">{t('projectsPage.gitHubURLLabel')} <Icon path={mdiSourceRepositoryMultiple} size={1} /></a></p>
        { project?. deploymentURL && <p className="deploymentURL"> <a href={project?.deploymentURL} target="_blank" rel="noopener noreferrer">{t('projectsPage.deploymentURLLabel')} <Icon path={mdiRocketLaunch} size={1} /></a></p> }
      </div>
    </>
  )
}