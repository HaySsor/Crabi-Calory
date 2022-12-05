<template>
  <div class="login">
    <router-link :to="{name: 'home'}">
      <App-icon
        icon="tabler:triangle"
        color="#e2882f"
        width="30"
        height="30"
        :rotate="3"
        class="login__back" />
    </router-link>
    <div class="flex-box">
      <h2 class="login__title family-Nerko">Craby Family</h2>
      <button class="login__switch" @click="login = !login">
        {{ loginButtonText }}
      </button>
    </div>

    <!-- Form  -->
    <AppRegistration v-if="!login" />
    <AppLogin v-else />
  </div>
</template>

<script>
import AppRegistration from '@/components/AppRegistration.vue';
import AppLogin from '@/components/AppLogin.vue';
export default {
  name: 'LoginSingView',
  components: {AppRegistration, AppLogin},
  data() {
    return {
      login: false,
    };
  },
  computed: {
    loginButtonText() {
      return this.login ? 'Registration' : 'Login';
    },
  },
};
</script>

<style lang="scss" scoped>
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
    border: 1px solid white;
    border-radius: 50%;
    padding: 5px;
    margin-left: 10px;
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
</style>
