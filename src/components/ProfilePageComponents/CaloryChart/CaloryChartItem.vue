<template>
  <div class="item">
    <h3 class="item__title family-Nerko">{{ name }}</h3>
    <div class="item__bar">
      <div
        class="item__bar-fill"
        :style="{
          height: counted.value,
          backgroundColor: backgroundColorColorChangeFill,
        }"></div>
      <div
        class="item__bar-circle"
        :style="{
          backgroundColor: backgroundColorColorChangeCircle,
        }">
        <i v-if="counted.value === '100%'" class="fas fa-check"></i>
        <img
          v-if="counted.value === '100%'"
          class="img"
          src="/icons/crab.png"
          alt=""
          aria-hidden="true" />
      </div>
    </div>
    <p class="item__info">
      <span class="color-orange"> {{ usedParams }} </span> /
      {{ maxParams }}
    </p>
  </div>
</template>
<script lang="ts">
import type {PropType, ComputedRef} from 'vue';
import {defineComponent} from 'vue';
import {computed} from 'vue';
import type {ProfileMacro, GetUser} from '../../../types/interfaces';

export default defineComponent({
  name: 'CaloryChartItem',
  props: {
    name: {
      required: true,
      type: String,
    },
    counted: {
      required: true,
      type: Object as PropType<ComputedRef>,
    },
    used: {
      required: true,
      type: Object as PropType<ProfileMacro>,
    },
    personalData: {
      required: true,
      type: Object as PropType<GetUser>,
    },
    parameter: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const backgroundColorColorChangeCircle = computed(() => {
      return props.counted.value === '100%'
        ? 'lightgreen'
        : 'rgb(115, 184, 152) ';
    });
    const backgroundColorColorChangeFill = computed(() => {
      return props.counted.value === '100%'
        ? 'lightgreen'
        : 'rgba(253, 193, 104,.8)';
    });

    const usedParams = computed(() => {
      return Math.floor(props.used[props.parameter as keyof ProfileMacro]);
    });
    const maxParams = computed(() => {
      return props.personalData[props.parameter as keyof GetUser];
    });

    return {
      usedParams,
      maxParams,
      backgroundColorColorChangeCircle,
      backgroundColorColorChangeFill,
    };
  },
});
</script>

<style lang="scss" scoped>
.item {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 35px;
  gap: 5px;
  &__title {
    font-size: 2.2rem;
    margin-bottom: 0;
  }
  &__bar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid $secColor;
    overflow: hidden;
    position: relative;

    &-fill {
      width: 100%;
      transition: height 0.5s;
      position: absolute;
      bottom: 0;
    }
    &-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: 2.5rem;
        color: rgb(4, 120, 4);
        position: absolute;
        animation: added-ok 2s forwards;
      }
      img {
        width: 30px;
        position: absolute;
        bottom: 0px;
        left: 18px;
        animation: crab-bring-ok 2s forwards;
      }
    }
  }
  &__info {
    font-size: 1.3rem;
    background-color: #ffff;
    padding: 5px 15px;
    border-radius: 25px;
    margin-bottom: 5px;
  }
}
</style>
