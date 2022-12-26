import { defineStore } from "pinia";

const meals = localStorage.getItem('meal')
let dailyMeal = []
if (meals) {
    dailyMeal = JSON.parse(meals)
}

export default defineStore("meals", {

    state: () => ({
        useDailyMeals: dailyMeal
    }),
    actions: {
        addDailyMeal(meal) {
            console.log('added')
            this.useDailyMeals.push(meal)

            localStorage.setItem("meal", JSON.stringify(this.useDailyMeals));
        }
    }
})