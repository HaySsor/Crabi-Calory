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
      <AppFirebaseMealListVue />
    </div>
  </div>
</template>

<script>
import AppFirebaseMealListVue from '../../components/AppFirebaseMealList.vue';
export default {
  name: 'MealList',
  components: {AppFirebaseMealListVue},
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
    gap:5px;
    &-title{
      position: absolute;
      top: 90%;
      font-size: 2rem;
      background-color: #f9faf7ff;
      padding: 10px 50px;
      border-radius: 30px;
    }
    &-img{
      width: 30%;
    }
    .salta{
      width: 20%;
      transform: translateY(15px);
      z-index: -1;
    }
    .hamburger{
      width: 25%;
      transform: translateY(20px);
      z-index: -1;
    }
    &-shadow{
      position: absolute;
      width: 80%;
      height: 30px;
      bottom: -10px;
      z-index: -3;
      background-color: rgba(0, 0, 0, 0.428);
      border-radius: 30px;
    }
  }
  &__middle{
    margin-top: 50px;
    width: 100%;
    border-radius: 25px;
    background-color: rgba(0, 0, 0, 0.21);
    padding: 20px;
  }
}
</style>
