// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBiZYshQlWcTEzKgyTAIKvK_rcxLODttLY",
  authDomain: "urology-landing-page-sheet.firebaseapp.com",
  projectId: "urology-landing-page-sheet",
  storageBucket: "urology-landing-page-sheet.appspot.com", // fixed typo here
  messagingSenderId: "986556930908",
  appId: "1:986556930908:web:3f491d173a570a6daf3f99",
  measurementId: "G-59FVBP00QH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Firestore DB
export const db = getFirestore(app);
