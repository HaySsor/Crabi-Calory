<template>
  <div>
    <div class="box">
      <ul class="box__list">
        <MealListFromFirebaseItem
          v-for="meal in filterList"
          :key="meal.name"
          :meal="meal"
          :openModal="openModal" />
      </ul>
      <img
        src="/icons/crab.png"
        alt=""
        aria-hidden="true"
        class="img img1" />
      <img
        src="/icons/crab.png"
        alt=""
        aria-hidden="true"
        class="img img2" />
      <img
        src="/icons/crab.png"
        alt=""
        aria-hidden="true"
        class="img img3" />
      <img
        src="/icons/crab.png"
        alt=""
        aria-hidden="true"
        class="img img4" />
    </div>
    <div class="box__search">
      <i class="fas fa-search icon"></i>
      <input type="search" placeholder="Search Meal" v-model="searchMeal" />
    </div>
    <ModalAddMeal
      v-if="modal"
      :picketMeal="picketMeal"
      :closeModal="closeModal" />
  </div>
</template>

<script>
import {ListMealFormFirebase} from '@/composables/getMeal';
import ModalAddMeal from './ModalAddMeal.vue';
import MealListFromFirebaseItem from './MealListFromFirebaseItem.vue';
import {ref, onMounted} from 'vue';
import {computed} from 'vue';
export default {
  name: 'MealListFromFirebase',
  components: {MealListFromFirebaseItem, ModalAddMeal},
  setup() {
    // get Meals from firebase
    const list = ref([]);
    async function getData() {
      const {mealsList} = await ListMealFormFirebase();
      list.value = [...mealsList.value];
    }
    onMounted(() => {
      getData();
    });

    // Modal
    const modal = ref(false);
    const picketMeal = ref('');

    function openModal(item) {
      picketMeal.value = Object.assign(item);
      modal.value = true;
    }
    function closeModal() {
      modal.value = false;
      picketMeal.value = '';
    }
    //search Meal
    const searchMeal = ref('');

    const filterList = computed(() => {
      return list.value.filter((item) => {
        return item.name.toLowerCase().includes(searchMeal.value.toLowerCase());
      });
    });

    return {
      list,
      openModal,
      modal,
      picketMeal,
      closeModal,
      searchMeal,
      filterList,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  &__list {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 10px;
    height: 410px;
    overflow: scroll;
    border: 4px solid #ffff;
    background-color: rgb(157, 212, 172);
    padding: 10px;
    border-radius: 30px;
    &::after,
    &::before {
      position: absolute;
      content: '';
      width: 9%;
      height: 90%;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      background-color: #e2882ffb;
      border: 4px solid #ffff;
    }
    &::before {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      left: -8%;
    }
    &::after {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      right: -8%;
    }
  }
  &__search {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    input {
      padding: 8px;
      border-radius: 20px;
      border: none;
      width: 70%;
    }
    .icon {
      font-size: 1.8rem;
      margin-right: 5px;
    }
  }
  .img {
    position: absolute;
    width: 30px;
    z-index: -1;
  }
  .img1 {
    top: 30px;
    left: -20px;
    animation: move-crab-top-left 3s 1.5s forwards;
  }
  .img2 {
    top: -3px;
    right: -20px;
    animation: move-crab-top-right 3s forwards;
  }

  .img3 {
    bottom: -5px;
    left: -20px;
    transform: rotate(-145deg);
  }
  .img4 {
    bottom: -5px;
    right: -20px;
    transform: rotate(145deg);
  }
}
@media screen and (min-width: 454px) {
  .box {
    &__list {
      &::after,
      &::before {
        content: '';
        width: 30px;
      }
      &::before {
        left: -28px;
      }
      &::after {
        right: -28px;
      }
    }
    &__search {
      input {
        width: 70%;
        max-width: 300px;
      }
      .icon {
        font-size: 2rem;
        margin-right: 5px;
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .box {
    &__list {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-content: start;
      height: 300px;
      &::before {
        left: -25px;
      }
      &::after {
        right: -25px;
      }
    }
    &__search {
      input {
        width: 70%;
        max-width: 300px;
      }
      .icon {
        font-size: 2rem;
        margin-right: 5px;
      }
    }
  }
}
</style>
