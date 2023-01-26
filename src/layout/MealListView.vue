<template>
  <div class="meal-list">
    <div class="meal-list__top">
      <h3 class="meal-list__top-title">Meal List</h3>
      <img
        class="meal-list__top-img hamburger"
        src="/icons/hamburger.png"
        alt=""
        aria-hidden="true" />
      <img
        class="meal-list__top-img"
        src="/icons/crab.png"
        alt=""
        aria-hidden="true" />
      <img
        class="meal-list__top-img salta"
        src="/icons/salad.png"
        alt=""
        aria-hidden="true" />
      <div class="meal-list__top-shadow"></div>
    </div>
    <div class="meal-list__middle">
      <MealListFromFirebase />
    </div>
  </div>
</template>

<script>
import MealListFromFirebase from '../components/MealListPageComponents/MealListFromFirebase.vue';
export default {
  name: 'MealList',
  components: {MealListFromFirebase},
};
</script>

<style lang="scss" scoped>
.meal-list {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__top {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    padding: 10px;
    &-title {
      position: absolute;
      top: 90%;
      font-size: 2rem;
      background-color: #f9faf7ff;
      padding: 10px 50px;
      border-radius: 30px;
    }
    &-img {
      width: 30%;
    }
    .salta {
      width: 20%;
      transform: translateY(15px);
      z-index: -1;
    }
    .hamburger {
      width: 25%;
      transform: translateY(20px);
      z-index: -1;
    }
    &-shadow {
      position: absolute;
      width: 80%;
      height: 30px;
      bottom: -10px;
      z-index: -3;
      background-color: rgba(0, 0, 0, 0.428);
      border-radius: 30px;
    }
  }
  &__middle {
    margin-top: 50px;
    width: 100%;
    border-radius: 25px;
    padding: 20px;
  }
}
@media screen and (min-width: 454px) {
  .meal-list {
    margin-bottom: 50px;
    &__top {
      &-title {
        top: 90%;
        font-size: 1.8rem;
        padding: 8px 60px;
      }
      &-img {
        width: 120px;
      }
      .salta {
        width: 100px;
        transform: translateY(5px);
      }
      .hamburger {
        width: 100px;
        transform: translateY(20px);
      }
      &-shadow {
        width: 98%;
        left: -3px;
        height: 20px;
        bottom: -5px;
      }
    }
    &__middle {
      margin-top: 50px;
      width: 80%;
      border-radius: 25px;
      padding: 20px;
    }
  }
}
@media screen and (min-width: 1200px) {
}
</style>
