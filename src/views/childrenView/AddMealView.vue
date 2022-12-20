<template>
  <div class="add-meal">
    <header class="add-meal__header">
      <h2 class="add-meal__header-title family-Nerko">Add meal</h2>
      <span class="add-meal__header-info"> * add food per 100g</span>
    </header>
    <AppAddMealToBaseVue />
  </div>
</template>

<script>
import AppAddMealToBaseVue from '../../components/AppAddMealToBase.vue';
export default {
  name: 'AddMealView',
  components: {AppAddMealToBaseVue},
};
</script>

<style lang="scss" scoped>
.add-meal {
  padding: 20px;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    &-title {
      text-align: center;
      font-size: 2.5rem;
    }
    &-info{
      color:tomato;
      font-size: 1.5rem;
    }
  }
}
</style>
