import '@mr/miniapp-runtime/dist/style.css';
import './assets/main.css';

import { createApp } from 'vue';

import App from './App.vue';

import miniapp from '@mr/miniapp-runtime';

const app = createApp(App);

app.use(miniapp);

app.mount('#app');
