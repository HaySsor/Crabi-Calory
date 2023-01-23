<template>
  <div class="item">
    <h3 class="item__title family-Nerko">{{ name }}</h3>
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
          background: counted === '100%' ? 'lightgreen' : 'rgb(157,212,172)',
        }">
        <i v-if="counted === '100%'" class="fas fa-check"></i>
        <img
          v-if="counted === '100%'"
          class="img"
          src="/icons/crab.png"
          alt=""
          aria-hidden="true" />
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
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  &__title {
    font-size: 2.2rem;
    margin-bottom: 0;
  }
  &__bar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #ffff;
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

@keyframes crab-bring-ok {
  0% {
    transform: translateY(100px);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(0px) rotate(-20deg);
  }
  70% {
    transform: translateY(0px) rotate(20deg);
  }
  80% {
    transform: translateY(0px) rotate(0deg);
  }
  100% {
    transform: translateY(100px);
  }
}
@keyframes added-ok {
  0% {
    transform: translateY(100px);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-20px);
  }
  70% {
    transform: translateY(-20px);
  }
  80% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
