import { useState } from 'react'
import { Search, Download, Upload, ChevronDown, FileText, Lock, Shield } from 'lucide-react'

interface MedicalRecord {
  id: number
  type: 'Consultation' | 'Lab Result' | 'Prescription'
  title: string
  doctor: string
  date: string
  files: number
}

const records: MedicalRecord[] = [
  {
    id: 1,
    type: 'Consultation',
    title: 'General Wellness Checkup',
    doctor: 'Dr. Maria Lavina',
    date: 'Oct 24, 2023',
    files: 2
  },
  {
    id: 2,
    type: 'Lab Result',
    title: 'Full Blood Count Panel',
    doctor: 'Dr. Laboratory Dept',
    date: 'Oct 20, 2023',
    files: 1
  },
  {
    id: 3,
    type: 'Prescription',
    title: 'Maintenance Medication',
    doctor: 'Dr. Ricardo Pineda',
    date: 'Oct 15, 2023',
    files: 0
  },
  {
    id: 4,
    type: 'Consultation',
    title: 'Virtual Dermatology Session',
    doctor: 'Dr. Sarah Kho',
    date: 'Sep 28, 2023',
    files: 4
  },
  {
    id: 5,
    type: 'Lab Result',
    title: 'Chest X-Ray Digital Copy',
    doctor: 'Dr. Radiology Unit',
    date: 'Sep 12, 2023',
    files: 1
  },
  {
    id: 6,
    type: 'Prescription',
    title: 'Antibiotics Course',
    doctor: 'Dr. Maria Lavina',
    date: 'Aug 30, 2023',
    files: 1
  }
]

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Consultation':
      return 'bg-blue-100 text-blue-800'
    case 'Lab Result':
      return 'bg-green-100 text-green-800'
    case 'Prescription':
      return 'bg-purple-100 text-purple-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function MedicalRecordsVault() {
  const [searchQuery, setSearchQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('All Types')
  const [sortBy, setSortBy] = useState('Newest First')

  return (
    <div className="min-h-screen bg-[#f0f7fa]">
      {/* Header */}
      <header className="bg-[#f0f7fa] px-8 py-8 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-serif text-[#1a3a5c] mb-2">Medical Records Vault</h1>
          <p className="text-gray-600">Secure access to your clinical history and diagnostic results</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#1a3a5c] text-[#1a3a5c] rounded-lg hover:bg-[#1a3a5c] hover:text-white transition-colors">
            <Download className="w-4 h-4" />
            Request Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1a3a5c] text-white rounded-lg hover:bg-[#14304a] transition-colors">
            <Upload className="w-4 h-4" />
            Upload Result
          </button>
        </div>
      </header>

      <div className="px-8 pb-8">
        {/* Search Bar */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[300px] relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Search records, doctors, or clinics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
              />
            </div>
            
            <div className="relative">
              <select 
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c] bg-white min-w-[140px]"
              >
                <option>All Types</option>
                <option>Consultation</option>
                <option>Lab Result</option>
                <option>Prescription</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c] bg-white min-w-[140px]"
              >
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Alphabetical</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#e8f4f8] to-[#d0e8f0] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#1a3a5c]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1a3a5c]">24</p>
                <p className="text-sm text-gray-600">Total Records</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#e8f8f0] to-[#d0f0e0] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-green-700" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-700">08</p>
                <p className="text-sm text-gray-600">Prescriptions</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#f8f0e8] to-[#f0e0d0] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-yellow-700" />
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-700">12</p>
                <p className="text-sm text-gray-600">Lab Results</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Archive Entries */}
        <h2 className="text-xl font-semibold text-[#1a3a5c] mb-4 text-center">Recent Archive Entries</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {records.map((record) => (
            <div key={record.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(record.type)}`}>
                  {record.type}
                </span>
                <span className="text-sm text-gray-500">{record.date}</span>
              </div>

              <h3 className="text-lg font-semibold text-[#1a3a5c] mb-1">{record.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{record.doctor}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <FileText className="w-4 h-4" />
                  {record.files} Files
                </div>
                <button className="flex items-center gap-1 text-[#1a3a5c] hover:underline text-sm font-medium">
                  <Lock className="w-4 h-4" />
                  Open Vault
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Security Footer */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#1a3a5c] mb-1">End-to-End Encrypted Vault</h3>
              <p className="text-sm text-gray-600">
                Your medical records are encrypted using Imperial-grade security protocols. Only you and your authorized healthcare providers can access these files.
              </p>
            </div>
            <button className="text-[#1a3a5c] text-sm font-medium hover:underline whitespace-nowrap">
              View Access Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
