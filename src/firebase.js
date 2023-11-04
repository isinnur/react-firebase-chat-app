import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAl_PUULdFLnf-dIXSdyxcVGwyuQHx1Xog",
  authDomain: "fir-chat-493f3.firebaseapp.com",
  projectId: "fir-chat-493f3",
  storageBucket: "fir-chat-493f3.appspot.com",
  messagingSenderId: "508999246462",
  appId: "1:508999246462:web:8260f39963410c1a572e2f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
