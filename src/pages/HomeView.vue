<template>
  <div class="wrapper">
    <section class="home">
      <HomePageNavbar :userStore="userStore" />
      <HeroImage />
      <HomeInfo :userStore="userStore" />
    </section>
  </div>
</template>

<script lang="ts">
import HomePageNavbar from '../components/HomePageComponents/HomePageNavbar.vue';
import useUserStore from '../stores/user';
import HeroImage from '../components/HomePageComponents/HeroImage.vue';
import HomeInfo from '../components/HomePageComponents/HomeInfo.vue';
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'HomeView',
  components: {HomePageNavbar, HeroImage, HomeInfo},
  setup() {
    const userStore = useUserStore();
    return {userStore};
  },
});
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  min-height: 100dvh;
  min-height: 100vh;
}
</style>
