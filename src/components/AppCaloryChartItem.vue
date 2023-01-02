<template>
  <div class="item">
    <h3 class="item__title">{{ name }}</h3>
    <div class="item__bar">
      <div
        class="item__bar-fill"
        :style="{
          height: counted,
          backgroundColor: counted === '100%' ? 'tomato' : '#e2882f',
        }"></div>
      <div
        class="item__bar-circle"
        :style="{
          backgroundColor: counted === '100%' ? 'lightgreen' : '#f9faf7',
        }">
        <i v-if="counted === '100%'" class="fas fa-check"></i>
      </div>
    </div>
    <p class="item__info">
      <span class="color-orange"> {{ used[parameter] }} </span> /
      {{ personalData[parameter] }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
    },
    counted: {
      required: true,
    },
    used: {
      required: true,
    },
    personalData: {
      required: true,
    },
    parameter: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  margin: 10px;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  &__title {
    font-size: 1.5rem;
  }
  &__bar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid rgba(144, 238, 144, 0.416);
    overflow: hidden;
    position: relative;

    &-fill {
      background-color: #e2882f;
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
      height: 80px;
      width: 80px;
      background-color: #f9faf7;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: 2.5rem;
        color: rgb(4, 120, 4);
      }
    }
  }
  &__info {
    font-size: 1.3rem;
  }
}
</style>
