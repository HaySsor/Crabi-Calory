<template>
  <div class="modal">
    <div class="shadow" @click="closeModalUserEditProfile"></div>
    <form @submit.prevent="edit" class="form">
      <h3 class="family-Nerko title">Edit calorific requirement</h3>
      <div class="form__data">
        <label>Your Daily Fat in gram</label>
        <input type="number" v-model="fat" />
        <label>Your Carbohydrates in gram</label>
        <input type="number" v-model="carbohydrates" />
        <label>Your Protein in gram</label>
        <input type="number" v-model="protein" />
        <div class="form__data-calory-box">
          <h3 class="family-Nerko">Your Calory</h3>
          <span class="calory">{{ calory }} calories</span>
        </div>
      </div>
      <div class="form__buttons">
        <button class="form__buttons-save" type="submit">Save</button>
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
.form {
  width: 80%;
  max-width: 300px;
  height: 380px;
  background-color: #f9faf7ff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  z-index: 10;
  gap: 10px;
  position: relative;

  h3 {
    font-size: 2rem;
    margin-top: 10px;
  }

  &__data {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    label {
      font-size: 1.6rem;
    }
    input {
      border: 1px solid gray;
      padding: 5px;
      border-radius: 25px;
      text-align: center;
    }
    &-calory-box {
      h3 {
        font-size: 2.2rem;
      }
      .calory {
        font-size: 1.5rem;
      }
    }
  }
  &__buttons {
    &-save {
      padding: 15px 40px;
      background-color: #e2882f;
      border: none;
      color: white;
      border-radius: 25px;
      cursor: pointer;
      transition: transform 0.3s, background 0.3;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
@media screen and (min-width: 454px) {
  .form {
    width: 40%;
  }
}

@media screen and (min-width: 1200px) {
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
</style>
