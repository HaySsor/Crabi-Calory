<template>
  <form class="form" @submit.prevent="verification">
    <div class="form__name">
      <label class="family-Nerko">Name</label>
      <input
        type="text"
        v-model="form.name"
        :style="{border: flag.name ? '1px solid tomato' : 'none'}" />
      <p v-if="flag.name" class="error">Name can't be empty</p>
    </div>
    <div class="form__kcal">
      <label class="family-Nerko">Calory</label>
      <input
        type="text"
        v-model="form.kcal"
        :style="{border: flag.kcal ? '1px solid tomato' : 'none'}" />
      <p v-if="flag.kcal" class="error">Calorie must be on 1 to 1000</p>
    </div>
    <div class="form__protein">
      <label class="family-Nerko">Protein</label>
      <input
        type="text"
        v-model="form.protein"
        :style="{border: flag.protein ? '1px solid tomato' : 'none'}" />
      <p v-if="flag.protein" class="error">Protein must be below 200</p>
    </div>
    <div class="form__fat">
      <label class="family-Nerko">Fat</label>
      <input
        type="text"
        v-model="form.fat"
        :style="{border: flag.fat ? '1px solid tomato' : 'none'}" />
      <p v-if="flag.fat" class="error">Fat must be below 200</p>
    </div>
    <div class="form__carbohydrates">
      <label class="family-Nerko">Carbohydrates</label>
      <input
        type="text"
        v-model="form.carbohydrates"
        :style="{border: flag.carbohydrates ? '1px solid tomato' : 'none'}" />
      <p v-if="flag.carbohydrates" class="error">
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

<script>
import {reactive, ref} from 'vue';
import {addMealToFireBase} from '../../composables/addMeal';
import LoadingModal from '../LoadingModal.vue';
import AppButton from '../styleComponents/AppButton.vue';

export default {
  name: 'AddMealToBaseForm',
  components: {LoadingModal, AppButton},

  setup() {
    const addedMeal = reactive({
      name: '',
      kcal: 0,
      protein: 0,
      fat: 0,
      carbohydrates: 0,
    });
    const flag = reactive({
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

    const form = reactive({
      name: '',
      kcal: 0,
      protein: 0,
      fat: 0,
      carbohydrates: 0,
    });

    async function verification() {
      if (!form.name.match(/^[A-Za-z]+$/)) {
        flag.name = true;
        return;
      }
      flag.name = false;
      if (form.kcal <= 0 && form.kcal < 1000) {
        flag.kcal = true;
        return;
      }
      flag.kcal = false;

      if (parseFloat(form.protein) > 200) {
        flag.protein = true;
        return;
      }
      flag.protein = false;
      if (parseFloat(form.fat) > 200) {
        flag.fat = true;
        return;
      }
      flag.fat = false;
      if (parseFloat(form.carbohydrates) > 600) {
        flag.carbohydrates = true;
        return;
      }
      flag.carbohydrates = false;
      const f = {
        name: form.name,
        kcal: parseFloat(form.kcal),
        protein: parseFloat(form.protein),
        fat: parseFloat(form.fat),
        carbohydrates: parseFloat(form.carbohydrates),
        id: Math.floor(Math.random() * 200),
      };
      await addMeal(f);
    }

    async function addMeal(f) {
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
      flag,
      verification,
      n,
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  border: 4px solid #fff;
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
