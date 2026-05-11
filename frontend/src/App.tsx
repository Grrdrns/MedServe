import { useState } from 'react'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import PatientDashboard from './components/PatientDashboard'

type ViewType = 'landing' | 'login' | 'dashboard'

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('landing')

  const goToLogin = () => {
    setCurrentView('login')
  }

  const goToDashboard = () => {
    setCurrentView('dashboard')
  }

  const logout = () => {
    setCurrentView('landing')
  }

  return (
    <div className="min-h-screen">
      {currentView === 'landing' && <LandingPage onEnterPortal={goToLogin} />}
      {currentView === 'login' && <LoginPage onLogin={goToDashboard} />}
      {currentView === 'dashboard' && <PatientDashboard onLogout={logout} />}
    </div>
  )
}

export default App
