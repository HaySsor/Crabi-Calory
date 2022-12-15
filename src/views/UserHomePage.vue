<template>
  <section>
    <div class="home">
      <router-view v-slot="{Component}">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
    <AppHomePageNavbarVue />
  </section>
</template>

<script>
import AppHomePageNavbarVue from '../components/AppHomePageNavbar.vue';

export default {
  name: 'UserHomePage',
  components: {AppHomePageNavbarVue},
};
</script>

<style lang="scss" scoped>
.home-view {
  padding: 10px;
}
</style>
