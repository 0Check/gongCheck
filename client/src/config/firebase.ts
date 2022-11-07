import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGEING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuthService = getAuth(firebaseApp);
export const firebaseDbService = getFirestore();
export const firebaseRealtimeDbService = getDatabase();
