<template>
  <li class="item">
    <img class="img" src="/icons/crab.png" alt="" aria-hidden="true" />
    <div class="item-cont">
      <h3>{{ meal.name }}</h3>
      <i
        @click="useMeal.removeMealFromDaily(meal)"
        class="fas fa-trash-alt"></i>
    </div>
  </li>
</template>

<script>
export default {
  name: 'AppUserMealListItem',
  props: {
    useMeal: {
      required: true,
    },
    meal: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 10px;
  border: 2px solid rgba(144, 238, 144, 0.416);
  width: 100%;
  padding: 10px 15px;
  border-radius: 25px;
  position: relative;
  z-index: 10;

  .img {
    width: 20px;
    position: absolute;
    z-index: -1;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  &-cont {
    display: flex;
    justify-content: space-around;
    h3 {
      font-size: 1.6rem;
      width: 65%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    i {
      font-size: 1.6rem;
      color: tomato;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>
