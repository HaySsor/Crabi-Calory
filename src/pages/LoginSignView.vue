<template>
  <div class="login">
    <router-link :to="{name: 'home'}">
      <i class="fas fa-arrow-alt-circle-left login__back"></i>
    </router-link>
    <div class="flex-box">
      <h2 class="login__title family-Nerko">Craby Family</h2>
      <AppButton data-button
        @click="login = !login"
        className="login__switch">
        {{ loginButtonText }}
      </AppButton>
    </div>
    <!-- Form  -->
    <Transition name="fade" mode="out-in">
      <AppRegistration v-if="!login" />
      <AppLogin v-else />
    </Transition>
  </div>
</template>

<script>
import AppRegistration from '../components/LoginPageComponents/AppRegistration.vue';
import AppLogin from '../components/LoginPageComponents/AppLogin.vue';
import AppButton from '../components/styleComponents/AppButton.vue';
import {ref, computed} from 'vue';
export default {
  name: 'LoginSingView',
  components: {AppRegistration, AppLogin, AppButton},
  setup() {
    const login = ref(false);

    const loginButtonText = computed(() => {
      return login.value ? 'Registration' : 'Login';
    });

    return {login, loginButtonText};
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 0.3s ease-in;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 0.3s ease-in;
}
.login {
  position: relative;
  min-height: 100vh;
  padding: 5px 0;
  .flex-box {
    display: flex;
    justify-content: center;
  }
  &__title {
    text-align: center;
    font-size: 30px;  
  }
  &__back {
    border-radius: 50%;
    padding: 10px;
    margin-left: 10px;
    font-size: 2.7rem;
    color: tomato;
  }
  &__switch {
    padding: 5px 20px;
    margin-left: 30px;
  }
}
@media screen and (min-width: 1200px) {
  .login {
    padding: 10px;
    &__back {
      font-size: 3rem;
    }
  }
}
</style>
