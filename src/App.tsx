
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/navbar"
import About from "./pages/about"
import Project from "./pages/projects"
import Hero from "./components/heroPage"

function AppContent() {

  const location = useLocation()
  const isProject = location.pathname === "/project"

  return (
    <>

      <Navbar isFixed={!isProject} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>


    </>
  )
}

function App() {
  return (

    <Router>
      <AppContent />

    </Router>
  )
}

export default App
