<template>
  <div class="profile-view">
    <div class="profile-view__top">
      <AppProfileSquerVue :personalData="user" />
    </div>
    <AppCaloryChartVue  :personalData="user"/>
  </div>
</template>

<script>
import {ref} from 'vue';
import getUser from '@/composables/getUser';
import AppProfileSquerVue from '../../components/AppProfileSquer.vue';
import AppCaloryChartVue from '../../components/AppCaloryChart.vue';

export default {
  name: 'ProfileView',
  components: {AppProfileSquerVue, AppCaloryChartVue},
  setup() {
    const {user, getUserData} = getUser();
    getUserData();
    console.log(typeof user);
    return {user};
  },
};
</script>

<style lang="scss" scoped>
.profile-view {
  padding: 10px;
  &__top {
    display: flex;
  }
}
</style>
