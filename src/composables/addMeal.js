import { collection, addDoc, } from 'firebase/firestore';
import { db } from '@/includes/firebase';

async function addMealToFireBase(v) {
    const MealCollection = collection(db, 'meals');
    await addDoc(MealCollection, v);
}


export { addMealToFireBase }