import {collection, getDocs} from 'firebase/firestore';
import {db} from '@/includes/firebase';
import {ref} from 'vue';
import type {Meal} from '../types/interfaces';

async function ListMealFormFirebase() {
  const mealsList = ref<Meal[]>([]);
  const querySnapshot = await getDocs(collection(db, 'meals'));
  querySnapshot.forEach((doc) => {
    mealsList.value.push(doc.data() as Meal);
  });
  return {mealsList};
}

export {ListMealFormFirebase};
