<template>
  <div class="list">
    <ul v-for="meal in useMeal.useDailyMeals" :key="meal.id">
      <li>{{ meal }}</li>
    </ul>
  </div>
</template>

<script>
import useMealsStore from '../stores/meals';
export default {
  name: 'UserMealList',
  setup() {
    const useMeal = useMealsStore();

    return {useMeal};
  },
};
</script>

<style lang="scss" scoped>
.list {
  width: 90vw;
  height: 400px;
  background-color: #f9faf79f;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.193);
  border-radius: 30px;
  margin: auto;
  margin-top: 40px;
  padding: 10px;
  overflow: hidden;
}
</style>
