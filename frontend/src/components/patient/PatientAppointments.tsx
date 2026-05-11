// Patient Appointments Page
import { 
  LayoutDashboard, 
  Stethoscope, 
  Calendar,
  FileText,
  User,
  Plus,
  Clock,
  Video,
  FileArchive,
  LogOut,
  ChevronRight,
  Building2,
  MapPin
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

interface MedicalRecord {
  id: number
  type: string
  title: string
  doctor: string
  date: string
  files: string
}

const appointments: Appointment[] = [
  {
    id: 1,
    day: '24',
    month: 'OCT',
    doctor: 'Dr. Elena Santos',
    specialty: 'Pediatrician',
    time: '02:00 PM',
    status: 'Confirmed'
  },
  {
    id: 2,
    day: '26',
    month: 'OCT',
    doctor: 'Dr. Marcus Rivera',
    specialty: 'Cardiologist',
    time: '09:00 AM',
    status: 'Pending'
  },
  {
    id: 3,
    day: '02',
    month: 'OCT',
    doctor: 'Dr. Sarah Lavina',
    specialty: 'Dermatologist',
    time: '10:30 AM',
    status: 'Confirmed'
  }
]

const medicalRecords: MedicalRecord[] = [
  {
    id: 1,
    type: 'consultation',
    title: 'General Wellness Checkup',
    doctor: 'Dr. Roberto Chen',
    date: 'Oct 15, 2023',
    files: '2 Files'
  },
  {
    id: 2,
    type: 'lab_result',
    title: 'General Wellness Checkup',
    doctor: 'Dr. Malaybalay Med Center',
    date: 'Oct 12, 2023',
    files: '1 PDF File'
  }
]

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: false },
  { icon: Stethoscope, label: 'Find Doctors', active: false },
  { icon: Calendar, label: 'My Appointments', active: true },
  { icon: FileText, label: 'Prescriptions', active: false },
  { icon: User, label: 'Profile', active: false }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Confirmed':
      return 'bg-green-100 text-green-700 border-green-200'
    case 'Pending':
      return 'bg-yellow-100 text-yellow-700 border-yellow-200'
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200'
  }
}

interface PatientAppointmentsProps {
  onLogout: () => void
  onNavigate: (page: string) => void
}

export default function PatientAppointments({ onLogout, onNavigate }: PatientAppointmentsProps) {
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
            <h1 className="text-4xl font-serif text-[#1a3a5c] mb-2">My Appointments</h1>
            <p className="text-gray-600">Manage your upcoming consultations and review your medical history in Malaybalay City.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
            <MapPin className="w-4 h-4 text-[#1a3a5c]" />
            <span className="text-sm text-[#1a3a5c]">Malaybalay, Bukidnon</span>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-10 h-10 bg-[#1a3a5c] rounded-lg flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[#1a3a5c]">03</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Upcoming</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <FileArchive className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[#1a3a5c]">12</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Completed</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[#1a3a5c]">02</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Pending Labs</p>
          </div>
        </div>

        {/* Upcoming Consultations */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-[#1a3a5c]">Upcoming Consultations</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-[#1a3a5c] hover:bg-gray-50">
              <Plus className="w-4 h-4" />
              Schedule New
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            {appointments.map((apt, index) => (
              <div 
                key={apt.id} 
                className={`flex items-center gap-6 p-4 ${index !== appointments.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded mb-1">{apt.month}</span>
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
                <span className={`px-4 py-1 rounded-full text-sm font-medium border ${getStatusColor(apt.status)}`}>
                  {apt.status}
                </span>
                <button className="flex items-center gap-2 px-4 py-2 border border-[#1a3a5c] text-[#1a3a5c] rounded-lg text-sm font-medium hover:bg-[#1a3a5c] hover:text-white transition-colors">
                  <Video className="w-4 h-4" />
                  Join Room
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Medical Records */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-[#1a3a5c] mb-4">Recent Medical Records</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {medicalRecords.map((record) => (
              <div key={record.id} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    record.type === 'consultation' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {record.type === 'consultation' ? 'consultation' : 'lab_result'}
                  </span>
                  <span className="text-xs text-gray-500">{record.date}</span>
                </div>
                <h3 className="font-semibold text-[#1a3a5c] mb-1">{record.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{record.doctor}</p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FileArchive className="w-4 h-4" />
                    {record.files}
                  </div>
                  <button className="flex items-center gap-1 text-sm text-[#1a3a5c] font-medium hover:underline">
                    Open Vault
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div className="bg-[#1a3a5c] rounded-xl p-6 flex items-center justify-between overflow-hidden">
          <div className="max-w-md">
            <h3 className="text-xl font-semibold text-white mb-2">Need to see a doctor now?</h3>
            <p className="text-blue-200 text-sm mb-4">Skip the queue. Connect with an on-call Malaybalay physician for urgent virtual consultations.</p>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#5a7a8a] text-white rounded-lg font-medium hover:bg-[#4a6a7a] transition-colors">
              <Video className="w-4 h-4" />
              Start Virtual Consultation
            </button>
          </div>
          <div className="relative">
            <div className="w-32 h-24 bg-blue-800/50 rounded-xl flex items-center justify-center">
              {/* Phone/Device illustration */}
              <div className="relative">
                <div className="w-16 h-20 bg-blue-600 rounded-2xl border-2 border-blue-400 flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-1 bg-blue-400 rounded-full"></div>
                  <div className="w-10 h-1 bg-blue-400 rounded-full"></div>
                  <div className="w-10 h-1 bg-blue-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-blue-300 rounded-full mt-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
