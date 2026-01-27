// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  getStorage,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_D_qaCFm5albhWE7xe36m0ROoig4b9So",
  authDomain: "fbla-lost-and-found-25f8d.firebaseapp.com",
  projectId: "fbla-lost-and-found-25f8d",
  storageBucket: "fbla-lost-and-found-25f8d.firebasestorage.app",
  messagingSenderId: "29811620103",
  appId: "1:29811620103:web:2f3ea628d26b509c73eda2",
  measurementId: "G-BE68KP8H21"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export { signInWithEmailAndPassword };
console.log("firebase installed");