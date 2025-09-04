import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import { useMainStore } from './stores/main'
import './style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Initialiser l'authentification
const store = useMainStore()
store.initializeAuth()

app.mount('#app')