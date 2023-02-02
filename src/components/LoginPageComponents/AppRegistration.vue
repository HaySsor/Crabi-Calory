<template>
  <div>
    <VeeForm
      :validation-schema="schema"
      @submit="registration"
      :initial-values="userData"
      class="login__form">
      <h3 class="family-Nerko title">Registration</h3>
      <!-- name Input -->
      <div class="form-container">
        <div class="login__form-box">
          <label class="login__form-box-label">Name</label>
          <VeeField class="login__form-box-input" name="name" type="text" />
          <ErrorMessage class="error" name="name" />
        </div>
        <!-- email input -->
        <div class="login__form-box">
          <label class="login__form-box-label">Email</label>
          <VeeField class="login__form-box-input" name="email" type="email" />
          <ErrorMessage class="error" name="email" />
        </div>
        <!-- password input -->
        <div class="login__form-box">
          <label class="login__form-box-label">Password</label>
          <VeeField
            class="login__form-box-input"
            name="password"
            type="password" />
          <ErrorMessage class="error" name="password" />
        </div>
        <!-- confirm password -->
        <div class="login__form-box">
          <label class="login__form-box-label">Confirm Password</label>
          <VeeField
            class="login__form-box-input"
            name="confirmPassword"
            type="password" />
          <ErrorMessage class="error" name="confirmPassword" />
        </div>

        <div class="input-select">
          <label>Sex</label>
          <VeeField as="select" name="sex">
            <option value="M">Male</option>
            <option value="F">Female</option>
          </VeeField>
          <ErrorMessage class="error" name="sex" />
        </div>
        <!-- age input -->
        <div class="login__form-box">
          <label class="login__form-box-label">Age</label>
          <VeeField class="login__form-box-input" name="age" type="number" />
          <ErrorMessage class="error" name="age" />
        </div>

        <!-- height input -->
        <div class="login__form-box">
          <label class="login__form-box-label">Height</label>
          <VeeField class="login__form-box-input" name="height" type="number" />
          <ErrorMessage class="error" name="height" />
        </div>
        <!-- weight input -->
        <div class="login__form-box">
          <label class="login__form-box-label">Weight</label>
          <VeeField class="login__form-box-input" name="weight" type="number" />
          <ErrorMessage class="error" name="weight" />
        </div>
        <div class="input-select">
          <label>Your Goal</label>
          <VeeField as="select" name="goal">
            <option value="L">lost weight</option>
            <option value="M">weight maintenance</option>
            <option value="G">gain weight</option>
          </VeeField>
          <ErrorMessage class="error" name="goal" />
        </div>
        <div class="input-check">
          <input type="checkbox" v-model="advancedOptions" />
          <label>Advanced options</label>
        </div>
        <div v-if="advancedOptions" class="advanced-options">
          <label>Your Daily Fat in gram</label>
          <input type="number" v-model="fat" />
          <label>Your Carbohydrates in gram</label>
          <input type="number" v-model="carbohydrates" />
          <label>Your Protein in gram</label>
          <input type="number" v-model="protein" />
          <div class="calory-box">
            <h3 class="family-Nerko">Your Calory</h3>
            <span class="calory">{{ calory }} calories</span>
          </div>
        </div>
      </div>
      <div class="login__form-btn">
        <AppButton :disabled="regInSubmission"> Submit </AppButton>
      </div>
    </VeeForm>
    <AppModal
      :message="message"
      v-if="showModal"
      :passData="passData"
      :showModal="showModal"
      :closeModal="closeModal" />
  </div>
</template>

<script>
import {conversion} from '@/helper/demandConversion';
import AppModal from '../LoadingModal.vue';
import useUserStore from '@/stores/user';
import {ref, computed} from 'vue';
import {useRouter} from 'vue-router';
import AppButton from '../styleComponents/AppButton.vue';

