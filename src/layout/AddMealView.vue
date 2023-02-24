<template>
  <div class="add-meal">
    <header class="add-meal__header">
      <h2 class="add-meal__header-title family-Nerko">Add meal</h2>
      <span class="add-meal__header-info"> * add food per 100g</span>
    </header>
    <AddMealToBaseForm />
  </div>
</template>

<script lang="ts">
import AddMealToBaseForm from '../components/AddMealToBasePageComponents/AddMealToBaseForm.vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'AddMealView',
  components: {AddMealToBaseForm},
});
</script>

<style lang="scss" scoped>
.add-meal {
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 1fr;
  justify-items: center;
  width: 100%;

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    &-title {
      text-align: center;
      font-size: 3.5rem;
    }
    &-info {
      color: tomato;
      font-size: 2rem;
    }
  }
}
</style>
