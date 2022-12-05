<template>
  <nav class="nav">
    <ul class="nav__logo">
      <li class="nav__logo-box">
        <img src="/icons/crab.png" alt="Logo" class="nav__logo-box-img" />
        <span class="nav__logo-box-name"
          >Crabi <span class="color-orange">Calory</span></span
        >
      </li>
      <li v-if="userStore.userLoggedIn">
        <RouterLink :to="{name: 'userHomePage'}">
          <App-icon
            icon="material-symbols:home"
            class="icon"
            width="40"
            height="30" />
        </RouterLink>
      </li>
      <li class="nav__logo-login" v-else>
        <RouterLink :to="{name: 'login'}">
          <App-icon class="icon" icon="mdi:user" width="40" height="30" />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import {mapStores} from 'pinia';
import useUserStore from '@/stores/user';
export default {
  name: 'NavbarHomePage',
  computed: {
    ...mapStores(useUserStore),
  },
};
</script>

<style lang="scss" scoped>
.nav {
  padding: 10px;
  padding-left: 20px;
  display: flex;
  &__logo {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &-box {
      display: flex;
      align-items: center;
      gap: 5px;
      &-img {
        height: 30px;
        width: 30px;
      }
      &-name {
        font-weight: bold;
        font-size: 1.7rem;
        font-family: 'Nerko One', cursive;
      }
    }
    &-login {
      padding: 0px 15px;
      .icon {
        color: #e2882f;
      }
    }
  }
}
</style>
