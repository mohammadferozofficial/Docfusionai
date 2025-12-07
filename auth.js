// ---- Firebase Auth Integration ----
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    GoogleAuthProvider, 
    signInWithPopup, 
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// ---- Firebase Config from .env (replace with actual until we load dynamic later) ----
const firebaseConfig = {
  apiKey: import.meta?.env?.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: import.meta?.env?.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_DOMAIN",
  projectId: import.meta?.env?.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT",
};

// ---- Initialize Firebase ----
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ---- Elements ----
const loginBtn = document.getElementById("login-btn");
const googleBtn = document.getElementById("google-btn");
const signupLink = document.getElementById("signup-link");
const logoutBtn = document.getElementById("logout-btn");

const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

// ---- Login with Email ----
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    try {
      await signInWithEmailAndPassword(auth, emailField.value, passwordField.value);
      window.location.href = "/dashboard.html";
    } catch (error) {
      alert(error.message);
    }
  });
}

// ---- Signup ----
if (signupLink) {
  signupLink.addEventListener("click", async () => {
    try {
      await createUserWithEmailAndPassword(auth, emailField.value, passwordField.value);
      alert("Account Created! You can login now.");
    } catch (error) {
      alert(error.message);
    }
  });
}

// ---- Google Login ----
if (googleBtn) {
  googleBtn.addEventListener("click", async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "/dashboard.html";
    } catch (error) {
      alert(error.message);
    }
  });
}

// ---- Logout ----
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "/login.html";
  });
}

// ---- Auto Redirect ----
onAuthStateChanged(auth, (user) => {
  const path = window.location.pathname;

  // If user is logged in and tries to open login page → redirect to dashboard
  if (user && path.includes("login")) {
    window.location.href = "/dashboard.html";
  }

  // If user is NOT logged in and opens dashboard → send to login
  if (!user && path.includes("dashboard")) {
    window.location.href = "/login.html";
  }
});
