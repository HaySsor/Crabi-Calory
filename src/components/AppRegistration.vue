<template>
  <form class="login__form" @submit.prevent="RegistUser">
    <h3 class="family-Nerko">Registration</h3>
    <label> User Name</label>
    <input class="input-text" type="text" v-model="personData.userName" />
    <label> Email</label>
    <input class="input-text" type="text" v-model="personData.email" />
    <label> Password</label>
    <input class="input-text" type="text" v-model="personData.password" />
    <label> Confirm Password</label>
    <input
      class="input-text"
      type="text"
      v-model="personData.confirmPassword" />
    <div class="input-select">
      <label>Sex</label>
      <select v-model="personData.sex">
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>
    </div>
    <label>Height</label>
    <input class="input-text" type="number" v-model="personData.height" />
    <label>Weight</label>
    <input class="input-text" type="number" v-model="personData.weight" />
    <div class="input-select">
      <label>Your Goal</label>
      <select v-model="personData.goal">
        <option value="L">lost weight</option>
        <option value="M">weight maintenance</option>
        <option value="G">gain weight</option>
      </select>
    </div>

    <div class="input-check">
      <input type="checkbox" v-model="advancedOptions" />
      <label>Advanced options</label>
    </div>
    <div v-if="advancedOptions" class="advanced-options">
      <label>Your Daily Fat in gram</label>
      <input class="input-text" type="number" v-model="fat" />
      <label>Your Carbohydrates in gram</label>
      <input class="input-text" type="number" v-model="carbohydrates" />
      <label>Your Protein in gram</label>
      <input class="input-text" type="number" v-model="protein" />
      <div class="calory-box">
        <h3 class="family-Nerko">Your Calory</h3>
        <span class="calory">{{ calory }} kcals</span>
      </div>
    </div>
    <div class="login__form-btn-box">
      <button class="login__form-btn-box-button">Registration</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AppRegistration',
  data() {
    return {
      advancedOptions: false,
      fat: 0,
      carbohydrates: 0,
      protein: 0,
      personData: {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        sex: 'M',
        height: 0,
        weight: 0,
        goal: 'L',
      },
    };
  },
  computed: {
    calory() {
      let calory =
        parseFloat(this.fat) * 9 +
        parseFloat(this.carbohydrates) * 4 +
        parseFloat(this.protein * 4);
      return calory;
    },
  },
  methods: {
    RegistUser() {
      console.log(this.personData)
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #f4f4f4;
    border-radius: 25px;
    padding: 10px 0;

    .error{
      font-size: 1.2rem;
      color: tomato;
    }

    h3 {
      font-size: 2.5rem;
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
    .input-text {
      width: 80%;
      padding: 5px;
      border-radius: 25px;
      border: none;
      background-color: white;
      margin-bottom: 15px;
    }
    .input-text:focus {
      border: 2px solid #e2882f;
    }
    .input-select {
      width: 80%;
      margin-bottom: 20px;
      select {
        margin-left: 10px;
        width: 60%;
        padding: 5px;
        border: 2px solid #e2882f;
        border-radius: 25px;
      }
    }
    .input-check {
      width: 80%;
      input {
        margin-right: 10px;
      }
    }
    .advanced-options {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
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
    }
    .calory-box {
      display: flex;
      justify-content: space-between;
      width: 80%;
    }
    .calory {
      font-size: 2rem;
    }
    &-btn-box {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
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
