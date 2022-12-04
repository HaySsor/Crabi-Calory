import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue';
import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'

import '@/assets/base.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin)
app.component('App-icon', Icon)


app.mount('#app')
