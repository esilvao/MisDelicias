// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfBwFOK2mF5yEH8lnzKmySAlc-kMmILug",
  authDomain: "restorantproy4.firebaseapp.com",
  projectId: "restorantproy4",
  storageBucket: "restorantproy4.appspot.com",
  messagingSenderId: "1093578858648",
  appId: "1:1093578858648:web:91e298bcc0522f09c4f0ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);  //? FIRESTORE DATABASE

