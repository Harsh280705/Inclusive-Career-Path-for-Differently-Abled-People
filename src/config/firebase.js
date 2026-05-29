// src/config/firebase.js
// Firebase configuration for modular SDK (v9+)

// Note: For production, use environment variables via a build tool like Vite
// For development with http-server, credentials are stored in .env.local (git-ignored)
export const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY_HERE",
  authDomain: "YOUR_FIREBASE_AUTH_DOMAIN_HERE",
  projectId: "YOUR_FIREBASE_PROJECT_ID_HERE",
  storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET_HERE",
  messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID_HERE",
  appId: "YOUR_FIREBASE_APP_ID_HERE",
  measurementId: "YOUR_FIREBASE_MEASUREMENT_ID_HERE"
};

let app = null;
let auth = null;
let db = null;

async function ensureInitialized() {
  if (app) return { app, auth, db };

  // ✅ Import only needed modular functions
  const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
  const { getAuth, setPersistence, browserSessionPersistence } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
  const { getFirestore } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');

  // ✅ Initialize app
  app = initializeApp(firebaseConfig);

  // ✅ Get auth and set persistence
  auth = getAuth(app);
  await setPersistence(auth, browserSessionPersistence);

  // ✅ Get Firestore
  db = getFirestore(app);

  return { app, auth, db };
}

export async function initializeFirebase() {
  return await ensureInitialized();
}

export async function getAuthInstance() {
  const { auth: authInstance } = await ensureInitialized();
  return authInstance;
}

export async function getDbInstance() {
  const { db: dbInstance } = await ensureInitialized();
  return dbInstance;
}