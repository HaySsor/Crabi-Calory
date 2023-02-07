import { mount } from '@vue/test-utils'
import LoginSingView from '@/pages/LoginSignView.vue'
import AppRegistration from '@/components/LoginPageComponents/AppRegistration.vue'
import AppLogin from '@/components/LoginPageComponents/AppLogin.vue'
import AppButton from '@/components/styleComponents/AppButton.vue'
import { expect } from 'vitest'
import { setActivePinia, createPinia } from 'pinia';

describe('LoginSingView', () => {
    beforeEach(() => {
        setActivePinia(createPinia())

    })

    it('renders the login form by default', () => {
        const wrapper = mount(LoginSingView, {
            global: {
                components: {
                    AppLogin,
                    AppRegistration,
                    AppButton,
                },
            },
        });
        expect(wrapper.findComponent(AppRegistration).exists()).toBe(true);
    });

    it('renders the login form when the switch button is clicked', async () => {
        const wrapper = mount(LoginSingView, {
            global: {
                components: {
                    AppLogin,
                    AppRegistration,
                    AppButton,
                },
            },
        });
        wrapper.findComponent(AppButton).trigger('click');
        await wrapper.vm.$nextTick()
        expect(wrapper.findComponent(AppLogin).exists()).toBe(true);
    });
});