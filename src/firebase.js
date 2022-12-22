import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAldWypmExFBBCNpksrBenEwo3i8uanigQ",
    authDomain: "facebook-messenger-clone-5c4e2.firebaseapp.com",
    projectId: "facebook-messenger-clone-5c4e2",
    storageBucket: "facebook-messenger-clone-5c4e2.appspot.com",
    messagingSenderId: "15350702199",
    appId: "1:15350702199:web:560fb1f4b4ada8c05b6672",
    measurementId: "G-G6GSMXTHPD"

});

const db = getFirestore();
console.log(db)

export default db ;