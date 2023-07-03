// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmgTEO9MVesSHaJBPhpcAFZt1FUsamUcY",
    authDomain: "rentmate98.firebaseapp.com",
    projectId: "rentmate98",
    storageBucket: "rentmate98.appspot.com",
    messagingSenderId: "659675498590",
    appId: "1:659675498590:web:c19ee7ffa840d5faab4ccf",
    measurementId: "G-7Q1ZN989BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);