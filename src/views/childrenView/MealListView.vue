<template>
  <div>
    <h2>Meal list</h2>
    <AppFirebaseMealListVue />
  </div>
</template>

<script>
import AppFirebaseMealListVue from '../../components/AppFirebaseMealList.vue';
export default {
  name: 'MealList',
  components: {AppFirebaseMealListVue},
};
</script>

<style lang="scss" scoped></style>
