import { Routes, Route } from 'react-router-dom'
import { LibellLanding } from './components/LibellLanding'
import { FeaturesPage } from './components/FeaturesPage'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<LibellLanding />} />
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
    </div>
  )
}

export default App
