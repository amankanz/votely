// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLts_86wfO0RMd4LH4EVuxX2ZgSC5eDGE",
  authDomain: "votely-4822c.firebaseapp.com",
  projectId: "votely-4822c",
  storageBucket: "votely-4822c.firebasestorage.app",
  messagingSenderId: "852328907991",
  appId: "1:852328907991:web:08679e5a2469460e211c92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize  cloud Firestore
export const db = getFirestore(app);
