// firebaseconfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHVDpUENGztG3fK-FallQ6aHOJ4Y1bKnA",
    authDomain: "my-portfolio-fe9b8.firebaseapp.com",
    projectId: "my-portfolio-fe9b8",
    storageBucket: "my-portfolio-fe9b8.firebasestorage.app",
    messagingSenderId: "381094410798",
    appId: "1:381094410798:web:25a586bf2ffaa6d08a7dbf",
    measurementId: "G-J331PVW1NE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
