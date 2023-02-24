import { initializeApp } from "firebase/app"
import { getAuth, } from 'firebase/auth';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD1UL_KnIjCm8pObGojGqtF-VjK_xyd-n0",
    authDomain: "crab-calory.firebaseapp.com",
    projectId: "crab-calory",
    storageBucket: "crab-calory.appspot.com",
    messagingSenderId: "38791710581",
    appId: "1:38791710581:web:ed2d16c3269bd7a488f53c",
    measurementId: "G-XQ4CC2C7N1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

enableIndexedDbPersistence(db);
