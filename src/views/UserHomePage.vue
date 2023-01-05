<template>
  <section>
    <div class="wrapper2">
      <div class="home">
        <router-view v-slot="{Component}">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
      <AppHomePageNavbarVue />
    </div>
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

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.3s ease-in;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 0.3s ease-in;
}
@media screen and (min-width: 1200px) {
  .wrapper2 {
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 100px;
  }
}
</style>
