import './assets/scss/main.scss'
import './index.css'

import {createApp} from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {createPinia} from 'pinia'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Dialog from 'primevue/dialog'
import ToastService from 'primevue/toastservice'

import App from './App.vue'
import router from './router'

library.add(faUser)

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.use(ToastService)
app.use(createPinia())
app.use(router)


app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Dialog', Dialog)

app.mount('#app')