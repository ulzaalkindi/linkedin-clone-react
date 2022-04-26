// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyA0KnOf_YrCwQs8ppU1Yj1xX_pP2ryIE5s",
    authDomain: "linkedinclone-40037.firebaseapp.com",
    projectId: "linkedinclone-40037",
    storageBucket: "linkedinclone-40037.appspot.com",
    messagingSenderId: "891859864818",
    appId: "1:891859864818:web:5a5229bb6b3d75a2cb146b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }