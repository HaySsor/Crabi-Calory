import { shallowMount } from '@vue/test-utils'
import AddMealToBaseForm from '@/components/AddMealToBasePageComponents/AddMealToBaseForm.vue'
import { expect } from 'vitest'

describe('Set value on inputs', () => {
    test('Name input', async () => {
        const wrapper = shallowMount(AddMealToBaseForm)
        const input = wrapper.find('[data-name]')
        await input.setValue('Test')
        expect(input.element.value).toBe('Test')  
    })
    test('Calory Input', async () => {
        const wrapper = shallowMount(AddMealToBaseForm)
        const input = wrapper.find('[data-calory]')
        await input.setValue('100')
        expect(input.element.value).toBe('100')  
    })
    test('Protein Input', async () => {
        const wrapper = shallowMount(AddMealToBaseForm)
        const input = wrapper.find('[data-protein]')
        await input.setValue('50')
        expect(input.element.value).toBe('50')  
    })
    test('Fat Input', async () => {
        const wrapper = shallowMount(AddMealToBaseForm)
        const input = wrapper.find('[data-fat]')
        await input.setValue('15')
        expect(input.element.value).toBe('15')  
    })
    test('Carbohydrates Input', async () => {
        const wrapper = shallowMount(AddMealToBaseForm)
        const input = wrapper.find('[data-carbohydrates]')
        await input.setValue('100')
        expect(input.element.value).toBe('100')  
    })
})