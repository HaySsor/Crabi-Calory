import {defineStore} from 'pinia';
import getUser from '@/composables/getUser';
import {db, auth} from '@/includes/firebase';
import {arrayUnion, doc, updateDoc, arrayRemove} from 'firebase/firestore';
import type {DocumentReference, DocumentData} from 'firebase/firestore';
import type {Meal, MealObj} from '../types/interfaces';

let userDocRef: DocumentReference<DocumentData>;
if (auth.currentUser) {
  userDocRef = doc(db, 'users', auth.currentUser.uid);
}
const {user, getUserData} = getUser();

export default defineStore('meals', {
  state: () => ({
    useDailyMeals: [] as MealObj[],
  }),
  actions: {
    async getUserMeal() {
      await getUserData();
      if (user) {
        const userDelayMeal = user.value.meals.map((meal) => {
          return meal;
        });
        console.log(userDelayMeal);
        this.useDailyMeals = userDelayMeal;
      }
    },
    async addDailyMeal(meal: MealObj) {
      await updateDoc(userDocRef, {meals: arrayUnion(meal)});
      this.getUserMeal();
    },
    async removeMealFromDaily(meal: MealObj) {
      await updateDoc(userDocRef, {meals: arrayRemove(meal)});
      this.getUserMeal();
    },
    async newDay() {
      await updateDoc(userDocRef, {meals: []});
      this.getUserMeal();
    },
  },
});
