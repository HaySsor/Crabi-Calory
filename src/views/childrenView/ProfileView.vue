<template>
  <div class="profile-view">
    <div class="profile-view__top">
      <AppProfileSquerVue :personalData="user" />
      <AppNewDayButtonVue />
    </div>
    <div class="box-pc">
      <AppCaloryChartVue :personalData="user" :useMeal="useMeal" />
      <AppUserMealListVue :useMeal="useMeal" />
    </div>
  </div>
</template>

<script>
import getUser from '@/composables/getUser';
import AppProfileSquerVue from '@/components/AppProfileSquer.vue';
import AppCaloryChartVue from '@/components/AppCaloryChart.vue';
import AppUserMealListVue from '@/components/AppUserMealList.vue';
import AppNewDayButtonVue from '../../components/AppNewDayButton.vue';
import useMealsStore from '@/stores/meals';

export default {
  name: 'ProfileView',
  components: {
    AppProfileSquerVue,
    AppCaloryChartVue,
    AppUserMealListVue,
    AppNewDayButtonVue,
  },
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
  position: relative;
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media screen and (min-width: 1200px) {
  .profile-view {
    .box-pc {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__top {
      display: flex;
      justify-content: center;
      gap: 100px;
    }
  }
}
</style>
