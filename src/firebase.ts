// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQf8CdX_oEhhdEHZ_P8iprYwnoD6QZyKw",
    authDomain: "task-2-c9555.firebaseapp.com",
    projectId: "task-2-c9555",
    storageBucket: "task-2-c9555.firebasestorage.app",
    messagingSenderId: "314725494646",
    appId: "1:314725494646:web:a88163893ab74941fd9457"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);