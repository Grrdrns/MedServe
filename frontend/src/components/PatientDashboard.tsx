import { useState } from 'react'
import { 
  LayoutDashboard, 
  Calendar, 
  Stethoscope, 
  FileText, 
  CreditCard,
  Plus,
  Search,
  Pill,
  FlaskConical,
  Video,
  ChevronRight,
  Download,
  Activity,
  LogOut
} from 'lucide-react'

interface Appointment {
  id: number
  day: string
  month: string
  date: string
  doctor: string
  specialty: string
  time: string
  status: 'Today' | 'Confirmed' | 'Pending'
}

const appointments: Appointment[] = [
  {
    id: 1,
    day: '24',
    month: 'OCT',
    date: 'Oct 24',
    doctor: 'Dr. Sarah Lavina',
    specialty: 'General Physician',
    time: '02:00 PM',
    status: 'Today'
  },
  {
    id: 2,
    day: '28',
    month: 'OCT',
    date: 'Oct 28',
    doctor: 'Dr. Mark Belderol',
    specialty: 'Cardiologist',
    time: '10:30 AM',
    status: 'Confirmed'
  },
  {
    id: 3,
    day: '02',
    month: 'NOV',
    date: 'Nov 02',
    doctor: 'Dr. Elena Cruz',
    specialty: 'Dermatologist',
    time: '04:15 PM',
    status: 'Pending'
  }
]

const recentActivity = [
  { type: 'Prescription Updated', time: '2 days ago', doctor: 'Dr. Lavina', icon: Pill },
  { type: 'Lab Results Released', time: '1 week ago', doctor: 'CBC Panel', icon: FlaskConical }
]

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: Calendar, label: 'Appointments', active: false },
  { icon: Stethoscope, label: 'Find Doctors', active: false },
  { icon: FileText, label: 'Medical History', active: false },
  { icon: CreditCard, label: 'Billing', active: false }
]

interface PatientDashboardProps {
  onLogout: () => void
}

export default function PatientDashboard({ onLogout }: PatientDashboardProps) {
  const [patientName] = useState('Alex')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Today':
        return 'bg-blue-100 text-blue-800'
      case 'Confirmed':
        return 'bg-green-100 text-green-800'
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-[#f0f7fa] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <h1 className="text-xl font-bold text-[#1a3a5c]">HealthLink</h1>
          <p className="text-xs text-gray-500">Malaybalay City</p>
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
          <div className="flex items-center gap-3 p-3 bg-[#f0f7fa] rounded-xl mb-2">
            <div className="w-10 h-10 bg-[#1a3a5c] rounded-full flex items-center justify-center text-white font-medium">
              AR
            </div>
            <div>
              <p className="text-sm font-medium text-[#1a3a5c]">Alex Rivera</p>
              <p className="text-xs text-gray-500">PID: 8821</p>
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
            <h1 className="text-4xl font-serif text-[#1a3a5c] mb-2">
              Welcome back, {patientName}
            </h1>
            <p className="text-gray-600">
              You have a consultation scheduled for today at 2:00 PM.
            </p>
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
            <p className="text-sm text-gray-600 mb-4">
              Browse certified doctors in Malaybalay by specialty.
            </p>
            <button className="flex items-center gap-1 text-[#1a3a5c] font-medium hover:underline">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Pill className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a3a5c] mb-2">Digital Pharmacy</h3>
            <p className="text-sm text-gray-600 mb-4">
              View your active prescriptions and order refills.
            </p>
            <button className="flex items-center gap-1 text-[#1a3a5c] font-medium hover:underline">
              <ChevronRight className="w-4 h-4" />
              View Rx
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
              <FlaskConical className="w-6 h-6 text-yellow-700" />
            </div>
            <h3 className="text-lg font-semibold text-[#1a3a5c] mb-2">Lab Results</h3>
            <p className="text-sm text-gray-600 mb-4">
              Access and download your recent diagnostic reports.
            </p>
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
              <button className="text-sm text-[#1a3a5c] hover:underline">See All</button>
            </div>

            <div className="bg-white rounded-xl shadow-sm">
              {appointments.map((apt, index) => (
                <div 
                  key={apt.id} 
                  className={`flex items-center gap-4 p-4 ${index !== appointments.length - 1 ? 'border-b border-gray-100' : ''}`}
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
                    <Activity className="w-4 h-4" />
                    {apt.time}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(apt.status)}`}>
                    {apt.status}
                  </span>
                  {apt.status === 'Today' && (
                    <button className="flex items-center gap-1 px-4 py-2 border border-[#1a3a5c] text-[#1a3a5c] rounded-lg text-sm font-medium hover:bg-[#1a3a5c] hover:text-white transition-colors">
                      <Video className="w-4 h-4" />
                      Join Room
                    </button>
                  )}
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
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <activity.icon className="w-4 h-4 text-[#1a3a5c]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#1a3a5c]">{activity.type}</p>
                        <p className="text-xs text-gray-500">{activity.time} • {activity.doctor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 border border-[#1a3a5c] text-[#1a3a5c] rounded-lg font-medium hover:bg-[#1a3a5c] hover:text-white transition-colors">
                <Download className="w-4 h-4" />
                Download Health Summary
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
