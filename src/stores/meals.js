import { defineStore } from "pinia";

const meals = localStorage.getItem('meal')
let dailyMeal = []
if (meals) {
    dailyMeal = JSON.parse(meals)
}

export default defineStore("meals", {

    state: () => ({
        useDailyMeals: dailyMeal,
        flag: true,
    }),
    actions: {
        addDailyMeal(meal) {
            console.log('added')
            this.useDailyMeals.push(meal)

            localStorage.setItem("meal", JSON.stringify(this.useDailyMeals));
        },
        removeMealFromDaily(meal) {
            console.log('remove')
            this.useDailyMeals.forEach(item => {
                if (item.idD === meal) {
                    let idx = this.useDailyMeals.indexOf(item)
                    this.useDailyMeals.splice(idx, 1)
                }
            })
            this.flag = !this.flag
            localStorage.setItem("meal", JSON.stringify(this.useDailyMeals));
        }
    }
})