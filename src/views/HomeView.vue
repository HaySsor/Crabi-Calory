<template>
  <section class="home">
    <div class="wrapper">
      <NavbarHomePage />
      <div class="hero">
        <h1 class="hero__title">
          Crabi <span class="color-orange">Calory</span>
        </h1>
        <div class="hero__img">
          <img src="/icons/crab.png" alt="Logo" class="hero__img-photo" />
          <div class="shadow"></div>
        </div>
      </div>
      <article class="info">
        <p class="info__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
          accusamus veritatis et incidunt. Harum, cumque. Fugiat exercitationem
          architecto sit quae voluptate pariatur, iure eligendi? Expedita
          blanditiis aliquid animi! Expedita repudiandae ipsam deserunt tempore
          reprehenderit quaerat accusantium molestiae nam ea dolor.
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
          <RouterLink :to="{name: 'login'}">
            <button class="info__box-button">Sign in / Login</button>
          </RouterLink>
        </div>
        <div class="info__box" v-else>
          <RouterLink :to="{name: 'profile'}">
            <button class="info__box-button">Enter</button>
          </RouterLink>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import NavbarHomePage from '@/components/NavbarHomePage.vue';
import useUserStore from '@/stores/user';
export default {
  name: 'HomeView',
  components: {NavbarHomePage},
  setup() {
    const userStore = useUserStore();

    return {userStore};
  },
};
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  &__title {
    position: relative;
    top: -20px;
    font-size: 3.2rem;
    width: 40%;
    font-family: 'Nerko One', cursive;
  }
  &__img {
    position: relative;
    width: 40%;
    top: 30px;
    z-index: 10;
    &-photo {
      width: 100%;
    }
    .shadow {
      position: absolute;
      bottom: 2px;
      z-index: -1;
      width: 100%;
      height: 30px;
      background-color: rgba(0, 0, 0, 0.085);
      border-radius: 50%;
    }
  }
}
.info {
  background-color: #f4f4f4;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  padding: 20px;
  padding-top: 40px;
  font-size: 1.6rem;
  width: 100%;
  height: calc(100vh - 159px - 70px);
  &__box {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    &-button {
      padding: 15px 50px;
      border: none;
      border-radius: 20px;
      background-color: #e2882f;
      color: white;
      font-size: 1.7rem;
      cursor: pointer;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  &__title {
    text-align: center;
    margin-top: 10px;
    font-family: 'Nerko One', cursive;
    font-size: 1.8rem;
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
      background-color: #e2882f79;
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
        animation: crab-move1 3s infinite;
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
        animation: crab-move2 3s infinite;
      }
    }
  }
}

@keyframes crab-move1 {
  0% {
    transform: translateX(0) rotate(10deg);
  }
  25% {
    transform: translateX(15px) rotate(-10deg);
  }
  50% {
    transform: translateX(30px) rotate(10deg);
  }
  75% {
    transform: translateX(15px) rotate(-10deg);
  }
  100% {
    transform: translateX(0) rotate(10deg);
  }
}
@keyframes crab-move2 {
  0% {
    transform: translateX(0) rotate(-10deg);
  }
  25% {
    transform: translateX(-15px) rotate(10deg);
  }
  50% {
    transform: translateX(-30px) rotate(-10deg);
  }
  75% {
    transform: translateX(-15px) rotate(10deg);
  }
  100% {
    transform: translateX(0) rotate(-10deg);
  }
}

@media (min-height: 680px) {
  .info {
    &__title {
      margin-top: 50px;
    }
    &__box {
      margin-top: 30px;
    }
  }
  .hero {
    &__title {
      position: relative;
      top: -20px;
      font-size: 3.2rem;
      width: 40%;
      font-family: 'Nerko One', cursive;
    }
    .color-orange {
      display: flex;
    }
  }
}
@media screen and (min-width: 454px) {
  .info {
    height: calc(100vh - 331px - 50px);
  }
}

@media screen and (min-width: 1200px) {
  .hero {
    &__title {
      top: -20px;
      font-size: 5rem;
      width: 40%;
    }
    &__img {
      width: 300px;
      top: 30px;
      transform: translateX(-10px);
      z-index: 1;
      &-photo {
        width: 100%;
      }
      .shadow {
        bottom: 2px;
        left: -10px;
        bottom: -10px;
        z-index: -1;
        width: 320px;
        height: 40px;
      }
    }
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    height: 400px;
    justify-content: center;
    width: 800px;
    margin: 0 auto;
    position: relative;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.614);

    &::after,
    &::before {
      position: absolute;
      content: '';
      width: 400px;
      height: 400px;
      background-color: #121111;
      top: 0px;
      border-radius: 35px;
      z-index: 10;
    }

    &::before {
      left: -100px;
      animation: entry-left 10s forwards;
    }
    &::after {
      right: -100px;
      transform: rotate(0deg);
      animation: entry-right 10s forwards;
    }
    &__text {
      width: 100%;
    }
    &__title {
      text-align: center;
      margin-top: 10px;
      font-family: 'Nerko One', cursive;
      font-size: 1.8rem;
      margin-top: 30px;
      width: 100%;
    }
    &__family {
      width: 100%;
      min-width: 100%;
      display: flex;
      justify-content: center;
      .flor {
        width: 45%;
        height: 5px;
        position: absolute;
        bottom: -2px;
        background-color: #e2882f79;
        border-radius: 20px;
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

@keyframes entry-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
    z-index: 5;
  }
  20% {
    transform: translateX(25%);
    opacity: 1;
    z-index: 5;
  }
  40% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: translateX(20%);
    opacity: 1;
    z-index: -1;
  }
  80% {
    transform: translateX(0) rotate(-30deg);
    opacity: 1;
    z-index: -1;
  }
  100% {
    transform: translateX(0) rotate(-30deg);
    opacity: 0.3;
    z-index: -1;
  }
}
@keyframes entry-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
    z-index: 5;
  }
  20% {
    transform: translateX(-25%);
    opacity: 1;
    z-index: 5;
  }
  40% {
    transform: translateX(100%);
    opacity: 0;
  }
  50% {
    transform: translateX(-20%);
    opacity: 1;
    z-index: -1;
  }
  80% {
    transform: translateX(0) rotate(30deg);
    opacity: 1;
    z-index: -1;
  }
  100% {
    transform: translateX(0) rotate(30deg);
    opacity: 0.3;
    z-index: -1;
  }
}
</style>
