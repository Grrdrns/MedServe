import { useState } from 'react'
import { Search, Filter, MapPin, Star, ChevronDown } from 'lucide-react'

interface Doctor {
  id: number
  name: string
  specialty: string
  rating: number
  location: string
  image: string
  nextAvailable: string
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Elena Santos',
    specialty: 'Pediatrician',
    rating: 4.9,
    location: 'Malaybalay Med Center',
    image: 'ES',
    nextAvailable: 'Today, 2:00 PM'
  },
  {
    id: 2,
    name: 'Dr. Marcus Rivera',
    specialty: 'Cardiologist',
    rating: 4.8,
    location: 'Polymedic Sampong',
    image: 'MR',
    nextAvailable: 'Tomorrow, 9:00 AM'
  },
  {
    id: 3,
    name: 'Dr. Sarah Lavina',
    specialty: 'Dermatologist',
    rating: 5.0,
    location: 'Skin Sanctuary',
    image: 'SL',
    nextAvailable: 'Oct 24, 10:30 AM'
  },
  {
    id: 4,
    name: 'Dr. Roberto Chen',
    specialty: 'General Physician',
    rating: 4.7,
    location: 'City Health Office',
    image: 'RC',
    nextAvailable: 'Today, 4:30 PM'
  },
  {
    id: 5,
    name: 'Dr. Angela Torres',
    specialty: 'OB-GYN',
    rating: 4.9,
    location: 'Torres Maternity',
    image: 'AT',
    nextAvailable: 'Oct 25, 1:00 PM'
  },
  {
    id: 6,
    name: 'Dr. Kevin Varga',
    specialty: 'Psychiatrist',
    rating: 4.6,
    location: 'Mind Care Malaybalay',
    image: 'KV',
    nextAvailable: 'Next Week'
  }
]

export default function FindDoctorsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [specialty, setSpecialty] = useState('All Specialties')
  const [availability, setAvailability] = useState('Any Day')

  return (
    <div className="min-h-screen bg-[#f0f7fa]">
      {/* Header */}
      <header className="bg-[#f0f7fa] px-8 py-8">
        <h1 className="text-4xl font-serif text-[#1a3a5c] mb-2">Specialists in Malaybalay</h1>
        <p className="text-gray-600">Schedule a virtual or physical consultation with top-rated local healthcare providers.</p>
      </header>

      <div className="px-8 pb-8">
        {/* Search Bar */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
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
                className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c] bg-white"
              >
                <option>All Specialties</option>
                <option>Pediatrician</option>
                <option>Cardiologist</option>
                <option>Dermatologist</option>
                <option>General Physician</option>
                <option>OB-GYN</option>
                <option>Psychiatrist</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            <div className="relative">
              <select 
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c] bg-white"
              >
                <option>Any Day</option>
                <option>Today</option>
                <option>Tomorrow</option>
                <option>This Week</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            <button className="flex items-center gap-2 px-6 py-3 bg-[#5a7a8a] text-white rounded-lg hover:bg-[#4a6a7a] transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[#1a3a5c]">Available Practitioners</h2>
          <span className="text-gray-500">Showing 24 results</span>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={`https://placehold.co/64x64/1a3a5c/white?text=${doctor.image}`}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-1">
                    <h3 className="font-semibold text-[#1a3a5c]">{doctor.name}</h3>
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-gray-600">{doctor.rating}</span>
                  </div>
                  <p className="text-sm text-[#1a3a5c] mb-1">{doctor.specialty}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="w-3 h-3" />
                    {doctor.location}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Next Available</p>
                    <p className="text-sm font-medium text-[#1a3a5c]">{doctor.nextAvailable}</p>
                  </div>
                  <button className="px-4 py-2 bg-[#1a3a5c] text-white text-sm font-medium rounded-lg hover:bg-[#14304a] transition-colors">
                    Book Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency CTA */}
        <div className="bg-[#1a3a5c] rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-lg">
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
              Need immediate assistance?
            </h2>
            <p className="text-blue-200 mb-6">
              Connect with an on-call General Practitioner in less than 10 minutes for urgent non-emergency consultations.
            </p>
            <button className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-[#5a7a8a] text-white font-medium rounded-lg hover:bg-[#4a6a7a] transition-colors">
              <span className="text-lg">⚡</span>
              Start Emergency Consult
            </button>
          </div>
          <div className="absolute right-8 bottom-8 w-32 h-32 bg-[#5a7a8a] rounded-2xl flex items-center justify-center opacity-50">
            <span className="text-6xl">🏥</span>
          </div>
        </div>
      </div>
    </div>
  )
}
