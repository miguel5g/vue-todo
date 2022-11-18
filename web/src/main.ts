import { createApp } from 'vue';
import VueFeather from 'vue-feather';

import './style.css';
import App from './app.vue';

const app = createApp(App);

app.component(VueFeather.name, VueFeather);
app.mount('#app');
