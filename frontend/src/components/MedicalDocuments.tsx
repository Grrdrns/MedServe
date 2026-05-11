import { useState } from 'react'
import { Search, ChevronDown, FileText, Download, RefreshCw, Filter } from 'lucide-react'

interface Document {
  id: number
  type: 'medication' | 'lab' | 'imaging'
  name: string
  provider: string
  date: string
  status: 'Active' | 'Pending' | 'Ready' | 'Expired'
}

const documents: Document[] = [
  {
    id: 1,
    type: 'medication',
    name: 'Lipitor 20mg',
    provider: 'Dr. Sarah Gomez',
    date: 'Oct 20, 2023',
    status: 'Active'
  },
  {
    id: 2,
    type: 'lab',
    name: 'Complete Blood Count',
    provider: 'Malaybalay City Lab',
    date: 'Oct 18, 2023',
    status: 'Pending'
  },
  {
    id: 3,
    type: 'imaging',
    name: 'Chest X-Ray (PA)',
    provider: 'St. Jude Radiology',
    date: 'Oct 16, 2023',
    status: 'Ready'
  },
  {
    id: 4,
    type: 'medication',
    name: 'Metformin 500mg',
    provider: 'Dr. M. Lavina',
    date: 'Oct 10, 2023',
    status: 'Expired'
  },
  {
    id: 5,
    type: 'lab',
    name: 'Urinalysis',
    provider: 'Malaybalay City Lab',
    date: 'Oct 05, 2023',
    status: 'Ready'
  },
  {
    id: 6,
    type: 'medication',
    name: 'Vitamin B Complex',
    provider: 'Dr. Sarah Gomez',
    date: 'Sep 28, 2023',
    status: 'Active'
  }
]

const sidebarItems = [
  { icon: FileText, label: 'Prescriptions', active: true },
  { icon: FileText, label: 'Lab Orders', active: false },
  { icon: FileText, label: 'Appointments', active: false }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800'
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'Ready':
      return 'bg-blue-100 text-blue-800'
    case 'Expired':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'medication':
      return 'bg-blue-600'
    case 'lab':
      return 'bg-yellow-600'
    case 'imaging':
      return 'bg-orange-600'
    default:
      return 'bg-gray-600'
  }
}

export default function MedicalDocuments() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState('All Documents')

  return (
    <div className="min-h-screen bg-[#f0f7fa] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <h1 className="text-xl font-bold text-[#1a3a5c]">Malaybalay</h1>
          <p className="text-xs text-gray-500">HealthLink Sanctuary</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4">
          <ul className="space-y-1">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <button
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

        {/* User Profile */}
        <div className="p-4">
          <div className="flex items-center gap-3 p-3 bg-[#f0f7fa] rounded-xl">
            <div className="w-10 h-10 bg-[#1a3a5c] rounded-full flex items-center justify-center text-white font-medium">
              JD
            </div>
            <div>
              <p className="text-sm font-medium text-[#1a3a5c]">Juan Dela Cruz</p>
              <p className="text-xs text-gray-500">Patient</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-4xl font-serif text-[#1a3a5c] mb-2">Medical Documents</h1>
            <p className="text-gray-600">Access your digital prescriptions and laboratory requests</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#5a7a8a] text-white rounded-lg hover:bg-[#4a6a7a] transition-colors">
            <RefreshCw className="w-4 h-4" />
            Sync Records
          </button>
        </header>

        {/* Latest Prescription Banner */}
        <div className="bg-[#1a3a5c] rounded-xl p-6 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#1a3a5c]" />
            </div>
            <div>
              <span className="inline-block px-2 py-1 bg-blue-500 text-white text-xs rounded mb-1">
                LATEST PRESCRIPTION
              </span>
              <h3 className="text-xl font-semibold text-white">Amoxicillin + Clavulanic Acid</h3>
              <p className="text-blue-200 text-sm">Prescribed by Dr. M. Lavina • Oct 24, 2023</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#0d2137] text-white rounded-lg hover:bg-[#1a3a5c] transition-colors">
            <FileText className="w-4 h-4" />
            View Full Details
          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[300px] relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Search by medication or doctor name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
              />
            </div>
            
            <div className="relative">
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c] bg-white min-w-[160px]"
              >
                <option>All Documents</option>
                <option>Prescriptions</option>
                <option>Lab Results</option>
                <option>Imaging</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Recent Files */}
        <h2 className="text-xl font-serif text-[#1a3a5c] mb-4 text-center">Recent Files</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {documents.map((doc) => (
            <div key={doc.id} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 ${getTypeColor(doc.type)} rounded-lg flex items-center justify-center`}>
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(doc.status)}`}>
                  {doc.status}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#1a3a5c] mb-1">{doc.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{doc.provider}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-400">Issued Date</p>
                  <p className="text-sm text-[#1a3a5c]">{doc.date}</p>
                </div>
                <button className="flex items-center gap-1 px-4 py-2 border border-[#1a3a5c] text-[#1a3a5c] rounded-lg text-sm font-medium hover:bg-[#1a3a5c] hover:text-white transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="bg-[#e0e8ec] rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#1a3a5c] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">i</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600">
                These are digitally signed documents valid at all accredited pharmacies and laboratories within Malaybalay City. For physical copies, please visit the HealthLink Sanctuary office.
              </p>
            </div>
            <button className="text-[#1a3a5c] text-sm font-medium hover:underline whitespace-nowrap">
              Contact Support
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
