<template>
  <div class="box">
    <h2>Your Daily Meal</h2>
    <ul class="box__list">
      <li
        v-for="meal in useMeal.useDailyMeals"
        :key="meal.id"
        class="box__list-item">
        <div class="box__list-item-cont">
          <h3>{{ meal.name }}</h3>
          <i
            @click="useMeal.removeMealFromDaily(meal.idD)"
            class="fas fa-trash-alt"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserMealList',
  props: {
    useMeal: {
      required: true,
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.box {
  width: 90vw;
  height: 400px;
  background-color: #f9faf79f;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.193);
  border-radius: 30px;
  margin: auto;
  margin-top: 40px;
  padding: 10px;
  overflow: scroll;
  h2 {
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #e2882f;
    border-radius: 15px;
  }

  &__list {
    list-style: none;
    padding: 10px;

    &-item {
      margin-bottom: 10px;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.163);
      width: 100%;
      padding: 10px 15px;
      border-radius: 25px;

      &-cont {
        display: flex;
        justify-content: space-around;
        h3 {
          font-size: 1.6rem;
          width: 65%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        i {
          font-size: 1.6rem;
          color: tomato;
          transition: transform 0.3s;
          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }
}
</style>
