<template>
  <div class="box">
    <ul class="box__list">
      <AppMealItemVue
        v-for="meal in list"
        :key="meal.name"
        :meal="meal"
        :openModal="openModal" />
    </ul>

    <AppModalAddMealVue
      v-if="modal"
      :picketMeal="picketMeal"
      :closeModal="closeModal" />
  </div>
</template>

<script>
import {ListMealFormFirebase} from '@/composables/getMeal';
import AppModalAddMealVue from './AppModalAddMeal.vue';
import AppMealItemVue from './AppMealItem.vue';
import {ref, onMounted, reactive} from 'vue';
export default {
  name: 'FirebaseMealList',
  components: {AppMealItemVue, AppModalAddMealVue},
  setup() {
    const list = ref([]);
    async function getData() {
      const {mealsList} = await ListMealFormFirebase();
      list.value = [...mealsList.value];
    }
    onMounted(() => {
      getData();
    });

    const modal = ref(false);
    const picketMeal = ref('');

    function openModal(item) {
      picketMeal.value = Object.assign(item);
      modal.value = true;
    }
    function closeModal() {
      modal.value = false;
      picketMeal.value = '';
    }

    return {list, openModal, modal, picketMeal, closeModal};
  },
};
</script>

<style lang="scss" scoped>
.box {
  &__list {
    display: flex;
    flex-direction: column;

    list-style: none;
    gap: 10px;
    height: 410px;
    overflow: scroll;
  }
}
</style>
