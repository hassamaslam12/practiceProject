// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqGSwhSXjdb-_3EljUlZxVwZB6TqbU_9I",
  authDomain: "adminportal-eb65c.firebaseapp.com",
  databaseURL: "https://adminportal-eb65c-default-rtdb.firebaseio.com",
  projectId: "adminportal-eb65c",
  storageBucket: "adminportal-eb65c.appspot.com",
  messagingSenderId: "432135310696",
  appId: "1:432135310696:web:46457c814143904c981add"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export  default app;