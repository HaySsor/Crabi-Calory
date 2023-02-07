import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect } from "vitest";
import HomeInfo from '../../components/HomePageComponents/HomeInfo.vue'

describe('Router', () => {
    test('renders router link', async () => {
        const userStore = {
            userLoggedIn: false
        }

        const wrapper = shallowMount(HomeInfo, {
            propsData: { userStore },
            global: {
                stubs: {
                    RouterLink: RouterLinkStub,
                },
            }
        })

        expect(wrapper.findComponent(RouterLinkStub).props().to).toStrictEqual({ name: 'login' })
    })
})