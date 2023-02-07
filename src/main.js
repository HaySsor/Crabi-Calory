import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon } from '@iconify/vue';
import App from './App.vue'
import router from './router/router'
import { auth } from './includes/firebase'
import VeeValidatePlugin from './includes/validation'
import { registerSW } from 'virtual:pwa-register';
import progressBar from './includes/progress-bar';

// import style
import '@/assets/base.scss'
import '@/assets/animation.scss'
import 'nprogress/nprogress.css'
// PWA
registerSW({ immediate: true })

progressBar(router)

let app

auth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
        app.use(createPinia())
        app.use(router)
        app.use(VeeValidatePlugin)
        app.component('App-icon', Icon)
        app.mount('#app')
    }

})