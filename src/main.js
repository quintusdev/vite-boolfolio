import { createApp } from 'vue'
import App from './App.vue'

/* Importo il Router */
import { router } from "./router";

createApp(App).use(router).mount('#app')
