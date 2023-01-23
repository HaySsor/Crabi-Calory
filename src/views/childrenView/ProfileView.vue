<template>
  <div class="profile-view">
    <div class="profile-view__top">
      <AppProfileSquerVue
        :personalData="useUser.loggedUser"
        :OpenModalUserEditProfile="openModalUserEditProfile" />
      <AppNewDayButtonVue />
    </div>
    <div class="box-pc">
      <AppCaloryChartVue
        :personalData="useUser.loggedUser"
        :useDailyMeals="useMeal.useDailyMeals"
        :key="useUser.userChangeData" />
      <AppUserMealListVue :useMeal="useMeal" />

      <AppModalChangeUserData
        v-if="showModalUserEditProfile"
        :personalData="useUser.loggedUser"
        :closeModalUserEditProfile="closeModalUserEditProfile" />
    </div>
  </div>
</template>

<script>
import AppProfileSquerVue from '@/components/AppProfileSquer.vue';
import AppCaloryChartVue from '@/components/AppCaloryChart.vue';
import AppUserMealListVue from '@/components/AppUserMealList.vue';
import AppNewDayButtonVue from '../../components/AppNewDayButton.vue';
import useMealsStore from '@/stores/meals';
import {onBeforeMount, ref} from 'vue';
import useUserStore from '@/stores/user';
import AppModalChangeUserData from '../../components/AppModalChangeUserData.vue';

export default {
  name: 'ProfileView',
  components: {
    AppProfileSquerVue,
    AppCaloryChartVue,
    AppUserMealListVue,
    AppNewDayButtonVue,
    AppModalChangeUserData,
  },
  setup() {
    const useUser = useUserStore();
    const useMeal = useMealsStore();
    const showModalUserEditProfile = ref(false);

    onBeforeMount(() => {
      useUser.downloadUserData();
      useMeal.getUserMeal();
    });
    setTimeout(() => {
      showModalUserEditProfile.value = true;
    }, 500);
    function closeModalUserEditProfile() {
      showModalUserEditProfile.value = false;
    }
    function openModalUserEditProfile() {
      showModalUserEditProfile.value = true;
    }
    return {
      useUser,
      useMeal,
      closeModalUserEditProfile,
      showModalUserEditProfile,
      openModalUserEditProfile,
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-view {
  padding: 10px;
  margin-bottom: 150px;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media screen and (min-width: 454px) {
  .profile-view {
    &__top {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
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
