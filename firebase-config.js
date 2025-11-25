// Configuration Firebase
// ⚠️ IMPORTANT: Remplacez ces valeurs par celles de votre projet Firebase
// Vous obtiendrez ces valeurs dans la console Firebase (étape 2 du guide)

const firebaseConfig = {
  apiKey: "AIzaSyCF55ufr-zZ3K-b6FlIUAEcjsicbXmNZo8",
  authDomain: "dreba-vtc-niger.firebaseapp.com",
  projectId: "dreba-vtc-niger",
  storageBucket: "dreba-vtc-niger.firebasestorage.app",
  messagingSenderId: "307924459980",
  appId: "1:307924459980:web:025fab54728dfa01e7bd69",
  measurementId: "G-F3ZJFEPZHF"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Initialiser Firestore (base de données)
const db = firebase.firestore();

// Initialiser Auth (authentification)
const auth = firebase.auth();

