// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4MtlNufwVI5zGtyHQJHPSw8Y9ucM76NQ",
  authDomain: "movie-review-b20f0.firebaseapp.com",
  projectId: "movie-review-b20f0",
  storageBucket: "movie-review-b20f0.appspot.com",
  messagingSenderId: "139183913479",
  appId: "1:139183913479:web:1fcc1f8a120bfa327748a2",
  measurementId: "G-YFH6WVXPB2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
