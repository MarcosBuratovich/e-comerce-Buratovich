// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeWeoyah3Fxxae0xnHobQPpuXejicQq6k",
  authDomain: "e-comerce-buratovich.firebaseapp.com",
  projectId: "e-comerce-buratovich",
  storageBucket: "e-comerce-buratovich.appspot.com",
  messagingSenderId: "155736422991",
  appId: "1:155736422991:web:b6c73248f57afb6526083a",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const itemjson = getFirestore(app)
