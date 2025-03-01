import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtO5sYqEUo4K2GKviSBLNq_W79EXwuyeQ",
  authDomain: "portfolio-a1a8a.firebaseapp.com",
  projectId: "portfolio-a1a8a",
  storageBucket: "portfolio-a1a8a.firebasestorage.app",
  messagingSenderId: "802370881012",
  appId: "1:802370881012:web:8be24aafca43e1ed0e25a1",
  measurementId: "G-BK14XC6TZ2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
