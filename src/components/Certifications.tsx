import { certifications } from "../data"

export default function Certifications() {
  return (
    <>
      <h2>Certifications Page</h2>
      {certifications.map((certification) => <p>{certification.title}</p>)}
    </>
  )
}