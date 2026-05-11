# BukMD - Patient Portal

A modern doctor booking system patient dashboard built with React, TypeScript, and Tailwind CSS.

## Features

- **Home Dashboard**: Welcome screen with quick actions
  - Invite Code entry for direct doctor connections
  - Find a Doctor search functionality
  - Booking Instructions guide
- **Sidebar Navigation**: Home, Doctors, Services, Files, Messages
- **Modern UI**: Clean design with smooth animations

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons
- Firebase (Firestore + Auth)

## Getting Started

```bash
# Install all dependencies (root + frontend + backend)
npm run install:all

# Start frontend development server
npm run dev

# Or start frontend from its folder
cd frontend && npm run dev

# Build frontend for production
npm run build

# Backend development (if using Firebase emulators)
cd backend && npm run serve
```

### Development Workflows

**Frontend only:**
```bash
cd frontend
npm install
npm run dev
```

**Backend only:**
```bash
cd backend
npm install
npm run build
```

## Project Structure (Separated Frontend/Backend)

```
BukMD/
├── frontend/                    # React Web App (Client)
│   ├── src/
│   │   ├── components/          # UI Components
│   │   │   ├── Sidebar.tsx
│   │   │   └── HomeDashboard.tsx
│   │   ├── hooks/               # React Hooks
│   │   │   ├── useAuth.ts
│   │   │   └── useFirestore.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── index.html
│
├── backend/                     # Firebase Backend (Server)
│   ├── firebase/                # Firebase config & services
│   │   ├── config.ts            # Firebase initialization
│   │   ├── types.ts             # TypeScript interfaces
│   │   ├── db.ts                # Database operations
│   │   ├── auth.ts              # Authentication
│   │   ├── services.ts          # Business logic
│   │   └── index.ts             # Exports
│   ├── functions/               # Cloud Functions (serverless)
│   ├── api/                     # REST API endpoints
│   └── package.json
│
├── package.json                 # Root workspace manager
├── .env.example                 # Environment template
└── README.md
```

## Firebase Setup

This project uses Firebase for backend services:

1. **Firestore Database**: Stores doctors, patients, appointments, consultations, medical records
2. **Firebase Auth**: Handles patient authentication

See `FIREBASE_SETUP.md` for detailed setup instructions.

### Quick Start

```bash
# 1. Copy environment variables to frontend
copy .env.example frontend\.env

# 2. Fill in your Firebase credentials in frontend/.env
#    VITE_FIREBASE_API_KEY=your-api-key
#    VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
#    etc...

# 3. Install all dependencies
npm run install:all

# 4. Start development
npm run dev
```

**Frontend imports from Backend using `@backend/` alias:**
```typescript
// In frontend/src/hooks/useAuth.ts
import { signInPatient } from '@backend/firebase/auth'

// In frontend/src/hooks/useFirestore.ts
import { collections } from '@backend/firebase/db'
```

## Screenshots

The home dashboard includes:
- Green "Got an Invite Code?" card for entering doctor invitation codes
- Blue "Need a Doctor?" card for finding healthcare providers
- Booking Instructions section with step-by-step guide
