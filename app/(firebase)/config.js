import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Initialization
const firebaseConfig = {
  apiKey: "AIzaSyDQALksKRLJDO1xnfhyqdv8peqYJwg9C4Q",
  authDomain: "ablazenova-1777d.firebaseapp.com",
  projectId: "ablazenova-1777d",
  storageBucket: "ablazenova-1777d.appspot.com",
  messagingSenderId: "197529179997",
  appId: "1:197529179997:web:8db006b169a086ce877ab4",
  measurementId: "G-Q06W3LJF8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const signinGoogle = new GoogleAuthProvider(app);
export const db = getFirestore(app);
