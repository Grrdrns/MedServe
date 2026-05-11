import { useState } from 'react'
import { 
  Heart, 
  Video, 
  FileText, 
  FlaskConical, 
  Users, 
  Calendar, 
  ChevronRight,
  Menu,
  X,
  Stethoscope,
  Shield,
  Building2
} from 'lucide-react'

interface LandingPageProps {
  onEnterPortal: () => void
}

export default function LandingPage({ onEnterPortal }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const features = [
    {
      icon: Video,
      title: 'Video Consultation',
      description: 'Attend consultations with your doctor face-to-face, no matter where you are.'
    },
    {
      icon: FileText,
      title: 'Digital Prescriptions',
      description: 'Receive digital prescriptions instantly that are accepted by major pharmacies in your city.'
    },
    {
      icon: FlaskConical,
      title: 'Lab Integration',
      description: 'Order diagnostic tests and view results directly in your healthcare dashboard.'
    },
    {
      icon: Shield,
      title: 'Health Records',
      description: 'Your entire medical history, notes, and lab results stored securely in one patient portal.'
    },
    {
      icon: Calendar,
      title: 'Appointment Sync',
      description: 'Automated reminders and easy rescheduling to fit your busy lifestyle.'
    },
    {
      icon: Users,
      title: 'Family Profiles',
      description: 'Manage health consultations for your children and elderly parents under a single account.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900">HealthLink</span>
                <span className="text-xs text-gray-500 -mt-1">Navigating Care</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</a>
              <a href="#doctors" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Find a Doctor</a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
              <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button 
                onClick={onEnterPortal}
                className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Patient Portal
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors">
                Doctor Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-sm text-gray-600 hover:text-gray-900">Services</a>
              <a href="#doctors" className="block text-sm text-gray-600 hover:text-gray-900">Find a Doctor</a>
              <a href="#how-it-works" className="block text-sm text-gray-600 hover:text-gray-900">How It Works</a>
              <a href="#about" className="block text-sm text-gray-600 hover:text-gray-900">About Us</a>
              <hr className="border-gray-100" />
              <button 
                onClick={onEnterPortal}
                className="w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg"
              >
                Patient Portal
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-lg">
                Doctor Login
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-xs font-medium text-blue-900">Official HealthLink Patient Portal</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
                Healthcare that comes to you in the <span className="italic text-blue-900">City in the Sky.</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-lg">
                Connect with the city's top specialists from the comfort of your home. Secure video consultations, digital prescriptions, and lab integrations.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={onEnterPortal}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 font-medium hover:text-gray-900 transition-colors">
                  Watch how it works
                  <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-500">Local Doctors</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">10k+</p>
                  <p className="text-sm text-gray-500">Consultations</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                  <p className="text-sm text-gray-500">Patient Rating</p>
                </div>
              </div>
            </div>

            {/* Right Content - Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="w-32 h-32 text-gray-300" />
                </div>
                {/* Doctor Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Dr. Maria Clara</p>
                      <p className="text-sm text-gray-500">Available for consultation</p>
                    </div>
                    <div className="ml-auto w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">Comprehensive Virtual Care</h2>
            <p className="text-gray-600">Everything you need for a complete medical checkup, virtually.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Ready to experience the future of healthcare?
              </h2>
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
                Join thousands of residents who trust HealthLink for their primary medical needs.
              </p>
              <button 
                onClick={onEnterPortal}
                className="px-8 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Register as Patient
              </button>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-900">HealthLink</span>
              </div>
              <p className="text-sm text-gray-600">
                A dedicated digital health initiative for the people of the City in the Sky.
              </p>
            </div>

            {/* Platform */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Find a Doctor</a></li>
                <li><a href="#" className="hover:text-gray-900">Services</a></li>
                <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">Privacy & Terms</a></li>
                <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-500">
              © 2024 HealthLink. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
