<template>
  <div class="box">
    <VeeForm
      :validation-schema="loginSchema"
      @submit="login"
      class="login__form">
      <h3 class="family-Nerko">Login</h3>
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
      await userStore.login(value);
      message.value = 'Yeey welcome :)';
      passData.value = false;
      regInSubmission.value = false;
    }

    function closeModal() {
      showModal.value = false;
      router.push({name: 'profile'});
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
    h3 {
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
      }
    }
  }
}
</style>
