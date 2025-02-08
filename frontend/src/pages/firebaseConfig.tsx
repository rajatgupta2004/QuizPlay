// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig:any = {
  apiKey: "AIzaSyA543KjgsbCU-S_jjd2K3xSN6Iw-xNtZLI",
  authDomain: "signup-8461b.firebaseapp.com",
  projectId: "signup-8461b",
  storageBucket: "signup-8461b.firebasestorage.app",
  messagingSenderId: "715673333569",
  appId: "1:715673333569:web:a7eb665877798cedda7bc0",
  measurementId: "G-QGHHHFGZ8B"
};

// Initialize Firebase
const app :any = initializeApp(firebaseConfig);
const analytics :any = getAnalytics(app);
const auth :any = getAuth(app);
const provider :any= new GoogleAuthProvider();

export { auth, provider, analytics };