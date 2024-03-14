// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqEhawwDhkTk_XQ9XNm-hrQoEZeYp140k",
  authDomain: "student-management-syste-45a02.firebaseapp.com",
  databaseURL: "https://student-management-syste-45a02-default-rtdb.firebaseio.com",
  projectId: "student-management-syste-45a02",
  storageBucket: "student-management-syste-45a02.appspot.com",
  messagingSenderId: "476317871020",
  appId: "1:476317871020:web:a3ab1dc238049404246809",
  measurementId: "G-5LJ1BN9BVC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth};
