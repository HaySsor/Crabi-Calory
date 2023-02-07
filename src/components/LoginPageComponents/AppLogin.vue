<template>
  <div class="box">
    <VeeForm
      :validation-schema="loginSchema"
      @submit="login"
      class="login__form">
      <h3 class="family-Nerko login__form-title">Login</h3>
      <!-- email input -->
      <div class="login__form-box">
        <label class="login__form-box-label">Email</label>
        <VeeField class="login__form-box-input cypress-login" name="email" type="email" />
        <ErrorMessage class="error" name="email" />
      </div>
      <!-- password input -->
      <div class="login__form-box">
        <label class="login__form-box-label">Password</label>
        <VeeField
          class="login__form-box-input cypress-password"
          name="password"
          type="password" />
        <ErrorMessage class="error" name="password" />
      </div>
      <div class="login__form-btn">
        <AppButton class="cypress-btn" :disabled="regInSubmission"> Submit </AppButton>
      </div>
    </VeeForm>
    <LoadingModal
      :message="message"
      v-if="showModal"
      :passData="passData"
      :showModal="showModal"
      :closeModal="closeModal" />
  </div>
</template>

<script>
import LoadingModal from '../LoadingModal.vue';
import {ref} from 'vue';
import useUserStore from '@/stores/user';
import {useRouter} from 'vue-router';
import AppButton from '../styleComponents/AppButton.vue';

export default {
  name: 'AppLogin',
  components: {LoadingModal, AppButton},
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const failLogin = ref(false);

    const loginSchema = {
      email: 'required|email',
      password: 'required|min:6|max:100',
    };

    const message = ref('Wait');
    const showModal = ref(false);
    const regInSubmission = ref(false);
    const passData = ref(true);

    async function login(value) {
      regInSubmission.value = true;
      showModal.value = true;
      failLogin.value = false;
      message.value = 'Wait';
      passData.value = false;
      try {
        await userStore.login(value);
        message.value = 'Welcome Crab';
        passData.value = false;
        regInSubmission.value = false;
      } catch (err) {
        message.value = 'Email or password is incorrect';
        passData.value = false;
        regInSubmission.value = false;
        failLogin.value = true;
      }
    }

    function closeModal() {
      showModal.value = false;
      if (failLogin.value !== true) {
        router.push({name: 'profile'});
      }
    }

    return {
      loginSchema,
      login,
      message,
      showModal,
      regInSubmission,
      passData,
      closeModal,
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  &__form {
    width: 80%;
    max-width: 500px;
    margin-top: 20px;
    padding: 15px;
    background-color: $primeColor;
    border: 4px solid $secColor;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      width: 80%;

      &-label {
        font-size: 1.7rem;
        margin-bottom: 5px;
      }
      &-input {
        padding: 5px;
        width: 100%;
        border-radius: 10px;
        border: 1px solid rgba(51, 51, 51, 0.636);
      }
      &-input:focus {
        border: 1px solid #e2882f;
      }
    }
    &-title {
      background-color: $secColor;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      transform: translateY(-15px);
      width: 80%;
      font-size: 2rem;
      text-align: center;
    }
    &-btn {
      display: flex;
      justify-content: center;
    }
  }
}
@media screen and (min-width: 454px) {
  .login {
    &__form {
      width: 60%;
      &-box {
        max-width: 300px;
        gap: 5px;
        &-label {
          color: black;
          margin-bottom: 5px;
        }
        &-input {
          padding: 5px;
          width: 100%;
          border: 1px solid rgba(51, 51, 51, 0.636);
        }
        &-input:focus {
          border: 1px solid #e2882f;
        }
      }
      &-btn {
        margin-top: 15px;
        display: flex;
        justify-content: center;
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .box {
    width: 100%;
  }
}
</style>
