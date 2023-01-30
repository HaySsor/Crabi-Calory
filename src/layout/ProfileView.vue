<template>
  <div class="profile-view">
    <div class="profile-view__top">
      <UserProfileBox
        :personalData="useUser.loggedUser"
        :OpenModalUserEditProfile="openModalUserEditProfile" />
      <AppNewDayButtonVue />
    </div>
    <div class="box-pc">
      <AppCaloryChartVue
        :personalData="useUser.loggedUser"
        :useDailyMeals="useMeal.useDailyMeals"
        :key="useUser.userChangeData" />
      <UserMealList :useMeal="useMeal" />

      <ModalChangeUserData
        v-if="showModalUserEditProfile"
        :personalData="useUser.loggedUser"
        :closeModalUserEditProfile="closeModalUserEditProfile" />
    </div>
  </div>
</template>

<script>
import UserProfileBox from '../components/ProfilePageComponents/UserProfileBox/UserProfileBox.vue';
import AppCaloryChartVue from '../components/ProfilePageComponents/CaloryChart/CaloryChart.vue';
import UserMealList from '../components/ProfilePageComponents/DailyMealList/UserMealList.vue';
import AppNewDayButtonVue from '../components/ProfilePageComponents/UserProfileBox/AppNewDayButton.vue';
import useMealsStore from '@/stores/meals';
import {onBeforeMount, ref} from 'vue';
import useUserStore from '@/stores/user';
import ModalChangeUserData from '../components/ProfilePageComponents/UserProfileBox/ModalChangeUserData.vue';

export default {
  name: 'ProfileView',
  components: {
    UserProfileBox,
    AppCaloryChartVue,
    UserMealList,
    AppNewDayButtonVue,
    ModalChangeUserData,
  },
  setup() {
    const useUser = useUserStore();
    const useMeal = useMealsStore();
    const showModalUserEditProfile = ref(false);

    onBeforeMount(async () => {
     await useUser.downloadUserData();
     await useMeal.getUserMeal();
    });

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
    .box-pc {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }
}
@media screen and (min-width: 1200px) {
  .profile-view {
    .box-pc {
      width: 100%;
      gap: 10px;
      justify-items: center;
      grid-template-areas: 'char . list';
    }
    &__top {
      display: flex;
      justify-content: center;
      gap: 100px;
    }
  }
}
</style>
