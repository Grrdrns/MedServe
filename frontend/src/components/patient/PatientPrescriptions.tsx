// Patient Prescriptions & Records Page
import { 
  LayoutDashboard, 
  Stethoscope, 
  Calendar,
  FileText,
  User,
  Search,
  LogOut,
  Building2,
  Settings,
  FileArchive,
  Plus,
  Shield,
  Lock
} from 'lucide-react'

interface FileRecord {
  id: number
  type: 'Prescription' | 'Lab Test' | 'Notes'
  title: string
  doctor: string
  date: string
  files: string
}

const recentFiles: FileRecord[] = [
  {
    id: 1,
    type: 'Prescription',
    title: 'General Wellness Checkup',
    doctor: 'Dr. Elena Santos',
    date: 'Oct 24, 2023',
    files: '1 PDF File'
  },
  {
    id: 2,
    type: 'Lab Test',
    title: 'General Wellness Checkup',
    doctor: 'Malaybalay Med Center',
    date: 'Oct 24, 2023',
    files: '3 Image Files'
  },
  {
    id: 3,
    type: 'Notes',
    title: 'General Wellness Checkup',
    doctor: 'Dr. Marcus Rivera',
    date: 'Oct 24, 2023',
    files: '1 File'
  },
  {
    id: 4,
    type: 'Prescription',
    title: 'General Wellness Checkup',
    doctor: 'Dr. Sarah Lavina',
    date: 'Oct 24, 2023',
    files: '2 PDFs Files'
  }
]

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: false },
  { icon: Stethoscope, label: 'Find Doctors', active: false },
  { icon: Calendar, label: 'My Appointments', active: false },
  { icon: FileText, label: 'Prescriptions', active: true },
  { icon: User, label: 'Profile', active: false }
]

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Prescription':
      return 'bg-blue-100 text-blue-700'
    case 'Lab Test':
      return 'bg-green-100 text-green-700'
    case 'Notes':
      return 'bg-gray-100 text-gray-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

interface PatientPrescriptionsProps {
  onLogout: () => void
  onNavigate: (page: string) => void
}

export default function PatientPrescriptions({ onLogout, onNavigate }: PatientPrescriptionsProps) {
  return (
    <div className="min-h-screen bg-[#f0f7fa] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1a3a5c] rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#1a3a5c]">HealthLink</h1>
            <p className="text-xs text-gray-500">Malaybalay City</p>
          </div>
        </div>

        <nav className="flex-1 px-4 overflow-y-auto">
          <ul className="space-y-1">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => onNavigate(item.label.toLowerCase().replace(' ', '-'))}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? 'bg-[#e8f0f8] text-[#1a3a5c]'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4">
          <div className="flex items-center gap-3 p-3 bg-[#f0f7fa] rounded-xl mb-2">
            <div className="w-10 h-10 bg-[#1a3a5c] rounded-full flex items-center justify-center text-white font-medium">
              JD
            </div>
            <div>
              <p className="text-sm font-medium text-[#1a3a5c]">Juan Dela Cruz</p>
              <p className="text-xs text-gray-500">Patient ID: 8821</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Tabs */}
        <div className="flex items-center gap-2 mb-6">
          <button className="px-4 py-2 bg-gray-200 rounded-lg text-sm font-medium text-gray-700">
            All Files
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
            Prescriptions
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
            Lab Tests
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
            Other Notes
          </button>
          <div className="flex-1"></div>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-serif text-[#1a3a5c] mb-2">Prescriptions & Records</h1>
          <p className="text-gray-600">Access your medical history, digital prescriptions, and lab results issued by Malaybalay clinics.</p>
        </header>

        {/* Search */}
        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input 
            type="text"
            placeholder="Search all files"
            className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Empty State Illustration */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="relative mb-4">
            {/* Two overlapping squares */}
            <div className="w-16 h-16 bg-red-200 rounded-lg transform -rotate-6 absolute -left-2 top-2"></div>
            <div className="w-16 h-16 bg-indigo-300 rounded-lg flex items-center justify-center relative z-10">
              <span className="text-indigo-700 text-2xl font-bold">?</span>
            </div>
            {/* Magnifying glass */}
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-20">
              <Search className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <p className="text-gray-500 text-sm">Files from your doctors or lab tests will go here</p>
        </div>

        {/* Recent Files */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-[#1a3a5c]">Recent Files</h2>
            <button className="flex items-center gap-2 text-sm text-[#1a3a5c] font-medium hover:underline">
              <Plus className="w-4 h-4" />
              Upload Record
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {recentFiles.map((file) => (
              <div key={file.id} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(file.type)}`}>
                    {file.type}
                  </span>
                  <span className="text-xs text-gray-400">{file.date}</span>
                </div>
                <h3 className="font-semibold text-[#1a3a5c] mb-1 text-center">{file.title}</h3>
                <p className="text-sm text-gray-500 mb-4 text-center">{file.doctor}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <FileArchive className="w-3 h-3" />
                    {file.files}
                  </div>
                  <button className="flex items-center gap-1 text-xs text-[#1a3a5c] font-medium hover:underline">
                    <Lock className="w-3 h-3" />
                    Open Vault
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secure Health Vault Banner */}
        <div className="bg-[#1a3a5c] rounded-xl p-6 flex items-center justify-between overflow-hidden">
          <div className="max-w-md">
            <h3 className="text-xl font-semibold text-white mb-2">Secure Health Vault</h3>
            <p className="text-blue-200 text-sm mb-4">Your medical data is encrypted and only accessible by you and your authorized physicians in Malaybalay City.</p>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#5a7a8a] text-white rounded-lg font-medium hover:bg-[#4a6a7a] transition-colors">
              <Lock className="w-4 h-4" />
              Manage Privacy Settings
            </button>
          </div>
          <div className="relative">
            <div className="w-32 h-24 bg-blue-800/50 rounded-xl flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
