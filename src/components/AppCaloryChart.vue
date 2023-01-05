<template>
  <div class="chart">
    <img class="img img1" src="/icons/crab.png" alt="" aria-hidden="true" />
    <img class="img img2" src="/icons/crab.png" alt="" aria-hidden="true" />
    <img class="img img3" src="/icons/crab.png" alt="" aria-hidden="true" />
    <img class="img img4" src="/icons/crab.png" alt="" aria-hidden="true" />
    <header class="chart__top">
      <h2 class="chart__top-title family-Nerko">Your Calory</h2>
    </header>
    <div class="chart__middle">
      <AppCaloryChartItem
        name="Protein"
        :counted="countedProtein"
        :used="used"
        :personalData="personalData"
        parameter="protein" />
      <AppCaloryChartItem
        name="Fat"
        :counted="countedFat"
        :used="used"
        :personalData="personalData"
        parameter="fat" />
      <AppCaloryChartItem
        name="Carbohydrates"
        :counted="countedCarbohydrates"
        :used="used"
        :personalData="personalData"
        parameter="carbohydrates" />
      <AppCaloryChartItem
        name="Calory"
        :counted="countedKcal"
        :used="used"
        :personalData="personalData"
        parameter="kcal" />
    </div>
  </div>
</template>

<script>
import AppCaloryChartItem from '@/components/AppCaloryChartItem.vue';
import {computed, reactive, watch} from 'vue';
export default {
  name: 'CaloryChart',
  components: {AppCaloryChartItem},
  props: {
    personalData: {
      required: true,
    },
    useMeal: {
      required: true,
    },
  },
  setup(props) {
    let used = reactive({
      kcal: 0,
      protein: 0,
      carbohydrates: 0,
      fat: 0,
    });
    function usedCalculate() {
      used.kcal = 0;
      used.protein = 0;
      used.carbohydrates = 0;
      used.fat = 0;

      props.useMeal.useDailyMeals.forEach((item) => {
        for (const key1 in item) {
          for (const key2 in used) {
            if (key1 === key2) {
              used[key2] += parseFloat(item[key1]);
            }
          }
        }
      });
    }
    usedCalculate();

    const flag = computed(() => {
      return props.useMeal.flag;
    });
    watch(flag, () => {
      usedCalculate();
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
  height: 420px;
  background-color: #f9faf7;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.193);
  border-radius: 30px;
  margin: auto;
  margin-top: 40px;
  padding: 10px;
  position: relative;
  .img {
    width: 50px;
    position: absolute;
    z-index: -10;
  }
  .img1 {
    top: -22px;
    left: -10px;
    transform: rotate(-30deg);
  }
  .img2 {
    top: -22px;
    right: -10px;
    transform: rotate(30deg);
  }
  .img3 {
    top: -32px;
    left: 100px;
  }
  .img4 {
    top: -32px;
    right: 100px;
  }
  &__top {
    display: flex;
    justify-content: center;
    align-items: center;

    &-title {
      text-align: center;
      font-size: 2.2rem;
      padding: 10px;
      background-color: rgba(144, 238, 144, 0.416);
      border-radius: 25px;
      width: 60%;
    }
  }
  &__middle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}
@media screen and (min-width: 1200px) {
  .chart {
    width: 40%;
    height: 400px;
  }
}
</style>
