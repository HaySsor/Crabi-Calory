import { defineStore } from "pinia";
import getUser from '@/composables/getUser';
import { db, auth } from '@/includes/firebase';
import { arrayUnion, doc, updateDoc, arrayRemove, } from "firebase/firestore";
// const meals = localStorage.getItem('meal')
// let dailyMeal = []
// if (meals) {
//     dailyMeal = JSON.parse(meals)
// }


const userDocRef = doc(db, 'users', auth.currentUser.uid)
const { user, getUserData } = getUser();


export default defineStore("meals", {

    state: () => ({
        useDailyMeals: [],
        flag: true,
    }),
    actions: {
        async getUserMeal() {

            await getUserData()
            const x = user.value.meals?.map(meal => {
                return JSON.parse(meal)
            })
            this.flag = !this.flag
            this.useDailyMeals = x
        },
        async updateMealsList() {
            await getUserData()
            const x = user.value.meals?.map(meal => {
                return JSON.parse(meal)
            })
            this.flag = !this.flag
            this.useDailyMeals = x
        },
        async addDailyMeal(meal) {
            const m = JSON.stringify(meal)
            await updateDoc(userDocRef, {
                "meals": arrayUnion(m)
            })
            this.updateMealsList()
            // localStorage.setItem("meal", JSON.stringify(this.useDailyMeals));
        },
        async removeMealFromDaily(meal) {
            const m = JSON.stringify(meal)
            await updateDoc(userDocRef, {
                "meals": arrayRemove(m)
            })
            this.updateMealsList()
        },
        async newDay() {
            await updateDoc(userDocRef, {
                "meals": []
            })
            this.updateMealsList()
        }

    }
})