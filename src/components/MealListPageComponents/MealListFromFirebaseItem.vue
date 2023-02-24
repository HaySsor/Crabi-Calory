<template>
  <li class="item">
    <h3>{{ meal.name }}</h3>
    <AppButton @click="openModalHandler" className="btn">Add meal</AppButton>
  </li>
</template>

<script lang="ts">
import AppButton from '../styleComponents/AppButton.vue';
import {defineComponent} from 'vue';
import type {PropType} from 'vue';
import type {Meal} from '../../types/interfaces';


export default defineComponent({
  name: 'MealListFromFirebaseItem',
  components: {AppButton},
  props: {
    meal: {
      required: true,
      type: Object as PropType<Meal>,
    },
    openModal: {
      required: true,
      type: Function,
    },
  },
  setup(props) {
    const openModalHandler = () => {
      props.openModal(props.meal);
    };

    return {openModalHandler};
  },
});
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
    align-items: center;
    width: 48%;
  }
}
</style>
