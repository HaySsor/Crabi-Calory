<template>
  <div class="list">
    <div class="info">
      <span class="name">N</span>
      <span class="kcal">K</span>
      <span class="carb">C</span>
      <span class="protein">P</span>
      <span class="fat">F</span>
      <span class="add">Add</span>
    </div>
    <ul class="meal-list" v-for="meal in list" :key="meal.name">
      <AppMealItemVue :meal="meal" />
    </ul>
  </div>
</template>

<script>
import {ListMealFormFirebase} from '@/composables/getMeal';
import AppMealItemVue from './AppMealItem.vue';
import {ref, onMounted} from 'vue';
export default {
  name: 'FirebaseMealList',
  components: {AppMealItemVue},
  setup() {
    const list = ref([]);
    async function getData() {
      const {mealsList} = await ListMealFormFirebase();
      list.value = [...mealsList.value];
    }
    onMounted(() => {
      getData();
    });

    return {list};
  },
};
</script>

<style lang="scss" scoped>
.meal-list {
  width: 100%;
  padding: 10px;
}
.info {
  display: flex;
  padding: 10px;
  .kcal,
  .carb,
  .protein,
  .name,
  .add,
  .fat {
    width: 20%;
    flex: 1;
    font-size: 1.4rem;
    text-align: right;
    transform: translateX(-8px);
  }
}
.list{
  background-color: white;
  border-radius: 20px;
}
</style>
