import { Home, Stethoscope, Briefcase, Users, MessageSquare, Heart } from 'lucide-react'

type TabType = 'home' | 'doctors' | 'services' | 'files' | 'messages'

interface SidebarProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

const menuItems = [
  { id: 'home' as TabType, label: 'Home', icon: Home },
  { id: 'doctors' as TabType, label: 'Doctors', icon: Stethoscope },
  { id: 'services' as TabType, label: 'Services', icon: Briefcase },
  { id: 'files' as TabType, label: 'Files', icon: Users },
  { id: 'messages' as TabType, label: 'Messages', icon: MessageSquare },
]

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col min-h-screen">
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Heart className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-semibold text-gray-800">BukMD</span>
      </div>

      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : ''}`} />
                  {item.label}
                </button>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
