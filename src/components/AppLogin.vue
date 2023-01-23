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
      <div class="login__form-btn">
        <button
          class="login__form-btn-button"
          type="submit"
          :disabled="regInSubmission">
          Submit
        </button>
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
import AppModal from '@/components/AppModal.vue';
import {ref} from 'vue';
import useUserStore from '@/stores/user';
import {useRouter} from 'vue-router';

export default {
  name: 'AppLogin',
  components: {AppModal},
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
      regInSubmission.value = false;
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
    width: 90%;
    margin-top: 20px;
    padding: 15px;
    background-color: #f4f4f4;
    border-radius: 25px;
    &-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      &-label {
        color: #e2882f;
        font-size: 1.5rem;
        margin-bottom: 5px;
      }
      &-input {
        padding: 5px;
        width: 80%;
        border-radius: 25px;
        border: 1px solid rgba(51, 51, 51, 0.636);
      }
      &-input:focus {
        border: 1px solid #e2882f;
      }
    }
    &-title {
      font-size: 2.5rem;
      margin-bottom: 10px;
      width: 100%;
      text-align: center;
    }
    &-btn {
      display: flex;
      justify-content: center;
      &-button {
        padding: 15px 50px;
        border: none;
        border-radius: 20px;
        background-color: #e2882f;
        color: white;
        font-size: 1.7rem;
        cursor: pointer;
        transition: transform 0.3s;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
@media screen and (min-width: 454px) {
  .login {
    &__form {
      width: 60%;
      max-width: 500px;
      margin-top: 20px;
      padding: 15px;
      background: #f4f4f4ac;
      border-radius: 25px;
      &-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        gap: 5px;
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .box {
    width: 100%;
  }
  .login {
    &__form {
      width: 40%;
      margin-top: 20px;
      padding: 15px;
      background: #f4f4f4ac;
      border-radius: 25px;
      &-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        gap: 5px;

        &-label {
          color: black;
          font-size: 1.6rem;
          margin-bottom: 5px;
          font-weight: bold;
        }
        &-input {
          padding: 8px;
          width: 60%;
          border-radius: 25px;
          border: 1px solid rgba(51, 51, 51, 0.636);
        }
        &-input:focus {
          border: 1px solid #e2882f;
        }
      }
      &-title {
        font-size: 3rem;
        margin-bottom: 20px;
        width: 100%;
        text-align: center;
      }
      &-btn {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        &-button {
          padding: 15px 50px;
          border: none;
          border-radius: 20px;
          background-color: #e2882f;
          color: white;
          font-size: 1.7rem;
        }
      }
    }
  }
}
</style>
