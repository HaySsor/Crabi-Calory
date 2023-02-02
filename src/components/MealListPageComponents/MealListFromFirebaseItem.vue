<template>
  <li class="item">
    <h3>{{ meal.name }}</h3>
    <AppButton @click="openModal(meal)" className="btn">Add meal</AppButton>
  </li>
</template>

<script>
import AppButton from '../styleComponents/AppButton.vue';
export default {
  name: 'MealListFromFirebaseItem',
  components: {AppButton},
  props: {
    meal: {
      required: true,
    },
    openModal: {
      required: true,
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 10px 15px;
  border-radius: 30px;
  background-color: #ffff;
  transition: background 0.3s;

  h3 {
    font-size: 1.6rem;
    width: 65%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .btn {
    padding: 10px 15px;
    font-size: 1.4rem;
  }
}
@media screen and (min-width: 1200px) {
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    border-radius: 30px;
    background-color: #ffff;
    transition: background 0.3s;
    width: 48%;
  }
}
</style>
