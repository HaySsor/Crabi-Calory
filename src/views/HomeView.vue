<template>
  <section class="home">
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
.home {
  overflow: hidden;
  height: 100vh;
}

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
      width: 150px;
      height: 30px;
      background-color: rgba(0, 0, 0, 0.085);
      border-radius: 50%;
    }
  }
}

.info {
  background-color: #f4f4f4;
  border-radius: 35px;
  height: 100%;
  padding: 20px;
  padding-top: 40px;
  font-size: 1.6rem;
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
    justify-content: center;
    position: relative;
    height: 70px;
    .flor {
      width: 300px;
      height: 5px;
      position: absolute;
      bottom: -2px;
      background-color: #e2882f79;
      border-radius: 20px;
    }
    &-crab {
      width: 20%;
      position: absolute;
      &-crab1 {
        left: 20px;
      }
      &-crab2 {
        left: 70px;
        z-index: 4;
      }
      &-crab1,
      &-crab2 {
        animation: crab-move1 3s infinite;
      }
      &-crab3 {
        right: 70px;
        z-index: 4;
      }
      &-crab4 {
        right: 20px;
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
</style>
