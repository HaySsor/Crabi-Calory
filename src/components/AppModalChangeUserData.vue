<template>
  <div class="modal">
    <div class="shadow" @click="closeModalUserEditProfile"></div>
    <form @submit.prevent="edit" class="form">
      <h3 class="family-Nerko title">Edit calorific requirement</h3>
      <div class="advanced-options">
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
      <div class="login__form-btn">
        <button class="login__form-btn-button" type="submit">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import {ref, computed} from 'vue';
import useUserStore from '@/stores/user';
export default {
  name: 'ModalChangeDataToBase',
  props: {
    personalData: {
      required: true,
    },
    closeModalUserEditProfile: {
      required: true,
    },
  },
  setup(props) {
    const useUser = useUserStore();
    const fat = ref(props.personalData.fat);
    const carbohydrates = ref(props.personalData.carbohydrates);
    const protein = ref(props.personalData.protein);

    const calory = computed(() => {
      let c =
        parseFloat(fat.value) * 9 +
        parseFloat(carbohydrates.value) * 4 +
        parseFloat(protein.value * 4);
      return c;
    });
    function edit() {
      const newUserRequirement = {
        fat: fat.value,
        carbohydrates: carbohydrates.value,
        protein: protein.value,
        kcal: calory.value,
      };

      useUser.updateUserData(newUserRequirement);
      props.closeModalUserEditProfile();
    }

    return {fat, carbohydrates, protein, calory, edit};
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  .form {
    width: 80%;
    height: 350px;
    background-color: #f9faf7ff;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    z-index: 10;
    gap: 10px;
    position: relative;
  }
  .shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.567);
  }
}
@media screen and (min-width: 454px) {
  .modal {
    .form {
      width: 40%;
    }
  }
}

@media screen and (min-width: 1200px) {
  .modal {
    .form {
      width: 25%;
      &__input {
        width: 50%;
      }

      &__add {
        padding: 15px 80px;
      }
    }
  }
}
</style>
