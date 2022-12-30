<template>
  <div class="modal">
    <div class="shadow" @click="closeModal"></div>
    <div class="form">
      <i @click="closeModal" class="fas fa-times-circle form__exit"></i>
      <h3 class="form__name">{{ picketMeal.name }}</h3>
      <div class="form__box">
        <span class="form__box-name">Calories</span>
        <span class="form__box-info green">{{ kcal }}</span>
      </div>
      <div class="form__box">
        <span class="form__box-name">Carbohydrates</span>
        <span class="form__box-info orange">{{ carb }}</span>
      </div>
      <div class="form__box">
        <span class="form__box-name">Protein</span>
        <span class="form__box-info blue">{{ protein }}</span>
      </div>
      <div class="form__box">
        <span class="form__box-name">Fat</span>
        <span class="form__box-info red">{{ fat }}</span>
      </div>

      <label class="form__label"> How many gram ?</label>
      <input class="form__input" type="text" v-model="times" />
      <div class="form__alert" v-if="message">
        <span>Meal added <i class="fas fa-check-circle"></i></span>
      </div>

      <button class="form__add" @click="addToDailyList" :disabled="message">
        Add
      </button>
    </div>
  </div>
</template>

<script>
import {ref, computed} from 'vue';
import useMealStore from '@/stores/meals';
import AppModal from '@/components/AppModal.vue';

export default {
  name: 'ModalAddMeal',
  components: {AppModal},
  props: {
    picketMeal: {
      required: true,
    },
    closeModal: {
      required: true,
    },
  },
  setup(props) {
    const message = ref(false);
    const times = ref(100);
    const useMeal = useMealStore();

    const kcal = computed(() => {
      let k = props.picketMeal.kcal;
      let sum = parseInt(k) * (times.value / 100);
      return Math.floor(sum);
    });
    const carb = computed(() => {
      let k = props.picketMeal.carbohydrates;
      let sum = parseInt(k) * (times.value / 100);
      return Math.floor(sum);
    });
    const protein = computed(() => {
      let k = props.picketMeal.protein;
      let sum = parseInt(k) * (times.value / 100);
      return Math.floor(sum);
    });
    const fat = computed(() => {
      let k = props.picketMeal.fat;
      let sum = parseInt(k) * (times.value / 100);
      return Math.floor(sum);
    });

    function addToDailyList() {
      const meal = {
        name: props.picketMeal.name,
        kcal: kcal,
        carbohydrates: carb,
        protein: protein,
        fat: fat,
        id: props.picketMeal.id,
        idD: Math.floor(Math.random() * 200),
      };

      message.value = true;
      useMeal.addDailyMeal(meal);

      setTimeout(()=>{
        props.closeModal()
      },500)
    }

    return {
      times,
      kcal,
      carb,
      protein,
      fat,
      message,
      addToDailyList,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    width: 80%;
    height: 350px;
    background-color: #f9faf7ff;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    z-index: 10;
    gap: 10px;
    position: relative;
    &__name {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    &__box {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 0 10px;
      &-name {
        font-size: 1.6rem;
        flex: 1;
      }
      &-info {
        flex: 0.5;
        font-size: 1.8rem;
        text-align: center;
      }
      .green {
        color: rgb(12, 214, 133);
      }
      .orange {
        color: orange;
      }
      .blue {
        color: rgb(54, 174, 213);
      }
      .red {
        color: tomato;
      }
    }
    &__label {
      font-size: 1.5rem;
    }
    &__input {
      border: 1px solid black;
      border-radius: 20px;
      padding: 10px;
      text-align: center;
      font-size: 1.4rem;
    }
    &__add {
      padding: 15px 40px;
      margin-top: 10px;
      background-color: #e2882f;
      border: none;
      color: white;
      border-radius: 25px;
      transition: background 0.3s;

      &:hover {
        background-color: #785532;
      }

      &:disabled {
        background-color: grey;
      }
    }
    &__alert {
      position: absolute;
      bottom: -15px;
      padding: 10px 20px;
      font-size: 1.6rem;
      background-color: lightgreen;
      color: grey;
      border-radius: 25px;
    }
    &__exit {
      position: absolute;
      right: 20px;
      font-size: 2rem;
      color: tomato;
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.567);
  }
}
</style>
