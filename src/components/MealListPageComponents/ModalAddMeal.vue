<template>
  <div class="modal">
    <div class="shadow" @click="handlerCloseModal"></div>
    <div class="form">
      <i @click="handlerCloseModal" class="fas fa-times-circle form__exit"></i>
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
        ref="inputEl"
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

<script lang="ts">
import {ref, computed, onMounted} from 'vue';
import useMealStore from '../../stores/meals';
import AppButton from '../styleComponents/AppButton.vue';
import {defineComponent} from 'vue';
import type {PropType} from 'vue';
import type {Meal, MealObj} from '../../types/interfaces';

export default defineComponent({
  name: 'ModalAddMeal',
  components: {AppButton},

  props: {
    picketMeal: {
      required: true,
      type: Object as PropType<Meal>,
    },
    closeModal: {
      required: true,
      type: Function,
    },
  },
  setup(props) {
    const message = ref<number>(0);
    const times = ref<number>(100);
    const useMeal = useMealStore();

    function calculateSum(name: string) {
      let k = props.picketMeal[name as keyof Meal];
      let sum: number = 0;
      if (typeof k === 'string') {
        sum = parseFloat(k) * (times.value / 100);
      } else if (typeof k === 'number') {
        sum = k * (times.value / 100);
      }
      return sum.toFixed(1);
    }

    const kcal = computed(() => {
      return calculateSum('kcal');
    });
    const carb = computed(() => {
      return calculateSum('carbohydrates');
    });
    const protein = computed(() => {
      return calculateSum('protein');
    });
    const fat = computed(() => {
      return calculateSum('fat');
    });

    function addToDailyList() {
      if (times.value > 0) {
        const meal: MealObj = {
          idD: Math.floor(Math.random() * 200),
          meal: {
            name: props.picketMeal.name,
            kcal: parseInt(kcal.value),
            carbohydrates: parseInt(carb.value),
            protein: parseInt(protein.value),
            fat: parseInt(fat.value),
            id: props.picketMeal.id,
          },
        };
        message.value = 1;
        useMeal.addDailyMeal(meal);

        setTimeout(() => {
          props.closeModal();
        }, 500);
      } else {
        message.value = 2;
      }
    }
    const handlerCloseModal = () => {
      props.closeModal();
    };

    const inputEl = ref();
    onMounted(() => {
      if (typeof inputEl !== null) {
        inputEl.value.focus(); // the DOM node
      }
    });

    return {
      times,
      kcal,
      carb,
      protein,
      fat,
      message,
      addToDailyList,
      inputEl,
      handlerCloseModal
    };
  },
});
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
