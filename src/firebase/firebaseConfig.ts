import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDJqG1tQR0ZgIE0zWw3XTVg1ar7cajX9wE",
  authDomain: "project-najot-talim.firebaseapp.com",
  projectId: "project-najot-talim",
  storageBucket: "project-najot-talim.appspot.com",
  messagingSenderId: "742596826545",
  appId: "1:742596826545:web:af47892ad4f685b516d990",
  measurementId: "G-2J23VCVTCX",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
