npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF55ufr-zZ3K-b6FlIUAEcjsicbXmNZo8",
  authDomain: "dreba-vtc-niger.firebaseapp.com",
  projectId: "dreba-vtc-niger",
  storageBucket: "dreba-vtc-niger.firebasestorage.app",
  messagingSenderId: "307924459980",
  appId: "1:307924459980:web:025fab54728dfa01e7bd69",
  measurementId: "G-F3ZJFEPZHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);