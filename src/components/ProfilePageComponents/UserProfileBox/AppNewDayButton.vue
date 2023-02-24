<template>
  <AppButton className="btn" @click="useMeal.newDay">
    <i class="fas fa-plus-square"></i> <span>New day</span>
  </AppButton>
</template>

<script lang="ts">
import useMealStore from '../../../stores/meals';
import {defineComponent} from 'vue';
import AppButton from '../../styleComponents/AppButton.vue';

export default defineComponent({
  name: 'NewDayButton',
  components: {AppButton},
  setup() {
    const useMeal = useMealStore();

    return {useMeal};
  },
});
</script>

<style lang="scss" scoped>
.btn {
  padding: 15px 20px;
}
</style>

ts
