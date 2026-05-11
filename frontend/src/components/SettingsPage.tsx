import { useState } from 'react'

export default function SettingsPage() {
  const [autoRecord, setAutoRecord] = useState(true)
  const [blurBackground, setBlurBackground] = useState(false)
  const [appointmentReminders, setAppointmentReminders] = useState(true)
  const [labResults, setLabResults] = useState(true)

  return (
    <div className="min-h-screen bg-[#f0f7fa]">
      {/* Header */}
      <header className="bg-white px-8 py-6 border-b border-gray-100">
        <h1 className="text-3xl font-serif text-[#1a3a5c]">Sanctuary Settings</h1>
        <p className="text-gray-500 mt-1">Manage your professional profile and digital workspace preferences</p>
      </header>

      <div className="p-8 max-w-5xl">
        {/* Medical Profile */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-[#1a3a5c] rounded"></div>
            <h2 className="text-lg font-semibold text-[#1a3a5c]">Medical Profile</h2>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            {/* Profile Photo */}
            <div className="flex items-start gap-6 mb-6 pb-6 border-b border-gray-100">
              <div className="w-20 h-20 bg-[#1a3a5c] rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                ML
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-[#1a3a5c]">Profile Photo</h3>
                    <p className="text-sm text-gray-500">This will be displayed to patients</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 border border-[#1a3a5c] text-[#1a3a5c] rounded-lg text-sm font-medium hover:bg-[#1a3a5c] hover:text-white transition-colors">
                      Upload New
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1a3a5c] mb-2">Full Name</label>
                <input 
                  type="text" 
                  value="Dr. Maria Lavina"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a3a5c] mb-2">Medical License ID</label>
                <input 
                  type="text" 
                  value="PHC-4523467"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a3a5c] mb-2">Specialization</label>
                <input 
                  type="text" 
                  value="General Internal Medicine"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a3a5c] mb-2">Clinic Location</label>
                <input 
                  type="text" 
                  value="Malaybalay City Health Office"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-[#1a3a5c] mb-2">Professional Bio</label>
              <textarea 
                rows={3}
                value="Dedicated to providing virtual healthcare excellence to the citizens of Malaybalay."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
              />
            </div>
          </div>
        </section>

        {/* Consultation Room */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-[#1a3a5c] rounded"></div>
            <h2 className="text-lg font-semibold text-[#1a3a5c]">Consultation Room</h2>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
            {/* Auto-Record Sessions */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <div>
                <h3 className="font-medium text-[#1a3a5c]">Auto-Record Sessions</h3>
                <p className="text-sm text-gray-500">Securely record video consultations for medical history</p>
              </div>
              <button 
                onClick={() => setAutoRecord(!autoRecord)}
                className={`relative w-14 h-7 rounded-full transition-colors ${autoRecord ? 'bg-[#1a3a5c]' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${autoRecord ? 'translate-x-8' : 'translate-x-1'}`} />
              </button>
            </div>

            {/* Waiting Room Message */}
            <div className="flex items-start justify-between pb-6 border-b border-gray-100">
              <div className="flex-1">
                <h3 className="font-medium text-[#1a3a5c] mb-1">Waiting Room Message</h3>
                <p className="text-sm text-gray-500 mb-3">Greet patients before you connect</p>
                <input 
                  type="text" 
                  value="Welcome to our virtual clinic. Dr. Lavina will be with you shortly."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
                />
              </div>
            </div>

            {/* Blur Background */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-[#1a3a5c]">Blur Background</h3>
                <p className="text-sm text-gray-500">Apply a soft-focus backdrop during consultations</p>
              </div>
              <button 
                onClick={() => setBlurBackground(!blurBackground)}
                className={`relative w-14 h-7 rounded-full transition-colors ${blurBackground ? 'bg-[#1a3a5c]' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${blurBackground ? 'translate-x-8' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        </section>

        {/* Notification Sanctuary */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-[#1a3a5c] rounded"></div>
            <h2 className="text-lg font-semibold text-[#1a3a5c]">Notification Sanctuary</h2>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
            {/* Appointment Reminders */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-100">
              <div>
                <h3 className="font-medium text-[#1a3a5c]">Appointment Reminders</h3>
                <p className="text-sm text-gray-500">Receive alerts 15 minutes prior to scheduled calls</p>
              </div>
              <button 
                onClick={() => setAppointmentReminders(!appointmentReminders)}
                className={`relative w-14 h-7 rounded-full transition-colors ${appointmentReminders ? 'bg-[#1a3a5c]' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${appointmentReminders ? 'translate-x-8' : 'translate-x-1'}`} />
              </button>
            </div>

            {/* Email Lab Results */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-[#1a3a5c]">Email Lab Results</h3>
                <p className="text-sm text-gray-500">Get notified when patients upload new results</p>
              </div>
              <button 
                onClick={() => setLabResults(!labResults)}
                className={`relative w-14 h-7 rounded-full transition-colors ${labResults ? 'bg-[#1a3a5c]' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${labResults ? 'translate-x-8' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        </section>

        {/* Footer Actions */}
        <div className="flex justify-end gap-4 pt-4">
          <button className="px-6 py-3 text-gray-600 font-medium hover:text-gray-800 transition-colors">
            Discard Changes
          </button>
          <button className="px-6 py-3 bg-[#1a3a5c] text-white font-medium rounded-lg hover:bg-[#14304a] transition-colors">
            Save Sanctuary Updates
          </button>
        </div>
      </div>
    </div>
  )
}
