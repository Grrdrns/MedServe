import { useState } from 'react'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import PatientDashboard from './components/patient/PatientDashboard'
import PatientFindDoctors from './components/patient/PatientFindDoctors'
import PatientAppointments from './components/patient/PatientAppointments'
import PatientPrescriptions from './components/patient/PatientPrescriptions'
import PatientProfile from './components/patient/PatientProfile'

type ViewType = 'landing' | 'login' | 'dashboard' | 'find-doctors' | 'my-appointments' | 'prescriptions' | 'profile'

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

  const handlePatientNavigate = (page: string) => {
    if (page === 'find-doctors') {
      setCurrentView('find-doctors')
    } else if (page === 'my-appointments') {
      setCurrentView('my-appointments')
    } else if (page === 'prescriptions') {
      setCurrentView('prescriptions')
    } else if (page === 'profile') {
      setCurrentView('profile')
    } else if (page === 'dashboard') {
      setCurrentView('dashboard')
    }
    // Add other pages as needed
  }

  const handleFindDoctorsNavigate = (page: string) => {
    if (page === 'dashboard') {
      setCurrentView('dashboard')
    } else if (page === 'my-appointments') {
      setCurrentView('my-appointments')
    } else if (page === 'prescriptions') {
      setCurrentView('prescriptions')
    } else if (page === 'find-doctors') {
      setCurrentView('find-doctors')
    }
    // Add other pages as needed
  }

  const handleAppointmentsNavigate = (page: string) => {
    if (page === 'dashboard') {
      setCurrentView('dashboard')
    } else if (page === 'find-doctors') {
      setCurrentView('find-doctors')
    } else if (page === 'prescriptions') {
      setCurrentView('prescriptions')
    } else if (page === 'my-appointments') {
      setCurrentView('my-appointments')
    }
    // Add other pages as needed
  }

  const handlePrescriptionsNavigate = (page: string) => {
    if (page === 'dashboard') {
      setCurrentView('dashboard')
    } else if (page === 'find-doctors') {
      setCurrentView('find-doctors')
    } else if (page === 'my-appointments') {
      setCurrentView('my-appointments')
    } else if (page === 'prescriptions') {
      setCurrentView('prescriptions')
    } else if (page === 'profile') {
      setCurrentView('profile')
    }
    // Add other pages as needed
  }

  const handleProfileNavigate = (page: string) => {
    if (page === 'dashboard') {
      setCurrentView('dashboard')
    } else if (page === 'find-doctors') {
      setCurrentView('find-doctors')
    } else if (page === 'my-appointments') {
      setCurrentView('my-appointments')
    } else if (page === 'prescriptions') {
      setCurrentView('prescriptions')
    } else if (page === 'profile') {
      setCurrentView('profile')
    }
    // Add other pages as needed
  }

  return (
    <div className="min-h-screen">
      {currentView === 'landing' && <LandingPage onEnterPortal={goToLogin} />}
      {currentView === 'login' && <LoginPage onLogin={goToDashboard} />}
      {currentView === 'dashboard' && (
        <PatientDashboard onLogout={logout} onNavigate={handlePatientNavigate} />
      )}
      {currentView === 'find-doctors' && (
        <PatientFindDoctors onLogout={logout} onNavigate={handleFindDoctorsNavigate} />
      )}
      {currentView === 'my-appointments' && (
        <PatientAppointments onLogout={logout} onNavigate={handleAppointmentsNavigate} />
      )}
      {currentView === 'prescriptions' && (
        <PatientPrescriptions onLogout={logout} onNavigate={handlePrescriptionsNavigate} />
      )}
      {currentView === 'profile' && (
        <PatientProfile onLogout={logout} onNavigate={handleProfileNavigate} />
      )}
    </div>
  )
}

export default App
