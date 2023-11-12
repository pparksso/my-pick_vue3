import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'reset-css';
import '@/assets/styles/global.scss';
import App from './App.vue';
import router from '@/routes/index';

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app');
