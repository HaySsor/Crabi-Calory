<template>
  <div class="box">
    <header class="box__top">
      <h2 class="box__top-title family-Nerko">Your Daily Meal</h2>
    </header>
    <ul class="box__list">
      <AppUserMealListItemVue
        v-for="meal in useMeal.useDailyMeals"
        :key="meal.id"
        :meal="meal"
        :useMeal="useMeal" />
    </ul>
  </div>
</template>

<script>
import AppUserMealListItemVue from './AppUserMealListItem.vue';
export default {
  name: 'UserMealList',
  components: {AppUserMealListItemVue},
  props: {
    useMeal: {
      required: true,
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.box {
  width: 90vw;
  height: 400px;
  background-color: #f9faf7;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.193);
  border-radius: 30px;
  margin: auto;
  margin-top: 40px;
  padding: 10px;
  overflow: scroll;
  z-index: 0;
  &__top {
    display: flex;
    justify-content: center;
    align-items: center;

    &-title {
      text-align: center;
      font-size: 2.2rem;
      padding: 10px;
      background-color: rgba(144, 238, 144, 0.416);
      border-radius: 25px;
      width: 60%;
    }
  }

  &__list {
    list-style: none;
    padding: 10px;

    
  }
}
</style>
