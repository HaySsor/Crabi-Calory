<template>
  <li class="item">
    <img class="img" src="/icons/crab.png" alt="" aria-hidden="true" />
    <div class="item-cont">
      <h3>{{ productName }}</h3>
      <i
        @click="
          () => {
            removeMeal(product);
          }
        "
        class="fas fa-trash-alt"></i>
    </div>
  </li>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import type {MealObj} from '../../../types/interfaces';
import type {PropType} from 'vue';

export default defineComponent({
  name: 'UserMealListItem',
  props: {
    useMeal: {
      required: true,
      type: Object,
    },
    product: {
      required: true,
      type: Object as PropType<MealObj>,
    },
  },
  setup(props) {
    const productName = computed(() => props.product.meal.name);
    async function removeMeal(value: MealObj) {
      await props.useMeal.removeMealFromDaily(value);
    }
    return {removeMeal, productName};
  },
});
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 10px;
  border: 1px solid $secColor;
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
      color: $textDecorate;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>
