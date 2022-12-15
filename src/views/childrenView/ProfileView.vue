<template>
  <div>
    <h2>Profile</h2>

    {{ user }}
  </div>
</template>

<script>
import {ref} from 'vue';
import getUser from '@/composables/getUser';

export default {
  name: 'ProfileView',

  setup() {
    const {user, getUserData} = getUser();
    getUserData();
    return {user};
  },
};
</script>

<style lang="scss" scoped></style>
