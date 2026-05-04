import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "trabalho-react-24d3d.firebaseapp.com",
  projectId: "trabalho-react-24d3d",
  storageBucket: "trabalho-react-24d3d.appspot.com",
  messagingSenderId: "1086580781924",
  appId: "1:1086580781924:web:c4f750568d52a86a25a3e9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);