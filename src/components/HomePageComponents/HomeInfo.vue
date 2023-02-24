<template>
  <article class="info">
    <p class="info__text">
      Welcome to Crab Calory! This app is designed to help you keep track of
      your daily caloric intake and reach your health and fitness goals. With a
      user-friendly interface, it's easy to log your meals and snacks. You can
      also track your progress over time. Whether you're trying to lose weight,
      build muscle, or simply maintain a balanced diet, Crab Calory is here to
      help. Let's get started!
    </p>
    <!-- Dancing Crab section -->
    <h3 class="info__title">Join our Crab family</h3>
    <div class="info__family">
      <img
        src="/icons/crab.png"
        alt="Logo"
        class="info__family-crab info__family-crab-crab1" />
      <img
        src="/icons/crab.png"
        alt="Logo"
        class="info__family-crab info__family-crab-crab2" />
      <img
        src="/icons/crab.png"
        alt="Logo"
        class="info__family-crab info__family-crab-crab3" />
      <img
        src="/icons/crab.png"
        alt="Logo"
        class="info__family-crab info__family-crab-crab4" />

      <div class="flor"></div>
    </div>
    <div class="info__box" v-if="!userStore.userLoggedIn">
      <RouterLink data-login :to="{name: 'login'}">
        <AppButton class="text1">Sign in / Login</AppButton>
      </RouterLink>
    </div>
    <div class="info__box" v-else>
      <RouterLink data-profile :to="{name: 'profile'}">
        <AppButton class="text2">Enter</AppButton>
      </RouterLink>
    </div>
  </article>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppButton from '../styleComponents/AppButton.vue';
export default defineComponent({
  name: 'HomeInfo',
  props: {
    userStore: {
      required: true,
      type: Object
    },
  },
  components: {AppButton},
});
</script>

<style lang="scss" scoped>
.info {
  background-color: $primeColor;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  padding: 20px;
  padding-top: 40px;
  font-size: 1.6rem;
  width: 100%;
  /* height: calc(100vh - 159px - 70px); */
  &__box {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
  &__title {
    text-align: center;
    margin-top: 10px;
    font-family: 'Nerko One', cursive;
    font-size: 2.2rem;
    margin-top: 30px;
  }
  &__family {
    display: flex;
    margin-top: 10px;
    gap: 10px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    height: 70px;
    max-width: 375px;
    .flor {
      width: 100%;
      height: 5px;
      position: absolute;
      bottom: -2px;
      background-color: $secColor;
      border-radius: 20px;
    }
    &-crab {
      width: 70px;
      position: absolute;
      &-crab1 {
        left: 5%;
      }
      &-crab2 {
        left: 20%;
        z-index: 4;
      }
      &-crab1,
      &-crab2 {
        animation: crab-move1 4s infinite;
      }
      &-crab3 {
        right: 20%;
        z-index: 4;
      }
      &-crab4 {
        right: 5%;
      }
      &-crab3,
      &-crab4 {
        animation: crab-move2 4s infinite;
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .info {
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.614);
    border-radius: 35px;

    &::after,
    &::before {
      position: absolute;
      content: '';
      width: 400px;
      height: 400px;

      top: 0px;
      border-radius: 35px;
      z-index: 10;
      background: $secColor;
    }

    &::before {
      left: -100px;
      animation: entry-left 2s forwards;
    }
    &::after {
      right: -100px;
      transform: rotate(0deg);
      animation: entry-right 2s forwards;
    }
    &__text {
      width: 100%;
    }
    &__title {
      width: 100%;
    }
    &__family {
      width: 100%;
      min-width: 100%;
      display: flex;
      justify-content: center;
      .flor {
        width: 45%;
      }

      &-crab {
        width: 70px;
        &-crab1 {
          left: 390px;
        }
        &-crab2 {
          left: 440px;
        }
        &-crab3 {
          right: 440px;
        }
        &-crab4 {
          right: 390px;
        }
      }
    }
  }
}
</style>
