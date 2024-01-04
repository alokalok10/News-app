import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBOOzeUnHmNpwRU3Z4TZ9mPy8UKjKlaOpI",
  // authDomain: "cart-7e65b.firebaseapp.com",
  // projectId: "cart-7e65b",
  // storageBucket: "cart-7e65b.appspot.com",
  // messagingSenderId: "491503643131",
  // appId: "1:491503643131:web:4d84434e0eba25b8c7435e"

  apiKey: "AIzaSyA_Z0pjB85PEewmrt3lK6iawo9SrBN18ZI",
  authDomain: "news-app-3964d.firebaseapp.com",
  projectId: "news-app-3964d",
  storageBucket: "news-app-3964d.appspot.com",
  messagingSenderId: "352185169094",
  appId: "1:352185169094:web:a204c0ec0a3b9a874313c7",
  measurementId: "G-GWMF2PYHHF"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
