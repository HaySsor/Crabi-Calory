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
import {mapWritableState} from 'pinia';
import useUserStore from '@/stores/user';
import {auth} from '@/includes/firebase';
export default {
  name: 'MainApp',
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn']),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>
