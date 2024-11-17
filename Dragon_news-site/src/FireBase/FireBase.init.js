// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB50AnZYcCybbEcU4EZx63UffPEd839wmA",
  authDomain: "dragon-news-site-73666.firebaseapp.com",
  projectId: "dragon-news-site-73666",
  storageBucket: "dragon-news-site-73666.firebasestorage.app",
  messagingSenderId: "163445431995",
  appId: "1:163445431995:web:3fe7866104ce4ec186539e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);