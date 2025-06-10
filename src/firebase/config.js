// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDm8_mV3p2kNbtNo19yaTVnvugfBmbVLpQ",
    authDomain: "react-dashboard-a9f43.firebaseapp.com",
    projectId: "react-dashboard-a9f43",
    storageBucket: "react-dashboard-a9f43.firebasestorage.app",
    messagingSenderId: "1028464966928",
    appId: "1:1028464966928:web:4833c25f1c80105a467995",
    measurementId: "G-NNFJGM7MED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;