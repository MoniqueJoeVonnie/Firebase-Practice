// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJf5zX5wbyBR2N4ufQiEgUX_c3XSbVA5w",
  authDomain: "fir-practice-ff76f.firebaseapp.com",
  projectId: "fir-practice-ff76f",
  storageBucket: "fir-practice-ff76f.firebasestorage.app",
  messagingSenderId: "411243781575",
  appId: "1:411243781575:web:3f6c3d95dc6695e3a54de2",
  measurementId: "G-5BLSYDVHKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();