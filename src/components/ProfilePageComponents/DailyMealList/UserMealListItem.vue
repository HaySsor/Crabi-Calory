<template>
  <li class="item">
    <img class="img" src="/icons/crab.png" alt="" aria-hidden="true" />
    <div class="item-cont">
      <h3>{{ product.meal.name }}</h3>
      <i @click="removeMeal(product)" class="fas fa-trash-alt"></i>
    </div>
  </li>
</template>

<script>
export default {
  name: 'UserMealListItem',
  props: {
    useMeal: {
      required: true,
    },
    product: {
      required: true,
    },
  },
  setup(props) {
    async function removeMeal(value) {
      await props.useMeal.removeMealFromDaily(value);
    }
    return {removeMeal};
  },
};
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 10px;
  background-color: $secColor;
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
      color: #353535;
    }
    i {
      font-size: 1.6rem;
      color: $primeColor;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
@media screen and (min-width: 1200px) {
}
</style>
