// Patient Profile Page
import { useState } from 'react'
import { 
  LayoutDashboard, 
  Stethoscope, 
  Calendar,
  FileText,
  User,
  LogOut,
  Building2,
  Settings,
  Heart,
  Activity,
  MapPin,
  CheckCircle,
  Star,
  Download,
  ChevronRight,
  Beaker,
  FileArchive,
  Phone,
  Bell,
  Shield,
  LogOut as SignOutIcon,
  Monitor,
  Smartphone,
  Save,
  CreditCard,
  Wallet,
  Clock,
  Video
} from 'lucide-react'

interface Medication {
  id: number
  type: string
  title: string
  doctor: string
  date: string
  dosage?: string
}

interface Consultation {
  id: number
  type: string
  title: string
  doctor: string
  date: string
  notes: string
}

interface LabResult {
  id: number
  name: string
  type: string
  status: string
  date: string
}

const currentMedications: Medication[] = [
  {
    id: 1,
    type: 'Prescription',
    title: 'General Wellness Checkup',
    doctor: 'Dr. Elena Santos',
    date: 'Oct 15, 2023',
    dosage: '1x Daily, After Meals'
  },
  {
    id: 2,
    type: 'Prescription',
    title: 'General Wellness Checkup',
    doctor: 'Dr. Elena Santos',
    date: 'Oct 15, 2023',
    dosage: 'As needed for pain'
  }
]

const consultations: Consultation[] = [
  {
    id: 1,
    type: 'CONSULTATION',
    title: 'General Checkup',
    doctor: 'Dr. Elena Santos',
    date: 'Oct 15, 2023',
    notes: 'Patient reported mild fatigue. Blood pressure elevated. Continue current dosage of Metformin. Schedule follow-up in 3 months.'
  },
  {
    id: 2,
    type: 'LAB TEST',
    title: 'Pulmonary Evaluation',
    doctor: 'Dr. Sarah Lavina',
    date: 'Sep 28, 2023',
    notes: 'Lung function tests completed. Advised to avoid allergen triggers including dust and pollens.'
  }
]

const labResults: LabResult[] = [
  {
    id: 1,
    name: 'Complete Blood Count (CBC)',
    type: 'Hematology',
    status: 'View Results',
    date: 'Oct 15, 2023'
  },
  {
    id: 2,
    name: 'Fasting Blood Sugar (HbA1c)',
    type: 'Biochemistry',
    status: 'View Results',
    date: 'Oct 15, 2023'
  },
  {
    id: 3,
    name: 'Lipid Profile',
    type: 'Biochemistry',
    status: 'View Results',
    date: 'Oct 15, 2023'
  }
]

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: false },
  { icon: Stethoscope, label: 'Find Doctors', active: false },
  { icon: Calendar, label: 'My Appointments', active: false },
  { icon: FileText, label: 'Prescriptions', active: false },
  { icon: User, label: 'Profile', active: true }
]

interface PatientProfileProps {
  onLogout: () => void
  onNavigate: (page: string) => void
}

