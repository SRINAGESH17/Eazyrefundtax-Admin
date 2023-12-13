// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU9wRh5dNvQC-ROhaq8Pn6bSZerGquLsY",
  authDomain: "eazyrefundtax-de0db.firebaseapp.com",
  projectId: "eazyrefundtax-de0db",
  storageBucket: "eazyrefundtax-de0db.appspot.com",
  messagingSenderId: "843499870549",
  appId: "1:843499870549:web:6528ca3ec831723c7bf7dc",
  measurementId: "G-XK9R77ZW34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;