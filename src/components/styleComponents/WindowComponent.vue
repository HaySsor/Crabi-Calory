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
  min-height: 430px;
  width: 90%;
  border-radius: 30px;
  border: 5px solid #ffff;
  margin: auto;
  margin-top: 40px;
  padding: 10px;
  position: relative;
  height: 400px;
}
</style>
