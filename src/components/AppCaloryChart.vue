<template>
  <div class="chart">
    <header class="chart__top">
      <h2 class="chart__top-title">Your Calory</h2>
    </header>
    <div class="chart__middle">
      <div class="chart__middle-protein">
        <h3 class="chart__middle-protein-title">Protein</h3>
        <div class="chart__middle-protein-bar">
          <div
            class="chart__middle-protein-bar-fill"
            :style="{
              width: countedProtein,
              backgroundColor: countedProtein === '100%' ? 'tomato' : '#e2882f',
            }"></div>
        </div>
        <p class="chart__middle-protein-info">
          <span class="color-orange"> {{ used.protein }} </span> /
          {{ personalData.protein }}
        </p>
      </div>
      <div class="chart__middle-fat">
        <h3 class="chart__middle-fat-title">Fat</h3>
        <div class="chart__middle-fat-bar">
          <div
            class="chart__middle-fat-bar-fill"
            :style="{
              width: countedFat,
              backgroundColor: countedFat === '100%' ? 'tomato' : '#e2882f',
            }"></div>
        </div>
        <p class="chart__middle-fat-info">
          <span class="color-orange"> {{ used.fat }} </span> /
          {{ personalData.fat }}
        </p>
      </div>
      <div class="chart__middle-carbohydrates">
        <h3 class="chart__middle-carbohydrates-title">Carbohydrates</h3>
        <div class="chart__middle-carbohydrates-bar">
          <div
            class="chart__middle-carbohydrates-bar-fill"
            :style="{
              width: countedCarbohydrates,
              backgroundColor:
                countedCarbohydrates === '100%' ? 'tomato' : '#e2882f',
            }"></div>
        </div>
        <p class="chart__middle-carbohydrates-info">
          <span class="color-orange"> {{ used.carbohydrates }} </span> /
          {{ personalData.carbohydrates }}
        </p>
      </div>
      <div class="chart__middle-kcal">
        <h3 class="chart__middle-kcal-title">Calory</h3>
        <div class="chart__middle-kcal-bar">
          <div
            class="chart__middle-kcal-bar-fill"
            :style="{
              width: countedKcal,
              backgroundColor: countedKcal === '100%' ? 'tomato' : '#e2882f',
            }"></div>
        </div>
        <p class="chart__middle-kcal-info">
          <span class="color-orange"> {{ used.kcal }} </span> /
          {{ personalData.kcal }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, computed, reactive} from 'vue';
export default {
  name: 'CaloryChart',
  props: {
    personalData: {
      required: true,
    },
  },
  setup(props) {
    const used = reactive({
      kcal: 1000,
      protein: 40,
      carbohydrates: 50,
      fat: 70,
    });

    const countedProtein = computed(() => {
      return calculate('protein');
    });
    const countedFat = computed(() => {
      return calculate('fat');
    });
    const countedCarbohydrates = computed(() => {
      return calculate('carbohydrates');
    });
    const countedKcal = computed(() => {
      return calculate('kcal');
    });

    function calculate(uName) {
      if (used[uName] > props.personalData[uName]) {
        return '100%';
      } else {
        return (used[uName] / props.personalData[uName]) * 100 + '%';
      }
    }

    return {
      countedProtein,
      countedFat,
      countedCarbohydrates,
      countedKcal,
      used,
    };
  },
};
</script>

<style lang="scss" scoped>
.chart {
  width: 90vw;
  height: 400px;
  background-color: #f9faf79f;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.193);
  border-radius: 30px;
  margin: auto;
  margin-top: 40px;
  padding: 10px;
  &__top {
    text-align: center;
    &-title {
      font-size: 1.9rem;
    }
  }
  &__middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &-protein,
    &-fat,
    &-carbohydrates,
    &-kcal {
      margin: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
      &-title {
        font-size: 1.5rem;
      }
      &-bar {
        width: 100%;
        height: 20px;
        border-radius: 10px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.28);
        overflow: hidden;

        &-fill {
          background-color: #e2882f;
          height: 100%;
          transition: width 0.5s;
        }
      }
      &-info {
        font-size: 1.3rem;
      }
    }
    &-kcal {
      padding: 10px;
      border-radius: 30px;
    }
  }
}
</style>
