# Firebase Setup Guide for BukMD

## Overview
Firebase is now integrated into your BukMD patient portal. Here's what's set up:

- **Firestore Database**: NoSQL database for storing patients, doctors, appointments, etc.
- **Firebase Auth**: User authentication with email/password
- **React Hooks**: `useAuth` and `useFirestore` for easy integration

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Name your project (e.g., "bukmd-patient-portal")
4. Enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Register Your Web App

1. In your Firebase project, click the web icon (</>) to add a web app
2. Give it a nickname (e.g., "BukMD Web")
3. Click "Register app"
4. Copy the Firebase configuration object

## Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   copy .env.example .env
   ```

2. Fill in your Firebase credentials from Step 2:
   ```
   VITE_FIREBASE_API_KEY=your-actual-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=your-app-id
   ```

## Step 4: Enable Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location closest to your users
5. Click "Enable"

## Step 5: Enable Authentication

1. Go to "Authentication" in Firebase Console
2. Click "Get started"
3. Enable "Email/Password" provider
4. Click "Save"

## Database Structure

Your Firestore collections:

```
doctors/
  - {doctorId}
    - firstName: string
    - lastName: string
    - email: string
    - specialty: string
    - licenseNumber: string
    - availableDays: string[]
    - consultationFee: number

patients/
  - {patientId}
    - firstName: string
    - lastName: string
    - email: string
    - phone: string
    - dateOfBirth: string
    - bloodType: string
    - allergies: string[]

appointments/
  - {appointmentId}
    - patientId: string
    - doctorId: string
    - appointmentDate: timestamp
    - status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
    - type: 'virtual' | 'in-person'
    - reason: string

consultations/
  - {consultationId}
    - patientId: string
    - doctorId: string
    - scheduledDate: timestamp
    - status: 'upcoming' | 'ongoing' | 'completed'
    - meetingLink: string

inviteCodes/
  - {codeId}
    - code: string (6-digit)
    - doctorId: string
    - isUsed: boolean
    - expiresAt: timestamp

medicalRecords/
  - {recordId}
    - patientId: string
    - type: 'prescription' | 'lab-test' | 'diagnosis'
    - title: string
    - date: timestamp

messages/
  - {messageId}
    - senderId: string
    - receiverId: string
    - content: string
    - timestamp: timestamp
    - isRead: boolean
```

## Usage Examples

### Using Authentication

```tsx
import { useAuth } from './hooks/useAuth'

function LoginComponent() {
  const { user, signIn, signUp, signOut, isAuthenticated } = useAuth()

  const handleLogin = async (email: string, password: string) => {
    await signIn(email, password)
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.displayName}</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={() => handleLogin('user@email.com', 'password')}>
          Sign In
        </button>
      )}
    </div>
  )
}
```

### Fetching Doctors

```tsx
import { useDoctors } from './hooks/useFirestore'

function DoctorsList() {
  const { doctors, loading, error } = useDoctors()

  if (loading) return <p>Loading doctors...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <ul>
      {doctors.map(doctor => (
        <li key={doctor.id}>
          Dr. {doctor.firstName} {doctor.lastName} - {doctor.specialty}
        </li>
      ))}
    </ul>
  )
}
```

### Creating an Appointment

```tsx
import { useCollection } from './hooks/useFirestore'
import { Timestamp } from 'firebase/firestore'

function BookAppointment() {
  const { add, loading } = useCollection('appointments')

  const handleBook = async () => {
    await add({
      patientId: 'patient-id',
      doctorId: 'doctor-id',
      patientName: 'John Doe',
      doctorName: 'Dr. Jane Smith',
      doctorSpecialty: 'Cardiology',
      appointmentDate: Timestamp.fromDate(new Date('2024-12-25')),
      status: 'pending',
      type: 'virtual',
      reason: 'Annual checkup'
    })
  }

  return (
    <button onClick={handleBook} disabled={loading}>
      Book Appointment
    </button>
  )
}
```

### Validating Invite Codes

```tsx
import { validateInviteCode } from './firebase/services'

async function handleInviteCode(code: string) {
  const invite = await validateInviteCode(code)
  if (invite) {
    console.log('Valid invite from Dr.', invite.doctorName)
    // Proceed with booking
  } else {
    console.log('Invalid or expired code')
  }
}
```

## Security Rules

For production, update your Firestore security rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow users to read their own data
    match /patients/{patientId} {
      allow read, write: if request.auth != null && request.auth.uid == patientId;
    }
    
    // Allow reading doctor profiles
    match /doctors/{doctorId} {
      allow read: if request.auth != null;
      allow write: if false; // Only admins can write
    }
    
    // Allow patients to create and read their appointments
    match /appointments/{appointmentId} {
      allow read: if request.auth != null && 
        (request.auth.uid == resource.data.patientId || request.auth.uid == resource.data.doctorId);
      allow create: if request.auth != null && request.auth.uid == request.resource.data.patientId;
      allow update, delete: if request.auth != null && request.auth.uid == resource.data.patientId;
    }
  }
}
```

## Files Added

- `@c:\BukMD\src\firebase\config.ts` - Firebase initialization
- `@c:\BukMD\src\firebase\types.ts` - TypeScript interfaces for data models
- `@c:\BukMD\src\firebase\db.ts` - Generic CRUD operations
- `@c:\BukMD\src\firebase\auth.ts` - Authentication functions
- `@c:\BukMD\src\firebase\services.ts` - Specific service functions
- `@c:\BukMD\src\firebase\index.ts` - Centralized exports
- `@c:\BukMD\src\hooks\useAuth.ts` - React auth hook
- `@c:\BukMD\src\hooks\useFirestore.ts` - React Firestore hooks
- `@c:\BukMD\.env.example` - Environment variables template

## Next Steps

1. Set up your Firebase project
2. Add your credentials to `.env`
3. Enable Firestore and Authentication
4. Start building your features!

For help, check the [Firebase documentation](https://firebase.google.com/docs).
