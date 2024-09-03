// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEuESYyNR5TfChCSV6PWj8f46FzNXlhx0",
  authDomain: "langini.firebaseapp.com",
  projectId: "langini",
  storageBucket: "langini.appspot.com",
  messagingSenderId: "725648160835",
  appId: "1:725648160835:web:29266df7e89fa7e670fcf6",
  measurementId: "G-LJ1MF9C2P2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
