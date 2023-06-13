
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: process.env.AIzaSyCmxwd1LXwRUj9bs0CSPQopKvTw_eVpVAE,
    authDomain: "mundo-fitness-b08fb.firebaseapp.com",
    projectId: "mundo-fitness-b08fb",
    storageBucket: "mundo-fitness-b08fb.appspot.com",
    messagingSenderId: "504462381108",
    appId: "1:504462381108:web:107b64bcb54766e905fa61"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);