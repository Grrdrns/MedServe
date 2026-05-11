import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  Timestamp
} from 'firebase/firestore'
import { db } from './config'
import type { Doctor, Appointment, Consultation, InviteCode, Patient, MedicalRecord, Message } from './types'

// Doctor services
export async function getAllDoctors(): Promise<Doctor[]> {
  const doctorsRef = collection(db, 'doctors')
  const snapshot = await getDocs(doctorsRef)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Doctor)
}

export async function getDoctorsBySpecialty(specialty: string): Promise<Doctor[]> {
  const doctorsRef = collection(db, 'doctors')
  const q = query(doctorsRef, where('specialty', '==', specialty))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Doctor)
}

export async function getDoctorById(doctorId: string): Promise<Doctor | null> {
  const doctorRef = doc(db, 'doctors', doctorId)
  const snapshot = await getDoc(doctorRef)
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() } as Doctor
  }
  return null
}

// Appointment services
export async function getPatientAppointments(patientId: string): Promise<Appointment[]> {
  const appointmentsRef = collection(db, 'appointments')
  const q = query(appointmentsRef, where('patientId', '==', patientId))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }) as Appointment)
}

export async function getUpcomingAppointments(patientId: string): Promise<Appointment[]> {
  const appointmentsRef = collection(db, 'appointments')
  const now = Timestamp.now()
  const q = query(
    appointmentsRef,
    where('patientId', '==', patientId),
    where('appointmentDate', '>=', now),
    where('status', 'in', ['pending', 'confirmed'])
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }) as Appointment)
}

// Consultation services
export async function getPatientConsultations(patientId: string): Promise<Consultation[]> {
  const consultationsRef = collection(db, 'consultations')
  const q = query(consultationsRef, where('patientId', '==', patientId))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }) as Consultation)
}

export async function getOngoingConsultations(patientId: string): Promise<Consultation[]> {
  const consultationsRef = collection(db, 'consultations')
  const q = query(
    consultationsRef,
    where('patientId', '==', patientId),
    where('status', 'in', ['upcoming', 'ongoing'])
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }) as Consultation)
}

// Invite code validation
export async function validateInviteCode(code: string): Promise<InviteCode | null> {
  const codesRef = collection(db, 'inviteCodes')
  const q = query(codesRef, where('code', '==', code), where('isUsed', '==', false))
  const snapshot = await getDocs(q)
  
  if (!snapshot.empty) {
    const inviteCode = snapshot.docs[0]
    const data = inviteCode.data() as InviteCode
    
    // Check if expired
    if (data.expiresAt.toMillis() < Timestamp.now().toMillis()) {
      return null
    }
    
    return { id: inviteCode.id, ...data }
  }
  return null
}

// Medical records
export async function getPatientMedicalRecords(patientId: string): Promise<MedicalRecord[]> {
  const recordsRef = collection(db, 'medicalRecords')
  const q = query(recordsRef, where('patientId', '==', patientId))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }) as MedicalRecord)
}

export async function getMedicalRecordsByType(
  patientId: string,
  type: MedicalRecord['type']
): Promise<MedicalRecord[]> {
  const recordsRef = collection(db, 'medicalRecords')
  const q = query(
    recordsRef,
    where('patientId', '==', patientId),
    where('type', '==', type)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }) as MedicalRecord)
}

// Messages
export async function getPatientMessages(patientId: string): Promise<Message[]> {
  const messagesRef = collection(db, 'messages')
  const q = query(
    messagesRef,
    where('receiverId', '==', patientId)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }) as Message)
}

export async function getConversationMessages(
  patientId: string,
  doctorId: string
): Promise<Message[]> {
  const messagesRef = collection(db, 'messages')
  const q = query(
    messagesRef,
    where('senderId', 'in', [patientId, doctorId]),
    where('receiverId', 'in', [patientId, doctorId])
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }) as Message)
}

// Patient profile
export async function getPatientProfile(patientId: string): Promise<Patient | null> {
  const patientRef = doc(db, 'patients', patientId)
  const snapshot = await getDoc(patientRef)
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() } as Patient
  }
  return null
}
