import './App.css'
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import Home from "./components/Home.tsx"
import Projects from "./components/Projects.tsx"
import Certifications from "./components/Certifications.tsx"

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="*" element={<h2>404 Page Not Found</h2>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
