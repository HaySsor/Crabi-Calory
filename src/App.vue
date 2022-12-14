<template>
  <main>
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
</template>

<script>
import useUserStore from '@/stores/user';
import {auth} from '@/includes/firebase';
export default {
  name: 'MainApp',
  setup() {
    const userStore = useUserStore();

    if (auth.currentUser) {
      userStore.userLoggedIn = true;
    }
  },
};
</script>
