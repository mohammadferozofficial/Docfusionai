import { auth, googleProvider } from "./firebase.js";

/* UI Elements */
const loginBtn = document.getElementById("login-btn");
const googleBtn = document.getElementById("google-btn");
const signupLink = document.getElementById("signup-link");
const logoutBtn = document.getElementById("logout-btn");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

console.log("Auth Loaded 🔥");

/* LOGIN */
if (loginBtn) loginBtn.onclick = async () => {
    try {
        await signInWithEmailAndPassword(auth, emailField.value, passwordField.value);
        navigate("dashboard");
        showModal("Success", "Welcome back!");
    } catch (error) {
        showModal("Login Failed", error.message);
    }
};

/* SIGNUP */
if (signupLink) signupLink.onclick = async () => {
    try {
        await createUserWithEmailAndPassword(auth, emailField.value, passwordField.value);
        showModal("Account Created!", "Please login now.");
    } catch (error) {
        showModal("Signup Failed", error.message);
    }
};

/* GOOGLE LOGIN */
if (googleBtn) googleBtn.onclick = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
        navigate("dashboard");
    } catch (e) {
        showModal("Google Login Failed", e.message);
    }
};

/* LOGOUT */
if (logoutBtn) logoutBtn.onclick = () => signOut(auth);

/* AUTO REDIRECT */
onAuthStateChanged(auth, user => {
    if (user) {
        document.getElementById("auth-button").innerHTML = "Dashboard";
        if (currentPage === "auth") navigate("dashboard");
    } else {
        document.getElementById("auth-button").innerHTML = "Login";
        if (currentPage === "dashboard") navigate("auth");
    }
});
