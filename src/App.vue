<template>
  <main>
    <div class="wrapper">
      <router-view v-slot="{Component}">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </main>
</template>

<script lang="ts">
import useUserStore from './stores/user';
import {auth} from './includes/firebase';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'MainApp',
  setup() {
    const userStore = useUserStore();

    if (auth.currentUser) {
      userStore.userLoggedIn = true;
    }
  },
});
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
}

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
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
}
</style>
