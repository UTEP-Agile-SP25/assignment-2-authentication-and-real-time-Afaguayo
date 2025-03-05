import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAPhHre-7oHooGuM5798KCRcOJ-c3W0xo",
  authDomain: "aguayo-sandbox-eaff0.firebaseapp.com",
  projectId: "aguayo-sandbox-eaff0",
  storageBucket: "aguayo-sandbox-eaff0.firebasestorage.app",
  messagingSenderId: "541286022250",
  appId: "1:541286022250:web:32e28dea8e86adf07dde13"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);