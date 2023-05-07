import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import './style.css'
import App from './App.vue'

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";

//primeflex
import "primeflex/primeflex.css";

const app = createApp(App)
app.use(PrimeVue);
app.mount('#app')
