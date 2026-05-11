import { Timestamp } from 'firebase/firestore'

// Patient data model
export interface Patient {
  id?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: 'male' | 'female' | 'other'
  address?: string
  bloodType?: string
  allergies?: string[]
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

// Doctor data model
export interface Doctor {
  id?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  specialty: string
  licenseNumber: string
  bio?: string
  qualifications?: string[]
  availableDays?: string[]
  availableTimeStart?: string
  availableTimeEnd?: string
  consultationFee?: number
  isOnline?: boolean
  rating?: number
  totalReviews?: number
  profileImage?: string
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

// Appointment data model
export interface Appointment {
  id?: string
  patientId: string
  doctorId: string
  patientName: string
  doctorName: string
  doctorSpecialty: string
  appointmentDate: Timestamp
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  type: 'virtual' | 'in-person'
  reason?: string
  notes?: string
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

// Consultation data model (for ongoing/upcoming consultations)
export interface Consultation {
  id?: string
  patientId: string
  doctorId: string
  patientName: string
  doctorName: string
  doctorSpecialty: string
  scheduledDate: Timestamp
  status: 'upcoming' | 'ongoing' | 'completed'
  type: 'virtual' | 'in-person'
  meetingLink?: string
  notes?: string
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

// Prescription data model
export interface Prescription {
  id?: string
  patientId: string
  doctorId: string
  doctorName: string
  medications: Medication[]
  instructions: string
  issueDate: Timestamp
  expiryDate?: Timestamp
  status: 'active' | 'completed' | 'cancelled'
  createdAt?: Timestamp
}

export interface Medication {
  name: string
  dosage: string
  frequency: string
  duration: string
  instructions?: string
}

// Medical Record/File data model
export interface MedicalRecord {
  id?: string
  patientId: string
  doctorId?: string
  doctorName?: string
  type: 'prescription' | 'lab-test' | 'diagnosis' | 'other'
  title: string
  description?: string
  fileUrl?: string
  date: Timestamp
  createdAt?: Timestamp
}

// Message data model
export interface Message {
  id?: string
  senderId: string
  receiverId: string
  senderName: string
  content: string
  timestamp: Timestamp
  isRead: boolean
  attachmentUrl?: string
  createdAt?: Timestamp
}

// Invite Code data model
export interface InviteCode {
  id?: string
  code: string
  doctorId: string
  doctorName: string
  patientEmail?: string
  isUsed: boolean
  expiresAt: Timestamp
  createdAt?: Timestamp
}

// Service/Lab Test data model
export interface Service {
  id?: string
  name: string
  description: string
  category: 'lab-test' | 'imaging' | 'checkup' | 'vaccination' | 'other'
  price: number
  providerId: string
  providerName: string
  duration?: string
  requirements?: string
  isAvailable: boolean
  createdAt?: Timestamp
}
