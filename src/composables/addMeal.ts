import {collection, addDoc} from 'firebase/firestore';
import {db} from '@/includes/firebase';
import type {Meal} from '@/types/interfaces';

async function addMealToFireBase(v: Meal) {
  const MealCollection = collection(db, 'meals');
  await addDoc(MealCollection, v);
}

export {addMealToFireBase};
