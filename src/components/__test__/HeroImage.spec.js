import HeroImage from '@/components/HomePageComponents/HeroImage.vue'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'vitest'

describe('HomeImage.vue', () => {

    test('renders inner text', () => {
        const wrapper = shallowMount(HeroImage)

        expect(wrapper.find('h1').text()).toBe('Crabi Calory')
        expect(wrapper.find('.color-orange').text()).toBe('Calory')
        expect(wrapper.find('.hero__img-photo').exists()).toBe(true)
    })

})