// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH71jEMp4Z7eC4wbX8E9aHffVbhX3Xefw",
  authDomain: "bigbrain-fc032.firebaseapp.com",
  projectId: "bigbrain-fc032",
  storageBucket: "bigbrain-fc032.appspot.com",
  messagingSenderId: "415138366606",
  appId: "1:415138366606:web:8beb7b9e9a34a0ff9cb5df",
  measurementId: "G-B38N4RD4DH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
