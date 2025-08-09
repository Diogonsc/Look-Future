import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { ProjectsPage } from './pages/ProjectsPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
