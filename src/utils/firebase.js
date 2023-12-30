// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlLGY6-EX9daqDkZrKBw93leQjxiW-JMo",
  authDomain: "netflix-clone-b0f59.firebaseapp.com",
  projectId: "netflix-clone-b0f59",
  storageBucket: "netflix-clone-b0f59.appspot.com",
  messagingSenderId: "986792940242",
  appId: "1:986792940242:web:d6fc4be26db5d32f16130b",
  measurementId: "G-QC3ZR2Z1DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();