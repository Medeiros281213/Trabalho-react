import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "trabalho-react-24d3d.firebaseapp.com",
  projectId: "trabalho-react-24d3d",
  storageBucket: "trabalho-react-24d3d.appspot.com",
  messagingSenderId: "1086580718924",
  appId: "1:1086580718924:web:cf750568d52a86a25a3e9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);