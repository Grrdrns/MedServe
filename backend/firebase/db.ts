import type { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore'
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp
} from 'firebase/firestore'
import { db } from './config'

// Generic type for Firestore documents
export interface FirestoreDocument {
  id?: string
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

// Collection references
export const collections = {
  patients: collection(db, 'patients'),
  doctors: collection(db, 'doctors'),
  appointments: collection(db, 'appointments'),
  consultations: collection(db, 'consultations'),
  prescriptions: collection(db, 'prescriptions'),
  medicalRecords: collection(db, 'medicalRecords'),
  messages: collection(db, 'messages'),
  inviteCodes: collection(db, 'inviteCodes')
}

// Generic CRUD operations
export async function createDocument<T extends DocumentData>(
  collectionRef: typeof collections.patients,
  data: T
): Promise<string> {
  const docRef = await addDoc(collectionRef, {
    ...data,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  })
  return docRef.id
}

export async function getDocument<T>(
  collectionName: string,
  docId: string
): Promise<T | null> {
  const docRef = doc(db, collectionName, docId)
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as T
  }
  return null
}

export async function getAllDocuments<T>(
  collectionRef: typeof collections.patients
): Promise<T[]> {
  const snapshot = await getDocs(collectionRef)
  return snapshot.docs.map((d: QueryDocumentSnapshot<DocumentData>) => ({ id: d.id, ...d.data() }) as T)
}

export async function updateDocument(
  collectionName: string,
  docId: string,
  data: Partial<DocumentData>
): Promise<void> {
  const docRef = doc(db, collectionName, docId)
  await updateDoc(docRef, {
    ...data,
    updatedAt: Timestamp.now()
  })
}

export async function deleteDocument(
  collectionName: string,
  docId: string
): Promise<void> {
  const docRef = doc(db, collectionName, docId)
  await deleteDoc(docRef)
}

// Query helpers
export async function queryDocuments<T>(
  collectionRef: typeof collections.patients,
  field: string,
  operator: '==' | '>' | '<' | '>=' | '<=',
  value: unknown
): Promise<T[]> {
  const q = query(collectionRef, where(field, operator, value))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d: QueryDocumentSnapshot<DocumentData>) => ({ id: d.id, ...d.data() }) as T)
}

export async function queryDocumentsOrdered<T>(
  collectionRef: typeof collections.patients,
  orderByField: string,
  direction: 'asc' | 'desc' = 'desc'
): Promise<T[]> {
  const q = query(collectionRef, orderBy(orderByField, direction))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((d: QueryDocumentSnapshot<DocumentData>) => ({ id: d.id, ...d.data() }) as T)
}
