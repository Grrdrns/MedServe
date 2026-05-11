import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import Sidebar from './components/Sidebar'
import HomeDashboard from './components/HomeDashboard'

interface PatientPortalProps {
  onBackToLanding: () => void
}

type TabType = 'home' | 'doctors' | 'services' | 'files' | 'messages'

export default function PatientPortal({ onBackToLanding }: PatientPortalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('home')

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeDashboard />
      case 'doctors':
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Doctors page coming soon...</p>
          </div>
        )
      case 'services':
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Services page coming soon...</p>
          </div>
        )
      case 'files':
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Files page coming soon...</p>
          </div>
        )
      case 'messages':
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Messages page coming soon...</p>
          </div>
        )
      default:
        return <HomeDashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to Landing Button */}
      <button
        onClick={onBackToLanding}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all text-sm font-medium text-gray-700"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>

      <div className="flex min-h-screen bg-gray-50 pt-16">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}
