import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

//in main.js
import 'primevue/resources/themes/aura-light-green/theme.css'

// Global components
import Button from "primevue/button";
import Slider from 'primevue/slider';
import InputText from 'primevue/inputtext';
import Dialog from 'primevue/dialog';

// PrimeVue

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.component('Button', Button);
app.component('Slider', Slider);
app.component('InputText', InputText);
app.component('Dialog', Dialog);

app.mount('#app')
