import "../node_modules/bulma/css/bulma.css"
import "@fortawesome/fontawesome-free/css/all.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

const app = createApp(App)

app.use(router)
app.mount('#app')
