import { projects } from "../data"

export default function Projects() {
  return (
    <>
      <h2>Projects Page</h2>
      {projects.map((project) => <p>{project.title}</p>)}
    </>
  )
}