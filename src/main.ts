import { createApp } from 'vue'
import rootApp from './App.vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from './store'
import router from './router'
import store from './store'

const app = createApp(rootApp)
globalRegister(app)
app.use(store)
setupStore()
app.use(router)

app.mount('#app')
