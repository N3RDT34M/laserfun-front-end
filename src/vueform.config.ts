import fr from '@vueform/vueform/locales/en'
import bootstrap from '@vueform/vueform/dist/bootstrap'
import { defineConfig } from '@vueform/vueform'
import axios from 'axios'
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();

axios.defaults.withCredentials = false
axios.defaults.headers.post = {
  'Content-Type': 'application/json'
}
axios.defaults.baseURL = axios.defaults.url = "http://" + (cookies.get('serverIp') ?? 'localhost')
export default defineConfig({
  axios,
  mode: 'no-cors',
  theme: bootstrap,
  locales: { fr },
  locale: 'fr',
})