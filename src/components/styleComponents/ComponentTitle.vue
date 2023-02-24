<template>
  <h2 class="title family-Nerko"><slot /></h2>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: 'ComponentTitle',
});
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 2.2rem;
  padding: 10px;
  background-color: $secColor;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  width: 80%;
  margin-bottom: 10px;
  transform: translateY(-11px);
  color: $textColor;
}
</style>
