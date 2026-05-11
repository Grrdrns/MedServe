import { useState, useEffect, useCallback } from 'react'
import type { DocumentData } from 'firebase/firestore'
import { collections, createDocument, getDocument, getAllDocuments, updateDocument, deleteDocument, queryDocuments } from '@backend/firebase/db'

// Generic hook for fetching a single document
export function useDocument<T>(collectionName: string, docId: string | null) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!docId) {
      setLoading(false)
      return
    }

    const fetchDocument = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await getDocument<T>(collectionName, docId)
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch document')
      } finally {
        setLoading(false)
      }
    }

    fetchDocument()
  }, [collectionName, docId])

  return { data, loading, error }
}

// Hook for fetching all doctors
export function useDoctors() {
  const [doctors, setDoctors] = useState<unknown[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await getAllDocuments(collections.doctors)
        setDoctors(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch doctors')
      } finally {
        setLoading(false)
      }
    }

    fetchDoctors()
  }, [])

  return { doctors, loading, error }
}

// Hook for fetching patient appointments
export function useAppointments(patientId: string) {
  const [appointments, setAppointments] = useState<unknown[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!patientId) {
      setLoading(false)
      return
    }

    const fetchAppointments = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await queryDocuments(
          collections.appointments,
          'patientId',
          '==',
          patientId
        )
        setAppointments(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch appointments')
      } finally {
        setLoading(false)
      }
    }

    fetchAppointments()
  }, [patientId])

  return { appointments, loading, error }
}

// Hook for CRUD operations
export function useCollection(collectionName: keyof typeof collections) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const add = useCallback(async <T extends DocumentData>(data: T) => {
    try {
      setLoading(true)
      setError(null)
      const id = await createDocument(collections[collectionName], data)
      return id
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create document')
      throw err
    } finally {
      setLoading(false)
    }
  }, [collectionName])

  const update = useCallback(async (docId: string, data: Partial<DocumentData>) => {
    try {
      setLoading(true)
      setError(null)
      await updateDocument(collectionName, docId, data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update document')
      throw err
    } finally {
      setLoading(false)
    }
  }, [collectionName])

  const remove = useCallback(async (docId: string) => {
    try {
      setLoading(true)
      setError(null)
      await deleteDocument(collectionName, docId)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete document')
      throw err
    } finally {
      setLoading(false)
    }
  }, [collectionName])

  return { add, update, remove, loading, error }
}
