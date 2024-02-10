import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAvBRsLHtQ5KjbQ7dBxavnkTIjGWsZatWQ",
    authDomain: "proyecto-coco-copalli.firebaseapp.com",
    projectId: "proyecto-coco-copalli",
    storageBucket: "proyecto-coco-copalli.appspot.com",
    messagingSenderId: "520023311556",
    appId: "1:520023311556:web:667d4215f4cdc55e69b591",
    measurementId: "G-R2P82568JV"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);