// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf1IL8DNe-W56YF2qAXy5ylNHfXN9Icas",
  authDomain: "solosphere-c8df9.firebaseapp.com",
  projectId: "solosphere-c8df9",
  storageBucket: "solosphere-c8df9.appspot.com",
  messagingSenderId: "349596949999",
  appId: "1:349596949999:web:000df645bef318d8cf6a1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;