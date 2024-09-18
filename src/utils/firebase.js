// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-ee8a7.firebaseapp.com",
  projectId: "netflixgpt-ee8a7",
  storageBucket: "netflixgpt-ee8a7.appspot.com",
  messagingSenderId: "335945999823",
  appId: "1:335945999823:web:e69bc27d6c8e66c1a05eba",
  measurementId: "G-G80BXLPJD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };
//firebase login firebase init firebase deploy
//335945999823-n40hlqslidek03d1tuive0boj24hvedl.apps.googleusercontent.com
// firebase.js

