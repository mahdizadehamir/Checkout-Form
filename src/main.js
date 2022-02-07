import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Notifications from '@kyvg/vue3-notification'

library.add(fas)

createApp(App)
.component('fa',FontAwesomeIcon)
.use(Notifications)
.use(router)
.use(store)
.mount('#app')
