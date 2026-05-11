import { useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar, Settings, Clock, Check, X } from 'lucide-react'

interface PendingRequest {
  id: number
  initials: string
  name: string
  type: string
  date: string
  time: string
}

const pendingRequests: PendingRequest[] = [
  {
    id: 1,
    initials: 'RJ',
    name: 'Robert Jimenez',
    type: 'Follow-up',
    date: 'Tomorrow',
    time: '10:00 AM'
  },
  {
    id: 2,
    initials: 'ES',
    name: 'Elena Soriano',
    type: 'New Consultation',
    date: 'Monday',
    time: '03:30 PM'
  },
  {
    id: 3,
    initials: 'KT',
    name: 'Kevin Tan',
    type: 'Lab Review',
    date: 'Tuesday',
    time: '09:15 AM'
  }
]

export default function ScheduleManager() {
  const [currentMonth] = useState('October 2023')

  const calendarDays = [
    { day: 25, month: 'prev' },
    { day: 26, month: 'prev' },
    { day: 27, month: 'prev' },
    { day: 28, month: 'prev' },
    { day: 29, month: 'prev' },
    { day: 30, month: 'prev' },
    { day: 1, hasAppointment: true, time: '09:00 AM' },
    { day: 2 },
    { day: 3 },
    { day: 4, hasAppointment: true, time: '10:30 AM' },
    { day: 5 },
    { day: 6, hasAppointment: true, time: '02:00 PM', isToday: true },
    { day: 7 },
    { day: 8 },
  ]

  return (
    <div className="min-h-screen bg-[#f0f7fa]">
      {/* Header */}
      <header className="bg-[#f0f7fa] px-8 py-8 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-serif text-[#1a3a5c] mb-2">Schedule Manager</h1>
          <p className="text-gray-600">Manage your clinical availability and pending consultations</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#1a3a5c] text-[#1a3a5c] rounded-lg hover:bg-[#1a3a5c] hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
            Availability Settings
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#5a7a8a] text-white rounded-lg hover:bg-[#4a6a7a] transition-colors">
            <Clock className="w-4 h-4" />
            Block Time
          </button>
        </div>
      </header>

      <div className="px-8 pb-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-[#1a3a5c]">{currentMonth}</h2>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
                {/* Weekday Headers */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="bg-gray-50 p-3 text-center text-sm font-medium text-gray-600">
                    {day}
                  </div>
                ))}
                
                {/* Calendar Days */}
                {calendarDays.map((day, index) => (
                  <div 
                    key={index}
                    className={`bg-white p-3 min-h-[80px] ${day.month === 'prev' ? 'text-gray-400' : 'text-gray-800'} ${day.isToday ? 'bg-blue-50' : ''}`}
                  >
                    <div className="text-sm mb-1">{day.day}</div>
                    {day.hasAppointment && (
                      <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {day.time}
                      </div>
                    )}
                    {day.isToday && (
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Load */}
            <div className="bg-[#1a3a5c] rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Today&apos;s Load</h3>
                <Calendar className="w-5 h-5" />
              </div>
              <p className="text-3xl font-bold mb-2">8 Consultations</p>
              <div className="w-full bg-blue-800 rounded-full h-2 mb-2">
                <div className="bg-blue-400 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-sm text-blue-200">60% of daily capacity reached</p>
            </div>

            {/* Pending Requests */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#1a3a5c]">Pending Requests</h3>
                <div className="w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </div>
              </div>

              <div className="space-y-4">
                {pendingRequests.map((request) => (
                  <div key={request.id} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-[#1a3a5c] font-medium text-sm">
                        {request.initials}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1a3a5c]">{request.name}</h4>
                        <p className="text-sm text-gray-500">{request.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-sm text-yellow-600">{request.date}, {request.time}</span>
                      <div className="flex gap-2">
                        <button className="p-1 text-red-500 hover:bg-red-50 rounded">
                          <X className="w-5 h-5" />
                        </button>
                        <button className="p-1 text-green-500 hover:bg-green-50 rounded">
                          <Check className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-3 text-[#1a3a5c] font-medium hover:underline">
                View All Requests
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
