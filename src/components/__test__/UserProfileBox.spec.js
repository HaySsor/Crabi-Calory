import UserProfileBox from '@/components/ProfilePageComponents/UserProfileBox/UserProfileBox.vue'
import { shallowMount } from '@vue/test-utils'


describe('UserProfileBox', () => {
    test('render personalData.name', () => {
        const personalData = {
            name: 'test'
        }
        const wrapper = shallowMount(UserProfileBox, {
            propsData: {
                personalData,
            }
        })
        expect(wrapper.find('.profile__name').text()).toContain(personalData.name)
    })
})