import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { 
    getAuth, 
    GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { 
    getFirestore 
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

/* ✅ Your real Firebase Config (working in browser) */
const firebaseConfig = {
  apiKey: "AIzaSyDBwqwoNH1her5aqm9598BXs1FKpvHcC6E",
  authDomain: "docfusionbackend.firebaseapp.com",
  projectId: "docfusionbackend",
  storageBucket: "docfusionbackend.firebasestorage.app",
  messagingSenderId: "905176858568",
  appId: "1:905176858568:web:3a726e219366f4493d0afd",
};

/* Initialize Firebase */
const app = initializeApp(firebaseConfig);

/* Export services */
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
