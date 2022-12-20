<template>
  <form class="form" @submit.prevent="addMeal">
    <div class="form__name">
      <label class="family-Nerko">Name</label>
      <input type="text" />
    </div>
    <div class="form__kcal">
      <label class="family-Nerko">Calory</label>
      <input type="number" />
    </div>
    <div class="form__protein">
      <label class="family-Nerko">Protein</label>
      <input type="number" />
    </div>
    <div class="form__fat">
      <label class="family-Nerko">Fat</label>
      <input type="number" />
    </div>
    <div class="form__carbohydrates">
      <label class="family-Nerko">Carbohydrates</label>
      <input type="number" />
    </div>
    <div class="form__button">
      <button>Add meal</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AddMealToBase',
};
</script>

<style lang="scss" scoped>
.form {
  width: 90vw;
  height: 450px;
  background-color: #f9faf79f;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.193);
  border-radius: 30px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &__name,
  &__kcal,
  &__protein,
  &__protein,
  &__carbohydrates,
  &__fat {
    width: 100%;
    display: flex;
    flex-direction: column;
    label {
      text-align: center;
      font-size: 1.9rem;
    }
    input {
      padding: 5px;
      border-radius: 30px;
      border: none;
    }
  }
  &__button{
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    button{
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
