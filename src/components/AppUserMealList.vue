<template>
  <div class="box">
    <header class="box__top">
      <h2 class="box__top-title family-Nerko">Your Daily Meal</h2>
    </header>
    <div class="box__list">
      <Transition name="fade" mode="out-in">
        <ul class="box__list-ul" v-if="useMeal.useDailyMeals.length > 0">
          <AppUserMealListItemVue
            v-for="meal in useMeal.useDailyMeals"
            :key="meal.id"
            :meal="meal"
            :useMeal="useMeal" />
        </ul>
        <AppUserMealListEmptyVue v-else />
      </Transition>
    </div>
  </div>
</template>

<script>
import AppUserMealListItemVue from './AppUserMealListItem.vue';
import AppUserMealListEmptyVue from './AppUserMealListEmpty.vue';
export default {
  name: 'UserMealList',
  components: {AppUserMealListItemVue, AppUserMealListEmptyVue},
  props: {
    useMeal: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 90vw;
  height: 400px;
  border-radius: 30px;
  margin: auto;
  margin-top: 40px;
  padding: 10px;
  background-color: transparent;
  border: 5px solid #ffff;

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

@media screen and (min-width: 1200px) {
  .box {
    width: 40%;
    height: 430px;
    position: relative;
    margin-top: 25px;
    &__list {
      margin-top: 10px;
      &-ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
