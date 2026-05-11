import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
  User,
  UserCredential
} from 'firebase/auth'
import { auth } from './config'

// Sign up new patient
export async function signUpPatient(
  email: string,
  password: string,
  firstName: string,
  lastName: string
): Promise<UserCredential> {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password)
  
  // Update profile with display name
  await updateProfile(userCredential.user, {
    displayName: `${firstName} ${lastName}`
  })
  
  return userCredential
}

// Sign in existing patient
export async function signInPatient(
  email: string,
  password: string
): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password)
}

// Sign out
export async function signOutPatient(): Promise<void> {
  return signOut(auth)
}

// Send password reset email
export async function resetPassword(email: string): Promise<void> {
  return sendPasswordResetEmail(auth, email)
}

// Get current user
export function getCurrentUser(): User | null {
  return auth.currentUser
}

// Listen to auth state changes
export function onAuthStateChange(callback: (user: User | null) => void): () => void {
  return onAuthStateChanged(auth, callback)
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  return auth.currentUser !== null
}
