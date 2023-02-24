<template>
  <div class="empty">
    <div class="empty__imgs">
      <img class="img img1" src="/icons/crab.png" alt="" aria-hidden="true" />
      <img class="img img2" src="/icons/crab.png" alt="" aria-hidden="true" />
      <img class="img img3" src="/icons/crab.png" alt="" aria-hidden="true" />
    </div>
    <h3 class="empty__info">Empty List</h3>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'UserMealListEmpty',
});
</script>

<style lang="scss" scoped>
.empty {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__imgs {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__info {
    opacity: 0.3;
    font-size: 1.8rem;
  }
  .img {
    width: 100px;
    filter: saturate(0.3);
    opacity: 0.3;
  }
  .img1 {
    transform: rotate(-10deg);
  }
  .img2 {
    transform: translateY(-20px);
  }
  .img3 {
    transform: rotate(10deg);
  }
}
</style>
