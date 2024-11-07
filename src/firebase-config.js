// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxFDQdxkyaK93TxOfmhC-K2zDxsYDh5C4",
  authDomain: "d-components.firebaseapp.com",
  projectId: "d-components",
  storageBucket: "d-components.firebasestorage.app",
  messagingSenderId: "541525409532",
  appId: "1:541525409532:web:66b26e7512121d1223a179",
  measurementId: "G-CWWY4RWH15"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
