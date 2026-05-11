import { useState } from 'react'
import { 
  LayoutDashboard, 
  Stethoscope, 
  Calendar,
  FileText,
  User,
  Search,
  ChevronDown,
  Star,
  MapPin,
  Video,
  LogOut,
  Building2
} from 'lucide-react'

interface Doctor {
  id: number
  name: string
  specialty: string
  rating: number
  reviews: number
  location: string
  available: string
  image: string
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Elena Santos',
    specialty: 'Pediatrician',
    rating: 4.8,
    reviews: 24,
    location: 'Malaybalay Med Center',
    available: 'Today, 2:00 PM',
    image: '/doctor1.jpg'
  },
  {
    id: 2,
    name: 'Dr. Marcus Rivera',
    specialty: 'Cardiologist',
    rating: 4.9,
    reviews: 32,
    location: 'Polyclinic Bumiputera',
    available: 'Tomorrow, 9:00 AM',
    image: '/doctor2.jpg'
  },
  {
    id: 3,
    name: 'Dr. Sarah Lavina',
    specialty: 'Dermatologist',
    rating: 4.7,
    reviews: 18,
    location: 'Skin Sanctuary',
    available: 'Oct 24, 10:30 AM',
    image: '/doctor3.jpg'
  },
  {
    id: 4,
    name: 'Dr. Roberto Chen',
    specialty: 'General Physician',
    rating: 4.6,
    reviews: 41,
    location: 'City Health Office',
    available: 'Today, 4:30 PM',
    image: '/doctor4.jpg'
  },
  {
    id: 5,
    name: 'Dr. Angela Torres',
    specialty: 'OB-GYN',
    rating: 4.9,
    reviews: 28,
    location: 'Torres Maternity',
    available: 'Oct 25, 1:00 PM',
    image: '/doctor5.jpg'
  },
  {
    id: 6,
    name: 'Dr. Kevin Varga',
    specialty: 'Psychiatrist',
    rating: 4.8,
    reviews: 15,
    location: 'Mind Care Malaybalay',
    available: 'Next Week',
    image: '/doctor6.jpg'
  }
]

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: false },
  { icon: Stethoscope, label: 'Find Doctors', active: true },
  { icon: Calendar, label: 'My Appointments', active: false },
  { icon: FileText, label: 'Prescriptions', active: false },
  { icon: User, label: 'Profile', active: false }
]

interface PatientFindDoctorsProps {
  onLogout: () => void
  onNavigate: (page: string) => void
}

export default function PatientFindDoctors({ onLogout, onNavigate }: PatientFindDoctorsProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [specialty, setSpecialty] = useState('All Specialties')
  const [availability, setAvailability] = useState('Any Day')

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
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-serif text-[#1a3a5c] mb-2">Specialists in Malaybalay</h1>
          <p className="text-gray-600">Schedule a virtual or physical consultation with top-rated local healthcare providers.</p>
        </header>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[300px] relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Search by name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
              />
            </div>
            
            <div className="relative">
              <select 
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c] bg-white min-w-[140px]"
              >
                <option>All Specialties</option>
                <option>Cardiologist</option>
                <option>Dermatologist</option>
                <option>Pediatrician</option>
                <option>OB-GYN</option>
                <option>Psychiatrist</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            <div className="relative">
              <select 
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c] bg-white min-w-[120px]"
              >
                <option>Any Day</option>
                <option>Today</option>
                <option>Tomorrow</option>
                <option>This Week</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            <button className="flex items-center gap-2 px-4 py-3 bg-[#5a7a8a] text-white rounded-lg hover:bg-[#4a6a7a] transition-colors">
              <span className="text-sm font-medium">Filter</span>
            </button>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-[#1a3a5c]">Available Practitioners</h2>
            <p className="text-sm text-gray-500">Showing 24 results</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      <h3 className="font-semibold text-[#1a3a5c]">{doctor.name}</h3>
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium text-[#1a3a5c]">{doctor.rating}</span>
                      <span className="text-xs text-gray-400">({doctor.reviews})</span>
                    </div>
                    <p className="text-sm text-yellow-600 mb-1">{doctor.specialty}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      {doctor.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Next Available</p>
                    <p className="text-sm font-medium text-[#1a3a5c]">{doctor.available}</p>
                  </div>
                  <button className="px-4 py-2 bg-[#1a3a5c] text-white rounded-lg text-sm font-medium hover:bg-[#14304a] transition-colors">
                    Book Visit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-[#1a3a5c] rounded-xl p-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Need immediate assistance?</h3>
            <p className="text-blue-200 text-sm mb-4">Connect with an on-call General Practitioner in less than 10 minutes for urgent non-emergency consultations.</p>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#5a7a8a] text-white rounded-lg font-medium hover:bg-[#4a6a7a] transition-colors">
              <span>Start Emergency Consult</span>
            </button>
          </div>
          <div className="w-24 h-24 bg-blue-800 rounded-xl flex items-center justify-center">
            <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-3xl">+</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
