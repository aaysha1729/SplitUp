// Firebase core and services
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPopup, signInWithPhoneNumber } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr4KkLLdbFEmudqiAr_ekfxUf5eOh79iM",
  authDomain: "splitup-fe0fd.firebaseapp.com",
  projectId: "splitup-fe0fd",
  storageBucket: "splitup-fe0fd.firebasestorage.app",
  messagingSenderId: "218973980527",
  appId: "1:218973980527:web:6d8b58758e95520984ca9a",
  measurementId: "G-P1RX86GDJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Providers
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, googleProvider, RecaptchaVerifier, signInWithPopup, signInWithPhoneNumber }; 