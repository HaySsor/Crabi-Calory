<template>
  <div class="login">
    <router-link :to="{name: 'home'}">
      <i class="fas fa-arrow-alt-circle-left login__back"></i>
    </router-link>
    <div class="flex-box">
      <h2 class="login__title family-Nerko">Craby Family</h2>
      <button class="login__switch" @click="login = !login">
        {{ loginButtonText }}
      </button>
    </div>

    <!-- Form  -->
    <Transition name="fade" mode="out-in">
      <AppRegistration v-if="!login" />
      <AppLogin v-else />
    </Transition>
  </div>
</template>

<script>
import AppRegistration from '@/components/AppRegistration.vue';
import AppLogin from '@/components/AppLogin.vue';
import {ref, computed} from 'vue';
export default {
  name: 'LoginSingView',
  components: {AppRegistration, AppLogin},
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
  .flex-box {
    display: flex;
    justify-content: center;
  }
  padding: 5px 0;
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
    border: none;
    border-radius: 20px;
    background-color: #e2882f;
    color: white;
    font-size: 1.7rem;
    margin-left: 30px;
  }
}
@media screen and (min-width: 1200px) {
  .login {
    padding: 10px;
  }
}
</style>
