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
      <input
        class="form__input"
        type="text"
        v-model="times"
        @keyup.enter="addToDailyList" />
      <div class="form__alert" v-if="message === 1">
        <span>Meal added <i class="fas fa-check-circle"></i></span>
      </div>
      <div class="form__alert form__alert-error" v-if="message === 2">
        <span>Please add gram <i class="far fa-times-circle"></i></span>
      </div>

      <AppButton
        class="form__add"
        @click="addToDailyList"
        :disabled="message == 1">
        Add
      </AppButton>
    </div>
  </div>
</template>

<script>
import {ref, computed} from 'vue';
import useMealStore from '@/stores/meals';
import AppButton from '../styleComponents/AppButton.vue';

export default {
  name: 'ModalAddMeal',
  components: {AppButton},

  props: {
    picketMeal: {
      required: true,
    },
    closeModal: {
      required: true,
    },
  },
  setup(props) {
    const message = ref(0);
    const times = ref(100);
    const useMeal = useMealStore();

    const kcal = computed(() => {
      let k = props.picketMeal.kcal;
      let sum = parseFloat(k) * (times.value / 100);
      return sum.toFixed(1);
    });
    const carb = computed(() => {
      let k = props.picketMeal.carbohydrates;
      let sum = parseFloat(k) * (times.value / 100);
      return sum.toFixed(1);
    });
    const protein = computed(() => {
      let k = props.picketMeal.protein;
      let sum = parseFloat(k) * (times.value / 100);
      return sum.toFixed(1);
    });
    const fat = computed(() => {
      let k = props.picketMeal.fat;
      let sum = parseFloat(k) * (times.value / 100);
      return sum.toFixed(1);
    });

    function addToDailyList() {
      if (times.value > 0) {
        const meal = {
          idD: Math.floor(Math.random() * 200),
          meal: {
            name: props.picketMeal.name,
            kcal: kcal.value,
            carbohydrates: carb.value,
            protein: protein.value,
            fat: fat.value,
            id: props.picketMeal.id,
          },
        };
        console.log(meal);
        message.value = 1;
        useMeal.addDailyMeal(meal);

        setTimeout(() => {
          props.closeModal();
        }, 500);
      } else {
        message.value = 2;
      }
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
  }
  &__alert {
    position: absolute;
    bottom: -15px;
    padding: 10px 20px;
    font-size: 1.6rem;
    background-color: lightgreen;
    color: grey;
    border-radius: 25px;

    &-error {
      background-color: tomato;
      color: white;
    }
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
@media screen and (min-width: 454px) {
  .form {
    width: 40%;
  }
}

@media screen and (min-width: 1200px) {
  .form {
    width: 25%;
    &__input {
      width: 50%;
    }

    &__add {
      padding: 15px 80px;
    }
  }
}
</style>
