<template>
  <nav class="nav">
    <ul class="nav__logo">
      <li class="nav__logo-box">
        <img src="/icons/crab.png" alt="Logo" class="nav__logo-box-img" />
        <span class="nav__logo-box-name"
          >Crabi <span class="color-orange">Calory</span></span
        >
      </li>
      <li v-if="userLogged">
        <RouterLink :to="{name: 'profile'}">
          <i class="fas fa-home color-orange icon"></i>
        </RouterLink>
      </li>
      <li class="nav__logo-login" v-else>
        <RouterLink :to="{name: 'login'}">
          <i class="fas fa-user color-orange icon"></i>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>


<script lang="ts">
import {computed} from 'vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'HomePageNavbar',
  props: {
    userStore: {
      required: true,
      type: Object
    },
  },
  setup(props) {
    const userLogged = computed(() => {
      return props.userStore.userLoggedIn;
    });

    return {userLogged};
  },
});
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
      cursor: pointer;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
.icon {
  font-size: 2.3rem;
  margin-right: 10px;
  padding: 10px;
}
@media screen and (min-width: 454px) {
  .nav {
    &__logo {
      &-box {
        &-img {
          height: 50px;
          width: 50px;
        }
        &-name {
          font-weight: bold;
          font-size: 2.5rem;
          font-family: 'Nerko One', cursive;
        }
      }
      &-login {
        padding: 0px 15px;
      }
    }
  }
  .icon {
    font-size: 3rem;
  }
}
@media screen and (min-width: 1200px) {
  .nav {
    &__logo {
      &-box {
        margin-left: 20px;
        &-img {
          height: 70px;
          width: 70px;
        }
        &-name {
          font-size: 2.5rem;
        }
      }
      &-login {
        padding: 0px 15px;
      }
    }
  }
  .icon {
    font-size: 3.5rem;
  }
}
</style>
