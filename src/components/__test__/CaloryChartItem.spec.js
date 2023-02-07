import CaloryChartItem from '@/components/ProfilePageComponents/CaloryChart/CaloryChartItem.vue'
import { shallowMount } from '@vue/test-utils'
import { describe, expect } from 'vitest'

describe('CaloryChartItem', () => {
    test('render macro ingredients name', () => {
        const name = 'test'
        const counted = 50
        const parameter = 'test'
        const used = {}
        const personalData = {}

        const wrapper = shallowMount(CaloryChartItem, {
            propsData: {
                name, counted, used, personalData, parameter
            }
        })
        expect(wrapper.find('.item__title').text()).toBe('test')
    })

    test('render current number of macro ingredients', () => {
        const name = 'test'
        const counted = '50%'
        const parameter = 'kcal'
        const used = {
            kcal : 500
        }
        const personalData = {
            kcal : 1000
        }
        const wrapper = shallowMount(CaloryChartItem, {
            propsData: {
                name, counted, used, personalData, parameter
            }
        })
        const InfoElement = wrapper.find('.item__info')
        expect(InfoElement.text()).toContain('500')
        expect(InfoElement.text()).toContain('1000')
    })
})