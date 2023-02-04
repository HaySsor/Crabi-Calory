import HomeView from '@/pages/HomeView.vue'
import { shallowMount } from '@vue/test-utils'
import HomeInfo from '@/components/HomePageComponents/HomeInfo.vue';
import { setActivePinia, createPinia } from 'pinia';



describe('Home View', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    test('render Home Info Component', () => {
        const wrapper = shallowMount(HomeView)
        wrapper.findComponent(HomeInfo)
    })
    test('render Hero Images', () => {
        const wrapper = shallowMount(HomeView)
        wrapper.findComponent({ name: 'HeroImage' })
    })
    test('render Hero Page Navbar', () => {
        const wrapper = shallowMount(HomeView)
        wrapper.findComponent({ name: 'HomePageNavbar' })
    })
})