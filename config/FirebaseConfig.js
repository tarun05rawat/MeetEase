// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLC_FIREBASE_API_KEY,
  authDomain: "meetease-fb9b0.firebaseapp.com",
  projectId: "meetease-fb9b0",
  storageBucket: "meetease-fb9b0.firebasestorage.app",
  messagingSenderId: "550747293126",
  appId: "1:550747293126:web:2d371ac1ea654cb46c5ec7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
