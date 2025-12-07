// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBwqwoNH1her5aqm9598BXs1FKpvHcC6E"
  authDomain: "docfusionbackend.firebaseapp.com",
  projectId: "docfusionbackend",
  storageBucket: "docfusionbackend.firebasestorage.app",
  messagingSenderId: "905176858568",
  appId: "1:905176858568:web:3a726e219366f4493d0afd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
