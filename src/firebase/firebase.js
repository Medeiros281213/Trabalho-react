import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWmLH4KPjJTw2pffVNx33wPRBums_NB0w",
  authDomain: "trabalho-react-24d3d.firebaseapp.com",
  projectId: "trabalho-react-24d3d",
  storageBucket: "trabalho-react-24d3d.firebasestorage.app",
  messagingSenderId: "1086580718924",
  appId: "1:1086580718924:web:c4f750568d52a86a25a3e9",
  measurementId: "G-SRHVRWMTT6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);