import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LibellLanding } from './components/LibellLanding'
import { FeaturesPage } from './components/FeaturesPage'
import { PricingPage } from './components/PricingPage'
import { PrivacyPage } from './components/PrivacyPage'
import { TermsPage } from './components/TermsPage'
import { AboutPage } from './components/AboutPage'
import { BetaWaitlistPage } from './components/BetaWaitlistPage'
import { LoginPage } from './components/LoginPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LibellLanding />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/beta" element={<BetaWaitlistPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </div>
  )
}

export default App
