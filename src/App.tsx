import './App.css'
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import Home from "./components/Home.tsx"
import Projects from "./components/Projects.tsx"
import Certifications from "./components/Certifications.tsx"
import NotFound from "./components/NotFound.tsx"
import ProjectDetails from './components/ProjectDetails.tsx';
import CertificationDetails from './components/CertificationDetails.tsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} /> 
          <Route path="projects/:title" element={<ProjectDetails />} /> 
          <Route path="certifications" element={<Certifications />} />
          <Route path="certifications/:title" element={<CertificationDetails />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
