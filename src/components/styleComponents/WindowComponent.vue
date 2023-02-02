<template>
  <div class="window-component">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'WindowsComponent',
};
</script>

<style lang="scss" scoped>
.window-component {
  position: relative;
  width: 90%;
  height: 400px;
  min-height: 430px;
  padding: 10px;
  margin: auto;
  margin-top: 40px;
  border: $windowsBorderSize $secColor;
  border-radius: $windowsBorderRadius;
  background-color: $primeColor;
  box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.2);
}
</style>
