import UserMealListItem from '@/components/ProfilePageComponents/DailyMealList/UserMealListItem.vue'
import { shallowMount } from '@vue/test-utils'

describe('UserMealListItem', () => {
    test('render meal on list', () => {
        const product = {
            meal: {
                name: 'test'
            }
        }
        const useMeal = {}
        const wrapper = shallowMount(UserMealListItem, {
            propsData: {
                product, useMeal,
            }
        })
        expect(wrapper.find('.item').exists()).toBe(true)
        expect(wrapper.find('h3').text()).toBe('test')
    })

    test('Thrash icon can be click', async () => {
        const product = {
            meal: {
                name: 'test'
            }
        }
        const useMeal = {
            removeMealFromDaily() {
                console.log(product.meal.name)
                product.meal.name = 'deleted'
                console.log(product.meal.name)
            }
        }
        const wrapper = shallowMount(UserMealListItem, {
            propsData: {
                product, useMeal,
            }
        })
        const titleElement = wrapper.find('h3')
        expect(titleElement.text()).toBe('test')
        wrapper.find('.fa-trash-alt').trigger('click');
        await wrapper.vm.$forceUpdate()
        expect(titleElement.text()).toBe('deleted')
    })
})