<template>
  <button :disabled="dis" class="button" :class="classes">
    <slot />
  </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {computed} from 'vue';

export default defineComponent({
  props: {
    className: {
      type: String,
    },
    dis: {
      type: Boolean,
    },
  },
  setup(props) {
    const classes = computed<string | undefined>(() => {
      return props.className;
    });

    return {classes};
  },
});
</script>

<style lang="scss" scoped>
.button {
  padding: 15px 50px;
  border: none;
  border-radius: $buttonRadius;
  background: $buttonBgc;
  box-shadow: -1px 12px 14px rgba(251, 128, 128, 0.3);
  color: $textColor;
  font-size: 1.7rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
}
</style>
