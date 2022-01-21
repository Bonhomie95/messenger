import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBFvIW_q9zXte5zWRzcnwyJRtzxisG9BX0",
    authDomain: "unichat-f99b5.firebaseapp.com",
    projectId: "unichat-f99b5",
    storageBucket: "unichat-f99b5.appspot.com",
    messagingSenderId: "304071915474",
    appId: "1:304071915474:web:68aeaaf9504408cf2e3a0b"
}).auth();