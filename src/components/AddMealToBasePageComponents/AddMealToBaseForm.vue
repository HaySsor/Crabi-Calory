<template>
  <form class="form" @submit.prevent="verification">
    <div class="form__name">
      <label class="family-Nerko">Name</label>
      <input
        data-name
        type="text"
        v-model="form.name"
        :style="{
          borderColor: addMealValidationForm.name
            ? 'tomato'
            : 'rgb(115, 184, 152) ',
        }" />
      <p v-if="addMealValidationForm.name" class="error">Name can't be empty</p>
    </div>
    <div class="form__kcal">
      <label class="family-Nerko">Calory</label>
      <input
        data-calory
        type="number"
        min="0"
        inputmode="numeric"
        pattern="[0-9]*"
        title="Non-negative integral number"
        v-model="form.kcal"
        :style="{
          borderColor: addMealValidationForm.kcal
            ? 'tomato'
            : 'rgb(115, 184, 152) ',
        }" />
      <p v-if="addMealValidationForm.kcal" class="error">
        Calorie must be on 1 to 1000
      </p>
    </div>
    <div class="form__protein">
      <label class="family-Nerko">Protein</label>
      <input
        data-protein
        type="number"
        min="0"
        inputmode="numeric"
        pattern="[0-9]*"
        title="Non-negative integral number"
        v-model="form.protein"
        :style="{
          borderColor: addMealValidationForm.protein
            ? 'tomato'
            : 'rgb(115, 184, 152)',
        }" />
      <p v-if="addMealValidationForm.protein" class="error">
        Protein must be below 200
      </p>
    </div>
    <div class="form__fat">
      <label class="family-Nerko">Fat</label>
      <input
        data-fat
        type="number"
        min="0"
        inputmode="numeric"
        pattern="[0-9]*"
        title="Non-negative integral number"
        v-model="form.fat"
        :style="{
          borderColor: addMealValidationForm.fat
            ? 'tomato'
            : 'rgb(115, 184, 152) ',
        }" />
      <p v-if="addMealValidationForm.fat" class="error">
        Fat must be below 200
      </p>
    </div>
    <div class="form__carbohydrates">
      <label class="family-Nerko">Carbohydrates</label>
      <input
        data-carbohydrates
        type="number"
        min="0"
        inputmode="numeric"
        pattern="[0-9]*"
        title="Non-negative integral number"
        v-model="form.carbohydrates"
        :style="{
          borderColor: addMealValidationForm.carbohydrates
            ? 'tomato'
            : 'rgb(115, 184, 152)',
        }" />
      <p v-if="addMealValidationForm.carbohydrates" class="error">
        Carbohydrates must be below 600
      </p>
    </div>
    <div class="form__button">
      <AppButton>Add meal</AppButton>
    </div>
  </form>
  <LoadingModal
    :message="message"
    v-if="showModal"
    :passData="passData"
    :showModal="showModal"
    :closeModal="closeModal" />
</template>

<script lang="ts">
import {reactive, ref} from 'vue';
import {addMealToFireBase} from '../../composables/addMeal';
import LoadingModal from '../LoadingModal.vue';
import AppButton from '../styleComponents/AppButton.vue';
import {defineComponent} from 'vue';
import type {Meal, MealValidate} from '../../types/interfaces';

export default defineComponent({
  name: 'AddMealToBaseForm',
  components: {LoadingModal, AppButton},

  setup() {
    const addedMeal: Meal = reactive({
      name: '',
      kcal: 0,
      protein: 0,
      fat: 0,
      carbohydrates: 0,
    });
    const addMealValidationForm: MealValidate = reactive({
      name: false,
      kcal: false,
      protein: false,
      fat: false,
      carbohydrates: false,
    });
    const n = ref(0);
    const message = ref('Wait');
    const showModal = ref(false);
    const regInSubmission = ref(false);
    const passData = ref(true);

    const form: Meal = reactive({
      name: '',
      kcal: 0,
      protein: 0,
      fat: 0,
      carbohydrates: 0,
    });

    async function verification() {
      if (!form.name.match(/^[A-Za-z]+$/)) {
        addMealValidationForm.name = true;
        return;
      }
      addMealValidationForm.name = false;
      if (form.kcal <= 0 && form.kcal < 1000) {
        addMealValidationForm.kcal = true;
        return;
      }
      addMealValidationForm.kcal = false;

      if (form.protein > 200) {
        addMealValidationForm.protein = true;
        return;
      }
      addMealValidationForm.protein = false;
      if (form.fat > 200) {
        addMealValidationForm.fat = true;
        return;
      }
      addMealValidationForm.fat = false;
      if (form.carbohydrates > 600) {
        addMealValidationForm.carbohydrates = true;
        return;
      }
      addMealValidationForm.carbohydrates = false;
      const f = {
        name: form.name,
        kcal: Math.floor(form.kcal),
        protein: Math.floor(form.protein),
        fat: Math.floor(form.fat),
        carbohydrates: Math.floor(form.carbohydrates),
        id: Math.floor(Math.random() * 200),
      };
      await addMeal(f);
    }

    async function addMeal(f: Meal) {
      regInSubmission.value = true;
      showModal.value = true;
      await addMealToFireBase(f);
      await Object.assign(form, addedMeal);
      message.value = 'Meal added :)';
      passData.value = false;
      regInSubmission.value = false;
    }

    function closeModal() {
      showModal.value = false;
    }

    return {
      form,
      addMeal,
      closeModal,
      message,
      showModal,
      regInSubmission,
      passData,
      addMealValidationForm,
      verification,
      n,
    };
  },
});
</script>

<style lang="scss" scoped>
.form {
  border: 4px solid $secColor;
  background-color: $primeColor;
  box-shadow: 0px 10px 20px rgba(251, 128, 128, 0.2);
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  gap: 15px;
  &__name,
  &__kcal,
  &__protein,
  &__protein,
  &__carbohydrates,
  &__fat {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: #ffff; */
    label {
      font-size: 3rem;
      width: 100%;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    input {
      width: 50%;
      border-radius: 25px;
      padding: 9px;
      border-width: 1px;
      border-style: solid;
    }
  }
  &__name {
    width: 100%;
  }
  &__button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    margin-top: 20px;
  }
  .error {
    margin: 0 auto;
  }
}
@media screen and (min-width: 454px) {
}

@media screen and (min-width: 1200px) {
}
</style>
