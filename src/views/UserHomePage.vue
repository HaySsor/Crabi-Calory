<template>
  <div>
    <h1>UserHomePage</h1>

    <button @click.prevent="singOut">logOut</button>
  </div>
</template>

<script>
import {mapStores} from 'pinia';
import useUserStore from '@/stores/user';

export default {
  name: 'UserHomePage',
  computed: {
    ...mapStores(useUserStore),
  },
  methods: {
    singOut() {
      this.userStore.singOutUser();
      this.$router.push({name: 'home'});
    },
  },
};
</script>

<style lang="scss" scoped></style>
