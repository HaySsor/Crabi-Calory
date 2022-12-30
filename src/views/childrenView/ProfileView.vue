<template>
  <div class="profile-view">
    <div class="profile-view__top">
      <AppProfileSquerVue :personalData="user" />
    </div>
    <AppCaloryChartVue :personalData="user" :useMeal="useMeal" />
    <AppUserMealListVue :useMeal="useMeal" />
  </div>
</template>

<script>
import getUser from '@/composables/getUser';
import AppProfileSquerVue from '@/components/AppProfileSquer.vue';
import AppCaloryChartVue from '@/components/AppCaloryChart.vue';
import AppUserMealListVue from '@/components/AppUserMealList.vue';
import useMealsStore from '@/stores/meals';

export default {
  name: 'ProfileView',
  components: {AppProfileSquerVue, AppCaloryChartVue, AppUserMealListVue},
  setup() {
    const {user, getUserData} = getUser();
    getUserData();

    const useMeal = useMealsStore();

    return {user, useMeal};
  },
};
</script>

<style lang="scss" scoped>
.profile-view {
  padding: 10px;
  margin-bottom: 150px;
  &__top {
    display: flex;
  }
}
</style>
