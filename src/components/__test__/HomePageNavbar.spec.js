
import { shallowMount } from '@vue/test-utils'
import HomePageNavbar from '@/components/HomePageComponents/HomePageNavbar.vue'
import { setActivePinia, createPinia } from 'pinia';
import { expect } from 'vitest';

describe('Home View', () => {
    beforeEach(() => {
        setActivePinia(createPinia())

    })

    test('change text icon to change in user logged', async () => {

        const wrapper = shallowMount(HomePageNavbar, {
            propsData: {
                userStore: {
                    userLoggedIn: false
                }
            }
        })
        expect(wrapper.find('.fa-user').exists()).toBeTruthy()
        await wrapper.setProps({
            userStore: {
                userLoggedIn: true
            }
        })
        expect(wrapper.find('.fa-home').exists()).toBeTruthy()
    })
})