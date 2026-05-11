import { useState } from 'react'
import { Ticket, Stethoscope, ArrowRight, Calendar, X } from 'lucide-react'

export default function HomeDashboard() {
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [inviteCode, setInviteCode] = useState('')

  const handleInviteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Invite code submitted:', inviteCode)
    setShowInviteModal(false)
    setInviteCode('')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white px-8 py-5 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Hi Gerardo!</h1>
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </header>

      <div className="p-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div 
            onClick={() => setShowInviteModal(true)}
            className="bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl p-6 text-white cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group"
          >
            <div className="relative z-10">
              <h2 className="text-xl font-semibold mb-1">Got an Invite Code?</h2>
              <p className="text-lime-100 text-sm">Enter your code manually</p>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 group-hover:scale-110 transition-transform">
                <Ticket className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-xl font-semibold mb-1">Need a Doctor?</h2>
              <p className="text-blue-100 text-sm">Find the right one for you</p>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-gray-600 text-sm font-medium mb-4">Explore</h3>
          <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <span className="text-pink-400 text-xs font-medium uppercase tracking-wide">Follow</span>
                <h4 className="text-lg font-semibold text-gray-800 mt-1">Booking Instructions</h4>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-600">1</span>
                    </div>
                    <span>Search for a doctor or use invite code</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-600">2</span>
                    </div>
                    <span>Select your preferred date and time</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-600">3</span>
                    </div>
                    <span>Confirm your booking details</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-xs font-medium text-blue-600">4</span>
                    </div>
                    <span>Attend virtual consultation</span>
                  </div>
                </div>
              </div>
              <div className="ml-6">
                <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-pink-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showInviteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Enter Invite Code</h3>
              <button 
                onClick={() => setShowInviteModal(false)}
                className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleInviteSubmit}>
              <input
                type="text"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                placeholder="Enter your 6-digit code"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent text-center text-lg tracking-widest font-mono mb-4"
                maxLength={6}
              />
              <button
                type="submit"
                className="w-full bg-lime-500 hover:bg-lime-600 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Submit Code
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
