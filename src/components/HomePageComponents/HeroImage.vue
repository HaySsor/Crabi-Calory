<template>
  <div class="hero">
    <h1 class="hero__title">Crabi <span class="color-orange">Calory</span></h1>
    <div class="hero__img">
      <img src="/icons/crab.png" alt="Logo" class="hero__img-photo" />
      <div class="shadow"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'HeroImage',
});
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  &__title {
    position: relative;
    font-size: 3.2rem;
    font-family: 'Nerko One', cursive;
  }
  &__img {
    position: relative;
    width: 50%;
    max-width: 500px;
    bottom: -50px;
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
@media screen and (min-width: 1200px) {
  .hero {
    justify-content: center;
    &__title {
      top: -20px;
      font-size: 5rem;
      width: 40%;
    }
    &__img {
      width: 300px;
      right: 20px;
      top: 30px;
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
}
</style>
