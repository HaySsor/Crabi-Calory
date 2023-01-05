<template>
  <button class="btn" @click="useMeal.newDay">
    <i class="fas fa-plus-square"></i> <span>New day</span>
  </button>
</template>

<script>
import useMealStore from '../stores/meals';
export default {
  name: 'NewDayButton',
  setup() {
    const useMeal = useMealStore();

    return {useMeal};
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 15px 20px;
  border: none;
  background-color: #e2882f;
  border-radius: 25px;
  color: white;
  transition: transform 0.3s;
}
.btn:hover {
  transform: scale(1.1);
  background-color: #f7b902;
  color: black;
}
</style>
