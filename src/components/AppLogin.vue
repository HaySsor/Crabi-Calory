<template>
  <div class="box">
    <VeeForm
      :validation-schema="loginSchema"
      @submit="login"
      class="login__form">
      <label>Email</label>
      <VeeField name="email" type="email" />
      <ErrorMessage name="email" />
      <label>Password</label>
      <VeeField name="password" type="password" />
      <ErrorMessage name="password" />
      <button class="button" type="submit">Submit</button>
    </VeeForm>
  </div>
</template>

<script>
export default {
  name: 'AppLogin',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:6|max:100',
      },
    };
  },
  methods: {
    login(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #f4f4f4;
    border-radius: 25px;
    padding: 10px 0;
    height: 250px;

    h3 {
      font-size: 2.4rem;
      margin-bottom: 10px;
      width: 100%;
      text-align: center;
    }

    label {
      width: 80%;
      font-size: 1.6rem;
      margin-bottom: 5px;
      color: #e2882f;
    }
    input {
      width: 80%;
      padding: 5px;
      border-radius: 25px;
      border: none;
      background-color: white;
      margin-bottom: 15px;
    }
    input:focus {
      border: 2px solid #e2882f;
    }
    .button {
      padding: 15px 50px;
      border: none;
      border-radius: 20px;
      background-color: #e2882f;
      color: white;
      font-size: 1.7rem;
    }
  }
}
</style>
