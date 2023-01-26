<template>
  <button class="button" :class="classes">
    <slot />
  </button>
</template>

<script>
import {computed} from 'vue';

export default {
  props: {
    className: {
      type: String,
    },
  },
  setup(props) {
    const classes = computed(() => {
      return props.className;
    });

    return {classes};
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 15px 50px;
  border: none;
  border-radius: 20px;
  background-color: #e2882f;
  color: white;
  font-size: 1.7rem;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  &:disabled {
    background-color: gray;
  }
}
</style>
