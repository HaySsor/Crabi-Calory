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

<script lang="ts">
import {defineComponent} from 'vue';
import CaloryChartItem from './CaloryChartItem.vue';
import WindowComponent from '../../styleComponents/WindowComponent.vue';
import {computed} from 'vue';
import ComponentTitle from '../../styleComponents/ComponentTitle.vue';
import type {PropType, ComputedRef} from 'vue';
import type {
  GetUser,
  MealObj,
  Meal,
  ProfileMacro,
} from '../../../types/interfaces';

type Key = {[propKey: string]: number};

export default defineComponent({
  name: 'CaloryChart',
  components: {CaloryChartItem, WindowComponent, ComponentTitle},
  props: {
    personalData: {
      required: true,
      type: Object as PropType<GetUser>,
    },
    useDailyMeals: {
      required: true,
      type: Object as PropType<MealObj[]>,
    },
  },

  setup(props) {
    const used = computed(() => {
      const userCaloryUsedInDay: ProfileMacro = {
        kcal: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0,
      };
      props.useDailyMeals.forEach((item: MealObj) => {
        const {meal}: {meal: Meal} = item;
        for (const key1 in meal) {
          for (const key2 in userCaloryUsedInDay) {
            if (key1 === key2 && meal[key1 as keyof Meal] !== undefined) {
              const value = meal[key1 as keyof Meal];
              if (typeof value === 'number') {
                userCaloryUsedInDay[key2 as keyof ProfileMacro] += value;
              } else if (typeof value === 'string') {
                userCaloryUsedInDay[key2 as keyof ProfileMacro] +=
                  parseFloat(value);
              }
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

    function calculate(uName: string) {
      const u = used.value[uName as keyof ProfileMacro];
      const p = props.personalData[uName as keyof GetUser];
      if (u > p) {
        return '100%';
      } else if (typeof p === 'number') {
        return (u / p) * 100 + '%';
      }
    }

    const ComponentRenderArray: {
      name: string;
      counted: ComputedRef<string | undefined>;
      parameter: string;
    }[] = [
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
});
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