export default function PatientProfile({ onLogout, onNavigate }: PatientProfileProps) {
  const [activeTab, setActiveTab] = useState<'medical' | 'security' | 'billing'>('medical')
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)
  const [biometricEnabled, setBiometricEnabled] = useState(true)
  const [emergencyData, setEmergencyData] = useState(true)
  const [researchConsent, setResearchConsent] = useState(false)
  const [pharmacyAccess, setPharmacyAccess] = useState(false)

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
        {/* Top Navigation Tabs */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setActiveTab('medical')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'medical' 
                  ? 'bg-white text-gray-700 shadow-sm' 
                  : 'text-gray-500 hover:bg-white hover:shadow-sm'
              }`}
            >
              Full Medical Record
            </button>
            <button 
              onClick={() => setActiveTab('security')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'security' 
                  ? 'bg-white text-gray-700 shadow-sm' 
                  : 'text-gray-500 hover:bg-white hover:shadow-sm'
              }`}
            >
              Security
            </button>
            <button 
              onClick={() => setActiveTab('billing')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'billing' 
                  ? 'bg-white text-gray-700 shadow-sm' 
                  : 'text-gray-500 hover:bg-white hover:shadow-sm'
              }`}
            >
              Billing
            </button>
          </div>
          <button className="p-2 text-gray-500 hover:bg-white hover:shadow-sm rounded-lg transition-all">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {activeTab === 'medical' && (
          <>
        {/* Profile Header */}
        <header className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#1a3a5c] rounded-full flex items-center justify-center text-white text-2xl font-bold">
              JD
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1a3a5c] mb-1">Juan Dela Cruz</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <MapPin className="w-4 h-4" />
                Malaybalay City, Bukidnon
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                  <CheckCircle className="w-3 h-3" />
                  Verified Patient
                </span>
                <span className="flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-medium">
                  <Star className="w-3 h-3" />
                  Premium
                </span>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Download className="w-4 h-4" />
            Download Record
          </button>
        </header>

       

        {/* Health Conditions & Allergies */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="font-medium text-[#1a3a5c]">Health Conditions</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Hypertension</span>
                <span className="text-xs text-gray-400">Active</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <Activity className="w-4 h-4 text-red-500" />
              </div>
              <h3 className="font-medium text-[#1a3a5c]">Allergies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Pollen</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Penicillin</span>
            </div>
          </div>
        </div>

        {/* Medical History & Current Medications */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-medium text-[#1a3a5c] mb-4">Medical History</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Surgical History</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Appendectomy (2015) - Dr. Elena Santos, General Hospital</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Chronic Conditions</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">Family History</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-medium text-[#1a3a5c] mb-4">Current Medications</h3>
            <div className="space-y-3">
              {currentMedications.map((med) => (
                <div key={med.id} className="border border-gray-100 rounded-lg p-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">{med.type}</span>
                  <h4 className="font-medium text-[#1a3a5c] mt-2">{med.title}</h4>
                  <p className="text-sm text-gray-500 mb-2">{med.doctor}</p>
                  <p className="text-xs text-gray-400 mb-2">{med.date}</p>
                  <p className="text-xs text-gray-500">{med.dosage}</p>
                  <button className="flex items-center gap-1 text-sm text-[#1a3a5c] font-medium mt-2 hover:underline">
                    <FileArchive className="w-3 h-3" />
                    Open Vault
                  </button>
                </div>
              ))}
              <button className="w-full py-2 text-center text-sm text-gray-500 hover:text-[#1a3a5c]">
                + 2 Refillable Items
              </button>
            </div>
          </div>
        </div>

        {/* Recent Consultations & Notes */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-lg font-medium text-[#1a3a5c] mb-4">Recent Consultations & Notes</h2>
          <div className="space-y-4">
            {consultations.map((consult) => (
              <div key={consult.id} className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">{consult.type}</span>
                  <span className="text-xs text-gray-400">{consult.date}</span>
                </div>
                <h4 className="font-medium text-[#1a3a5c] mb-1">{consult.title}</h4>
                <p className="text-sm text-gray-500 mb-2">{consult.doctor}</p>
                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg mb-3">{consult.notes}</p>
                <button className="flex items-center gap-1 text-sm text-[#1a3a5c] font-medium hover:underline">
                  <FileArchive className="w-3 h-3" />
                  Open Vault
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Laboratory Results */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-[#1a3a5c]">Laboratory Results</h2>
            <button className="text-sm text-[#1a3a5c] hover:underline">View All History</button>
          </div>
          <div className="space-y-3">
            {labResults.map((lab) => (
              <div key={lab.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Beaker className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1a3a5c]">{lab.name}</p>
                    <p className="text-xs text-gray-500">{lab.type}</p>
                  </div>
                </div>
                <button className="text-sm text-[#1a3a5c] hover:underline">
                  {lab.status}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gray-100 rounded-xl p-5 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-medium text-[#1a3a5c]">Emergency Contact</h3>
                <p className="text-sm text-gray-500">Maria Dela Cruz (Wife) • +63 912 345 6789</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600">
              Call Now
            </button>
          </div>
        </div>

        {/* Account Management */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-medium text-[#1a3a5c] mb-4">Account Management</h2>
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700">Notification Settings</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700">Data Privacy & HIPAA</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors text-red-600">
              <div className="flex items-center gap-3">
                <SignOutIcon className="w-5 h-5" />
                <span className="text-sm">Sign Out</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
          </>
        )}

        {activeTab === 'security' && (
          <>
            {/* Security Settings Header */}
            <header className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-4xl font-serif text-[#1a3a5c] mb-2">Security Settings</h1>
                <p className="text-gray-600">Manage your account security and authentication methods</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#1a3a5c] text-white rounded-lg text-sm font-medium hover:bg-[#14304a]">
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </header>

            {/* Password & Authentication */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h2 className="text-lg font-medium text-[#1a3a5c] mb-4">Password & Authentication</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                  <div>
                    <p className="font-medium text-[#1a3a5c]">Change Password</p>
                    <p className="text-xs text-gray-500">Last changed 2 months ago</p>
                  </div>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
                    Update
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                  <div>
                    <p className="font-medium text-[#1a3a5c]">Two-Factor Authentication</p>
                    <p className="text-xs text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Enabled</span>
                    <button 
                      onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                      className={`w-12 h-6 rounded-full transition-colors ${twoFactorEnabled ? 'bg-[#1a3a5c]' : 'bg-gray-300'}`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'}`}></div>
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                  <div>
                    <p className="font-medium text-[#1a3a5c]">Biometric Login</p>
                    <p className="text-xs text-gray-500">Use FaceID or Fingerprint on mobile devices</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Enabled</span>
                    <button 
                      onClick={() => setBiometricEnabled(!biometricEnabled)}
                      className={`w-12 h-6 rounded-full transition-colors ${biometricEnabled ? 'bg-[#1a3a5c]' : 'bg-gray-300'}`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${biometricEnabled ? 'translate-x-6' : 'translate-x-1'}`}></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Activity */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h2 className="text-lg font-medium text-[#1a3a5c] mb-4">Login Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Monitor className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1a3a5c]">Chrome on Windows • Malaybalay City</p>
                      <p className="text-xs text-gray-500">Current Session • IP: 110.54.xxx.xxx</p>
                    </div>
                  </div>
                  <button className="text-xs text-[#1a3a5c] hover:underline">Logout</button>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1a3a5c]">iPhone 13 • Valencia City</p>
                      <p className="text-xs text-gray-500">2 days ago • IP: 110.54.xxx.xxx</p>
                    </div>
                  </div>
                  <button className="text-xs text-[#1a3a5c] hover:underline">Logout</button>
                </div>
              </div>
            </div>

            {/* Data Privacy */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h2 className="text-lg font-medium text-[#1a3a5c] mb-4">Data Privacy</h2>
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={emergencyData}
                    onChange={() => setEmergencyData(!emergencyData)}
                    className="mt-1 w-4 h-4 text-[#1a3a5c] rounded"
                  />
                  <div>
                    <p className="font-medium text-[#1a3a5c]">Share medical data with emergency responders</p>
                    <p className="text-xs text-gray-500">Allow first responders to view your medical info in emergencies</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={researchConsent}
                    onChange={() => setResearchConsent(!researchConsent)}
                    className="mt-1 w-4 h-4 text-[#1a3a5c] rounded"
                  />
                  <div>
                    <p className="font-medium text-[#1a3a5c]">Anonymized Research Participation</p>
                    <p className="text-xs text-gray-500">Help local health research in Malaybalay City</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={pharmacyAccess}
                    onChange={() => setPharmacyAccess(!pharmacyAccess)}
                    className="mt-1 w-4 h-4 text-[#1a3a5c] rounded"
                  />
                  <div>
                    <p className="font-medium text-[#1a3a5c]">Third-party Pharmacy Access</p>
                    <p className="text-xs text-gray-500">Allow pharmacies to verify your digital prescriptions</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="bg-gray-100 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1a3a5c]">Manage Consent</h3>
                    <p className="text-sm text-gray-500">Control how your data is shared with partners</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600">
                  Download
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === 'billing' && (
          <>
            {/* Billing Header */}
            <header className="flex items-start justify-between mb-8">
              <div>
                <h1 className="text-4xl font-serif text-[#1a3a5c] mb-2">Billing & Invoices</h1>
                <p className="text-gray-600">Manage your payments, insurance, and medical billing history</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#1a3a5c] text-white rounded-lg text-sm font-medium hover:bg-[#14304a]">
                <CreditCard className="w-4 h-4" />
                Add Payment Method
              </button>
            </header>

            {/* Balance & Insurance Cards */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Wallet className="w-4 h-4 text-[#1a3a5c]" />
                  <span className="text-sm font-medium text-[#1a3a5c]">Current Balance</span>
                </div>
                <p className="text-3xl font-bold text-[#1a3a5c] mb-2">₱ 1,250.00</p>
                <p className="text-xs text-yellow-600">Due by Oct 24, 2023</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-[#1a3a5c]">Insurance Status</span>
                </div>
                <p className="text-2xl font-bold text-[#1a3a5c] mb-2">PhilHealth Active</p>
                <p className="text-xs text-gray-500">Coverage: 80% on Outpatient</p>
              </div>
            </div>

            {/* Saved Payment Methods */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h2 className="text-lg font-medium text-[#1a3a5c] mb-4">Saved Payment Methods</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Wallet className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1a3a5c]">GCash • **** 8821</p>
                      <p className="text-xs text-gray-500">Primary Payment Method</p>
                    </div>
                  </div>
                  <button className="text-xs text-[#1a3a5c] hover:underline">Remove</button>
                </div>
                <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1a3a5c]">Visa Card • **** 4492</p>
                      <p className="text-xs text-gray-500">Expires 12/25</p>
                    </div>
                  </div>
                  <button className="text-xs text-[#1a3a5c] hover:underline">Remove</button>
                </div>
              </div>
            </div>

            {/* Recent Invoices */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-[#1a3a5c]">Recent Invoices</h2>
                <button className="text-sm text-[#1a3a5c] hover:underline">View All</button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#f0f7fa] rounded-xl flex flex-col items-center justify-center">
                      <span className="text-[10px] font-medium text-gray-500">INV-0002</span>
                      <span className="text-lg font-bold text-[#1a3a5c]">INV-9902</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a3a5c]">Dr. Maria Santos</p>
                      <p className="text-xs text-yellow-600">General Physician</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    Oct 12, 2023
                  </div>
                  <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">paid</span>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#1a3a5c] text-[#1a3a5c] rounded-lg text-sm font-medium hover:bg-[#1a3a5c] hover:text-white transition-colors">
                    <Video className="w-4 h-4" />
                    Join Room
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#f0f7fa] rounded-xl flex flex-col items-center justify-center">
                      <span className="text-[10px] font-medium text-gray-500">INV-0845</span>
                      <span className="text-lg font-bold text-[#1a3a5c]">INV-9845</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a3a5c]">Malaybalay Medical Center</p>
                      <p className="text-xs text-yellow-600">Laboratory - Blood Test</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    Oct 05, 2023
                  </div>
                  <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">paid</span>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#1a3a5c] text-[#1a3a5c] rounded-lg text-sm font-medium hover:bg-[#1a3a5c] hover:text-white transition-colors">
                    <Video className="w-4 h-4" />
                    Join Room
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#f0f7fa] rounded-xl flex flex-col items-center justify-center">
                      <span className="text-[10px] font-medium text-gray-500">INV-0712</span>
                      <span className="text-lg font-bold text-[#1a3a5c]">INV-9712</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a3a5c]">Dr. Ricardo Gomez</p>
                      <p className="text-xs text-yellow-600">Cardiologist</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    Sep 28, 2023
                  </div>
                  <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">paid</span>
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#1a3a5c] text-[#1a3a5c] rounded-lg text-sm font-medium hover:bg-[#1a3a5c] hover:text-white transition-colors">
                    <Video className="w-4 h-4" />
                    Join Room
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
