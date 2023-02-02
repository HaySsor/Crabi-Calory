<template>
  <WindowComponent class="chart">
    <img class="img img1" src="/icons/crab.png" alt="" aria-hidden="true" />
    <img class="img img2" src="/icons/crab.png" alt="" aria-hidden="true" />
    <header class="chart__top">
      <ComponentTitle>Your Calory</ComponentTitle>
    </header>
    <div class="chart__middle">
      <CaloryChartItem
        v-for="component in ComponentRenderArray"
        :key="component.name"
        :name="component.name"
        :counted="component.counted"
        :used="used"
        :personalData="personalData"
        :parameter="component.parameter" />
    </div>
  </WindowComponent>
</template>

<script>
import CaloryChartItem from './CaloryChartItem.vue';
import WindowComponent from '../../styleComponents/WindowComponent.vue';
import {computed} from 'vue';
import ComponentTitle from '../../styleComponents/ComponentTitle.vue';
export default {
  name: 'CaloryChart',
  components: {CaloryChartItem, WindowComponent, ComponentTitle},
  props: {
    personalData: {
      required: true,
    },
    useDailyMeals: {
      required: true,
    },
  },
  setup(props) {
    const used = computed(() => {
      const userCaloryUsedInDay = {
        kcal: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
      };
      props.useDailyMeals.forEach(({meal}) => {
        for (const key1 in meal) {
          for (const key2 in userCaloryUsedInDay) {
            if (key1 === key2) {
              userCaloryUsedInDay[key2] += parseFloat(meal[key1]);
            }
          }
        }
      });
      return userCaloryUsedInDay;
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
      if (used.value[uName] > props.personalData[uName]) {
        return '100%';
      } else {
        return (used.value[uName] / props.personalData[uName]) * 100 + '%';
      }
    }

    const ComponentRenderArray = [
      {
        name: 'Protein',
        counted: countedProtein,
        parameter: 'protein',
      },
      {
        name: 'Fat',
        counted: countedFat,
        parameter: 'fat',
      },
      {
        name: 'Carbohydrates',
        counted: countedCarbohydrates,
        parameter: 'carbohydrates',
      },
      {
        name: 'Calory',
        counted: countedKcal,
        parameter: 'kcal',
      },
    ];

    return {
      used,
      ComponentRenderArray,
    };
  },
};
</script>

<style lang="scss" scoped>
.chart {
  .img {
    width: 40px;
    position: absolute;
    z-index: 1;
  }
  .img1 {
    top: -36px;
    left: 60px;
  }
  .img2 {
    top: -36px;
    right: 60px;
  }
  &__top {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__middle {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
