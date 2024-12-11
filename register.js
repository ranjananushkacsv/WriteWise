import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCAWY5-6dmMhu_-wnSpTusAkg_ESpebbII",
    authDomain: "write-3e4fd.firebaseapp.com",
    projectId: "write-3e4fd",
    storageBucket: "write-3e4fd.firebasestorage.app",
    messagingSenderId: "1027403213110",
    appId: "1:1027403213110:web:ed4ed395c62ed348462b97"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const createAcctBtn = document.getElementById("create-acct-btn");

createAcctBtn.addEventListener("click", function() {
    const email = document.getElementById("email-signup").value;
    const confirmEmail = document.getElementById("confirm-email-signup").value;
    const password = document.getElementById("password-signup").value;
    const confirmPassword = document.getElementById("confirm-password-signup").value;

    if (email !== confirmEmail) {
        alert("Email fields do not match. Try again.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password fields do not match. Try again.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Success! Account created.");
            // Redirect to the main page
            window.location.href = "index.html"; // Change to your main page URL
        })
        .catch((error) => {
            alert("Error occurred: " + error.message);
        });
});
