import { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, Shield, Video, FileText, HelpCircle } from 'lucide-react'

interface LoginPageProps {
  onLogin: () => void
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [activeTab, setActiveTab] = useState<'patient' | 'provider'>('patient')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#f0f7fa] flex-col justify-between p-12">
        <div>
          <h1 className="text-4xl font-serif text-[#1a3a5c] mb-2">Malaybalay</h1>
          <p className="text-gray-600">HealthLink Sanctuary</p>
          <div className="w-16 h-0.5 bg-[#1a3a5c] mt-4"></div>
        </div>

        <div className="max-w-md">
          <h2 className="text-3xl font-serif text-[#1a3a5c] mb-4">
            A bridge to better care.
          </h2>
          <p className="text-gray-600 mb-8">
            Providing the citizens of Malaybalay with seamless access to healthcare professionals through imperial technology and compassionate design.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-[#1a3a5c]" />
              </div>
              <div>
                <h4 className="font-medium text-[#1a3a5c]">Secure Records</h4>
                <p className="text-sm text-gray-500">Your medical history is encrypted and private.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Video className="w-5 h-5 text-[#1a3a5c]" />
              </div>
              <div>
                <h4 className="font-medium text-[#1a3a5c]">Virtual Clinic</h4>
                <p className="text-sm text-gray-500">Consult with top doctors from your own home.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-[#1a3a5c]" />
              </div>
              <div>
                <h4 className="font-medium text-[#1a3a5c]">Digital Prescriptions</h4>
                <p className="text-sm text-gray-500">Instant access to your medical notes and orders.</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">© 2024 Malaybalay City Health Office</p>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#f0f7fa] rounded-full p-1 flex">
              <button
                onClick={() => setActiveTab('patient')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'patient'
                    ? 'bg-white text-[#1a3a5c] shadow-sm'
                    : 'text-gray-600 hover:text-[#1a3a5c]'
                }`}
              >
                Patient Portal
              </button>
              <button
                onClick={() => setActiveTab('provider')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'provider'
                    ? 'bg-white text-[#1a3a5c] shadow-sm'
                    : 'text-gray-600 hover:text-[#1a3a5c]'
                }`}
              >
                Healthcare Provider
              </button>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-[#1a3a5c] mb-2">Welcome Back</h2>
            <p className="text-gray-500">
              Please enter your credentials to access your sanctuary.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. juandelacruz@email.com"
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button type="button" className="text-sm text-[#1a3a5c] hover:underline">
                Forgot Password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-[#1a3a5c] text-white font-medium rounded-lg hover:bg-[#14304a] transition-colors"
            >
              Sign In to Sanctuary
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            {/* Sign Up */}
            <p className="text-center text-sm text-gray-600">
              New to HealthLink?{' '}
              <button type="button" className="text-[#1a3a5c] font-medium hover:underline">
                Create an Account
              </button>
            </p>

            {/* Support */}
            <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
              <HelpCircle className="w-4 h-4" />
              Need assistance?{' '}
              <button type="button" className="text-[#1a3a5c] hover:underline">
                Contact support
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
