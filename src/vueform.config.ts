import fr from '@vueform/vueform/locales/en'
import bootstrap from '@vueform/vueform/dist/bootstrap'
import { defineConfig } from '@vueform/vueform'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = import.meta.env.VITE_API_URL

export default defineConfig({
  axios,
  theme: bootstrap,
  locales: { fr },
  locale: 'fr',
})