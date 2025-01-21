import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/styles.scss"

import Vueform from '@vueform/vueform'
import vueformConfig from './vueform.config.ts'

//App creation
const app = createApp(App)
app.use(Vueform, vueformConfig)

app.use(router)

app.mount('#app')
