// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmZdNmFueQP1xLKmzDMuuGHJYrBnzSBI8",
  authDomain: "react-chatc.firebaseapp.com",
  projectId: "react-chatc",
  storageBucket: "react-chatc.appspot.com",
  messagingSenderId: "1097806840937",
  appId: "1:1097806840937:web:c08cdf0111aa3dcab14ef8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
