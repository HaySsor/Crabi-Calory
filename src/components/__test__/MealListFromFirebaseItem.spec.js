import MealListFromFirebaseItem from '@/components/MealListPageComponents/MealListFromFirebaseItem.vue'
import { shallowMount } from '@vue/test-utils'

describe('MealListFromFirebaseItem', () => {
    test('Render meal', () => {
        const meal = {
            name: 'test'
        }

        const wrapper = shallowMount(MealListFromFirebaseItem, {
            propsData: {
                meal
            }
        })

        expect(wrapper.find('h3').text()).toBe('test')
    })
})