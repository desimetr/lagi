<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC2J-gVUKeZ8VYi5thJQ6Dzo35JKWNNQb0",
    authDomain: "languini-1fa45.firebaseapp.com",
    projectId: "languini-1fa45",
    storageBucket: "languini-1fa45.appspot.com",
    messagingSenderId: "126920440176",
    appId: "1:126920440176:web:2b197dcd93c5752fa577b5",
    measurementId: "G-76LM99MDN5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user.sendEmailVerification();
        })
        .then(() => {
            alert('Verification email sent! Please check your inbox.');
            window.location.href = 'profile-setup.html';  // Redirect to profile setup page
        })
        .catch((error) => {
            alert(error.message);
        });
});