export default {
  name: 'AppRegistration',
  components: {AppModal, AppButton},
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    const schema = {
      name: 'required|min:3|max:100|alphaSpaces',
      email: 'required|email',
      password: 'required|min:6|max:100|excluded:password',
      confirmPassword: 'passwordMismatch:@password',
      age: 'required|minVal:16|maxVal:120',
      height: 'required|minVal:30|maxVal:300',
      weight: 'required|minVal:30|maxVal:300',
    };
    const userData = {
      sex: 'M',
      goal: 'L',
    };

    const advancedOptions = ref(false);
    const fat = ref(0);
    const carbohydrates = ref(0);
    const protein = ref(0);

    const message = ref('Wait');
    const showModal = ref(false);
    const regInSubmission = ref(false);
    const passData = ref(true);

    const calory = computed(() => {
      let c =
        parseFloat(fat.value) * 9 +
        parseFloat(carbohydrates.value) * 4 +
        parseFloat(protein.value * 4);
      return c;
    });

    function closeModal() {
      showModal.value = false;
      router.push({name: 'profile'});
    }

    async function registration(value) {
      regInSubmission.value = true;
      showModal.value = true;
      if (advancedOptions.value) {
        value.fat = parseInt(fat.value);
        value.carbohydrates = parseInt(carbohydrates.value);
        value.protein = parseInt(protein.value);
        value.kcal = parseInt(calory.value);
        await userStore.register(value);
        message.value = 'Yeey welcome :)';
        passData.value = false;
        regInSubmission.value = false;
      } else {
        let user = conversion(value);
        await userStore.register(user);
        message.value = 'Yeey welcome :)';
        passData.value = false;
        regInSubmission.value = false;
      }
    }

    return {
      schema,
      userData,
      advancedOptions,
      fat,
      carbohydrates,
      protein,
      calory,
      closeModal,
      registration,
      message,
      showModal,
      passData,
      regInSubmission,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    margin-top: 20px;
    padding: 15px;
    border: 4px solid $secColor;
    background-color: $primeColor;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .form-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    &-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      width: 100%;

      &-label {
        font-family: 'Nerko One', cursive;
        font-size: 1.7rem;
        margin-bottom: 5px;
      }
      &-input {
        padding: 5px;
        width: 80%;
        border-radius: 10px;
        border: 1px solid rgba(51, 51, 51, 0.636);
      }
      &-input:focus {
        border: 1px solid #e2882f;
      }
    }

    .title {
      font-size: 2.5rem;
      margin-bottom: 10px;
      width: 80%;
      text-align: center;
      background-color: $secColor;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      transform: translateY(-15px);
    }

    .input-select {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      width: 100%;
      label {
        font-size: 1.5rem;
        margin-bottom: 5px;
        font-family: 'Nerko One', cursive;
        font-size: 1.7rem;
      }
      select {
        margin-left: 10px;
        width: 60%;
        padding: 5px;
        border-radius: 25px;
      }
    }
    .input-check {
      margin: 20px 0;
      width: 80%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 20px;
      label {
        font-size: 1.3rem;
      }

      input[type='checkbox'] {
        -webkit-appearance: none;
        border: 1px solid $secColor;
        margin: 0;
        font: inherit;
        color: orange;
        width: 3rem;
        height: 3rem;
        border-radius: 0.15em;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
      }
      input[type='checkbox']::before {
        content: '';
        width: 2rem;
        height: 2rem;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 2rem 2rem $secColor;
        transform-origin: bottom;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      }

      input[type='checkbox']:checked::before {
        transform: scale(1);
      }
    }
    .advanced-options {
      margin: 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      label {
        width: 80%;
        font-size: 1.6rem;
        margin-bottom: 5px;
      }
      input {
        width: 80%;
        padding: 5px;
        border: 1px solid $secColor;
        border-radius: 25px;
        background-color: white;
        margin-bottom: 15px;
      }
    }
    .calory-box {
      display: flex;
      justify-content: space-evenly;
      width: 80%;
      h3 {
        font-size: 1.8rem;
      }
    }
    .calory {
      font-size: 2rem;
    }

    &-btn {
      display: flex;
      justify-content: flex-end;
    }
  }
}
@media screen and (min-width: 454px) {
  .login {
    &__form {
      padding: 15px;
      width: 80%;
      margin: 0 auto;
      margin-top: 50px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      .form-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 2fr));
        justify-items: center;
      }
      .title {
        transform: translateY(-15px);
      }

      &-box {
        width: 100%;
        gap: 5px;

        &-label {
          color: black;
          font-weight: bold;
        }
        &-input {
          padding: 8px;
        }
      }
      .advanced-options {
        width: 100%;
        margin: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        grid-column: 1/ -1;

        label {
          font-size: 1.6rem;
          margin-bottom: 5px;
        }
        input {
          padding: 5px;
          border-radius: 25px;
          background-color: white;
          margin-bottom: 15px;
        }
      }
      &-btn {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
  }
}

@media screen and (min-width: 800px) {
  .login {
    &__form {
      max-width: 800px;
      .form-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
      }
    }
  }
}
/* Media PC */

@media screen and (min-width: 1200px) {
}
</style>
