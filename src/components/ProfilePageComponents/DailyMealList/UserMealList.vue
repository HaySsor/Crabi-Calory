<template>
  <WindowComponent class="box">
    <header class="box__top">
      <h2 class="box__top-title family-Nerko">Your Daily Meal</h2>
    </header>
    <div class="box__list">
      <Transition name="fade" mode="out-in">
        <ul class="box__list-ul" v-if="useMeal.useDailyMeals.length > 0">
          <UserMealListItem
            v-for="meal in useMeal.useDailyMeals"
            :key="meal.id"
            :meal="meal"
            :useMeal="useMeal" />
        </ul>
        <UserMealListEmpty v-else />
      </Transition>
    </div>
  </WindowComponent>
</template>

<script>
import UserMealListItem from './UserMealListItem.vue';
import UserMealListEmpty from './UserMealListEmpty.vue';
import WindowComponent from '../../styleComponents/WindowComponent.vue';
export default {
  name: 'UserMealList',
  components: {UserMealListItem, UserMealListEmpty, WindowComponent},
  props: {
    useMeal: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  .img {
    display: none;
  }
  &__top {
    display: flex;
    justify-content: center;
    align-items: center;

    &-title {
      text-align: center;
      font-size: 2.2rem;
      padding: 10px;
      background-color: #ffff;
      transform: translateY(-11px);
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
      width: 80%;
    }
  }
  &__list {
    overflow: auto;
    height: 325px;

    &-ul {
      list-style: none;
      padding: 10px;
    }
  }
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.3s ease-in;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 0.3s ease-in;
}
</style>
