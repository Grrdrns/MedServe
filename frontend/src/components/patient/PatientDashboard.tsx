import { useState } from 'react'
import { 
  LayoutDashboard, 
  Stethoscope, 
  Calendar,
  FileText,
  User,
  Plus,
  Search,
  Pill,
  FlaskConical,
  ChevronRight,
  Clock,
  Video,
  LogOut,
  Building2
} from 'lucide-react'

interface Appointment {
  id: number
  day: string
  month: string
  doctor: string
  specialty: string
  time: string
  status: 'Confirmed' | 'Pending'
}

const upcomingAppointments: Appointment[] = [
  {
    id: 1,
    day: '24',
    month: 'Oct',
    doctor: 'Dr. Elena Santos',
    specialty: 'Pediatrician',
    time: '02:00 PM',
    status: 'Confirmed'
  }
]

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Stethoscope, label: 'Find Doctors', active: false },
  { icon: Calendar, label: 'My Appointments', active: false },
  { icon: FileText, label: 'Prescriptions', active: false },
  { icon: User, label: 'Profile', active: false }
]

interface PatientDashboardProps {
  onLogout: () => void
  onNavigate: (page: string) => void
}

export default function PatientDashboard({ onLogout, onNavigate }: PatientDashboardProps) {
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
        <header className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-4xl font-serif text-[#1a3a5c] mb-2">Welcome back, Alex</h1>
            <p className="text-gray-600">You have a consultation scheduled for today at 2:00 PM.</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#1a3a5c] text-white font-medium rounded-lg hover:bg-[#14304a] transition-colors">
            <Plus className="w-4 h-4" />
            Book New Appointment
          </button>
        </header>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Stethoscope className="w-6 h-6 text-[#1a3a5c]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a3a5c] mb-2">Find a Specialist</h3>
            <p className="text-sm text-gray-600 mb-4">Browse certified doctors in Malaybalay by specialty.</p>
            <button 
              onClick={() => onNavigate('find-doctors')}
              className="flex items-center gap-1 text-[#1a3a5c] font-medium hover:underline"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Pill className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a3a5c] mb-2">Digital Pharmacy</h3>
            <p className="text-sm text-gray-600 mb-4">View your active prescriptions and order refills.</p>
            <button 
              onClick={() => onNavigate('prescriptions')}
              className="flex items-center gap-1 text-[#1a3a5c] font-medium hover:underline"
            >
              <ChevronRight className="w-4 h-4" />
              View Rx
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
              <FlaskConical className="w-6 h-6 text-yellow-700" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a3a5c] mb-2">Lab Results</h3>
            <p className="text-sm text-gray-600 mb-4">Access and download your recent diagnostic reports.</p>
            <button className="flex items-center gap-1 text-[#1a3a5c] font-medium hover:underline">
              <ChevronRight className="w-4 h-4" />
              Reports
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upcoming Appointments */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-serif text-[#1a3a5c]">Upcoming Appointments</h2>
              <button 
                onClick={() => onNavigate('my-appointments')}
                className="text-sm text-[#1a3a5c] hover:underline"
              >
                See All
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm">
              {upcomingAppointments.map((apt, index) => (
                <div 
                  key={apt.id} 
                  className={`flex items-center gap-4 p-4 ${index !== upcomingAppointments.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="w-14 h-14 bg-[#f0f7fa] rounded-xl flex flex-col items-center justify-center">
                    <span className="text-xs font-medium text-gray-500">{apt.month}</span>
                    <span className="text-xl font-bold text-[#1a3a5c]">{apt.day}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#1a3a5c]">{apt.doctor}</h4>
                    <p className="text-sm text-yellow-600">{apt.specialty}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    {apt.time}
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {apt.status}
                  </span>
                  <button className="flex items-center gap-1 px-4 py-2 border border-[#1a3a5c] text-[#1a3a5c] rounded-lg text-sm font-medium hover:bg-[#1a3a5c] hover:text-white transition-colors">
                    <Video className="w-4 h-4" />
                    Join Room
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Health Snapshot */}
          <div>
            <h2 className="text-xl font-serif text-[#1a3a5c] mb-4">Health Snapshot</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Blood Pressure</p>
                  <p className="text-2xl font-bold text-[#1a3a5c]">120/80</p>
                  <p className="text-xs text-green-600">Normal</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Heart Rate</p>
                  <p className="text-2xl font-bold text-[#1a3a5c]">72 bpm</p>
                  <p className="text-xs text-green-600">Stable</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-medium text-[#1a3a5c] mb-3">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Pill className="w-4 h-4 text-[#1a3a5c]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1a3a5c]">Prescription Updated</p>
                      <p className="text-xs text-gray-500">2 days ago • Dr. Lavina</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FlaskConical className="w-4 h-4 text-[#1a3a5c]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1a3a5c]">Lab Results Released</p>
                      <p className="text-xs text-gray-500">1 week ago • CBC Panel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
