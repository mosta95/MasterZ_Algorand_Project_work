
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEp6B7Uu6Fg4ihDDbQ8Z23pvwJn1YmcXE",
  authDomain: "algorand-b66df.firebaseapp.com",
  projectId: "algorand-b66df",
  storageBucket: "algorand-b66df.appspot.com",
  messagingSenderId: "739699832972",
  appId: "1:739699832972:web:c9034b06600e9da09323a9",
  measurementId: "G-TEEYZBN345",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };