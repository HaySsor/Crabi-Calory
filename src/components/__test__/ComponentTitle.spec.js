import { shallowMount } from '@vue/test-utils'
import ComponentTitle from '@/components/styleComponents/ComponentTitle.vue'

describe('Render title', () => {
    test('render text inside component', ()=>{

        const wrapper = shallowMount(ComponentTitle, {
            slots:{
                default: 'Test',
            }
        })

        expect(wrapper.find('.title').text()).toBe('Test')
    })
})