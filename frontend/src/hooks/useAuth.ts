import { useState, useEffect, useCallback } from 'react'
import type { User } from 'firebase/auth'
import { onAuthStateChange, signInPatient, signUpPatient, signOutPatient, resetPassword } from '@backend/firebase/auth'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChange((user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      setError(null)
      const result = await signInPatient(email, password)
      return result
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in')
      throw err
    }
  }, [])

  const signUp = useCallback(async (email: string, password: string, firstName: string, lastName: string) => {
    try {
      setError(null)
      const result = await signUpPatient(email, password, firstName, lastName)
      return result
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign up')
      throw err
    }
  }, [])

  const signOut = useCallback(async () => {
    try {
      setError(null)
      await signOutPatient()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign out')
      throw err
    }
  }, [])

  const forgotPassword = useCallback(async (email: string) => {
    try {
      setError(null)
      await resetPassword(email)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send reset email')
      throw err
    }
  }, [])

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    signIn,
    signUp,
    signOut,
    forgotPassword
  }
}
