<template>
  <div>{{ list }}</div>
</template>

<script>
import {ListMealFormFirebase} from '@/composables/getMeal';
import {ref, onMounted} from 'vue';
export default {
  name: 'FirebaseMealList',
  setup() {
    const list = ref([]);

    onMounted(() => {
      getData();
    });
    async function getData() {
      const {mealsList} = await ListMealFormFirebase();
      list.value = [...mealsList.value];
    }

    return {list};
  },
};
</script>

<style lang="scss" scoped></style>
