<template>
  <WindowComponent class="box">
    <header class="box__top">
      <ComponentTitle>Your Daily Meal</ComponentTitle>
    </header>
    <div class="box__list">
      <Transition name="face" mode="out-in">
        <TransitionGroup
          name="list"
          tag="ul"
          v-if="listMeal.length > 0"
          class="box__list-ul">
          <UserMealListItem
            v-for="product in listMeal"
            :key="product.meal.id"
            :product="product"
            :useMeal="useMeal" />
        </TransitionGroup>
        <UserMealListEmpty v-else />
      </Transition>
    </div>
  </WindowComponent>
</template>

<script lang="ts">
import UserMealListItem from './UserMealListItem.vue';
import UserMealListEmpty from './UserMealListEmpty.vue';
import WindowComponent from '../../styleComponents/WindowComponent.vue';
import {computed} from 'vue';
import ComponentTitle from '../../styleComponents/ComponentTitle.vue';
import {defineComponent} from 'vue';
import type {MealObj} from '../../../types/interfaces';

export default defineComponent({
  name: 'UserMealList',
  components: {
    UserMealListItem,
    UserMealListEmpty,
    WindowComponent,
    ComponentTitle,
  },
  props: {
    useMeal: {
      required: true,
      type: Object,
    },
  },
  setup(props) {
    const listMeal = computed<MealObj[]>(() => {
      const list = [...props.useMeal.useDailyMeals];
      return list;
    });
    return {listMeal};
  },
});
</script>

<style lang="scss" scoped>
.box {
  .img {
    display: none;
  }
  &__top {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__list {
    overflow: auto;
    height: 325px;

    &-ul {
      list-style: none;
      padding: 10px;
    }
  }
}
.face-enter-from {
  opacity: 0;
}
.face-enter-to {
  opacity: 1;
}
.face-enter-active {
  transition: all 0.3s ease-in;
}
.face-leave-from {
  opacity: 1;
}
.face-leave-to {
  opacity: 0;
}
.move-leave-active {
  transition: all 0.3s ease-in;
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.7s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  background-color: tomato;
  transform: rotateZ(10deg) translateX(300px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
