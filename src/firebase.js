// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_ypw7WHUY6B4bobwa81aSbmIQSXZAeeA",
  authDomain: "daffz-eb0f7.firebaseapp.com",
  projectId: "daffz-eb0f7",
  storageBucket: "daffz-eb0f7.firebasestorage.app",
  messagingSenderId: "1015093711748",
  appId: "1:1015093711748:web:9a37d53e975902c528c3d1",
   measurementId: "G-517BFDWL6J"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
