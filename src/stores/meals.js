import { defineStore } from "pinia";
import getUser from '@/composables/getUser';
import { db, auth } from '@/includes/firebase';
import { arrayUnion, doc, updateDoc, arrayRemove, } from "firebase/firestore";

const userDocRef = doc(db, 'users', auth.currentUser.uid)
const { user, getUserData } = getUser();

export default defineStore("meals", {

    state: () => ({
        useDailyMeals: [],
    }),
    actions: {
        async getUserMeal() {
            await getUserData()
            const x = user.value.meals?.map(meal => {
                return JSON.parse(meal)
            })
            this.useDailyMeals = x
        },
        async addDailyMeal(meal) {
            const mealJson = JSON.stringify(meal)
            await updateDoc(userDocRef, { "meals": arrayUnion(mealJson) })
            this.getUserMeal()
        },
        async removeMealFromDaily(meal) {
            const mealJson = JSON.stringify(meal)
            await updateDoc(userDocRef, { "meals": arrayRemove(mealJson) })
            this.getUserMeal()
        },
        async newDay() {
            await updateDoc(userDocRef, { "meals": [] })
            this.getUserMeal()
        }

    }
})