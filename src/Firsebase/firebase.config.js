// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiA8iVWixsb4CFjXGMTvpTUd9PFtyGYtE",
  authDomain: "email-auth-89793.firebaseapp.com",
  projectId: "email-auth-89793",
  storageBucket: "email-auth-89793.appspot.com",
  messagingSenderId: "497325571902",
  appId: "1:497325571902:web:d033fe30232f0c4b9ab66f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;