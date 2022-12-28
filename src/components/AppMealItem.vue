<template>
  <li class="item">
    <h3>{{ meal.name }}</h3>
    <button @click="openModal(meal)">Add meal</button>
  </li>
</template>

<script>
export default {
  name: 'MealItem',
  props: {
    meal: {
      required: true,
    },
    openModal: {
      required: true,
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-radius: 30px;
  background-color: #f9faf7ff;
  transition: background 0.3s;

  h3 {
    font-size: 1.6rem;
    width: 65%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  button {
    padding: 10px 15px;
    border: none;
    background-color: #e2882f;
    color: white;
    border-radius: 20px;
    transition: background 0.3s;
  }
  button:hover {
    background-color: #573819;
    color: white;
  }
}
</style>
