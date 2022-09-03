// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_2XRwdAPKff4o3z-iEsfuFs8TQwdvsWg",
  authDomain: "twitter-v1-3286c.firebaseapp.com",
  projectId: "twitter-v1-3286c",
  storageBucket: "twitter-v1-3286c.appspot.com",
  messagingSenderId: "818929571968",
  appId: "1:818929571968:web:1863b0f557b99fca49ee65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);