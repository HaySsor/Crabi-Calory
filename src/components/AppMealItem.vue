<template>
  <li class="item">
    <h3>{{ meal.name }}</h3>
    <span class="kcal">{{ meal.kcal }}</span>
    <span class="carb">{{ meal.carbohydrates }}</span>
    <span class="protein">{{ meal.protein }}</span>
    <span class="fat">{{ meal.fat }}</span>
    <App-icon
      class="icon"
      icon="material-symbols:add-circle-outline"
      width="40"
      height="30"
      @click="useMeal.addDailyMeal(meal)" />
  </li>
</template>

<script>
import useMealsStore from '../stores/meals';
export default {
  name: 'MealItem',
  props: {
    meal: {
      required: true,
    },
  },
  setup() {
    const useMeal = useMealsStore();

    return {useMeal};
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-around;
  align-content: center;

  h3 {
    font-size: 1.6rem;
    white-space: nowrap;
    overflow: scroll;
    width: 20%;
  }
  .kcal,
  .carb,
  .protein,
  .fat {
    width: 20%;
    flex: 1;
    font-size: 1.4rem;
    text-align: center;
  }
  .kcal {
    color: rgb(110, 132, 116);
  }
  .carb {
    color: #e2882f;
  }
  .protein {
    color: rgb(65, 151, 194);
  }
  .fat {
    color: rgb(190, 89, 71);
  }
}
</style>
