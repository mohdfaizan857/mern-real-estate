// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6da05.firebaseapp.com",
  projectId: "mern-estate-6da05",
  storageBucket: "mern-estate-6da05.appspot.com",
  messagingSenderId: "644466217778",
  appId: "1:644466217778:web:8209f49c3ad57068fcfd2b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
