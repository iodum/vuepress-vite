import { createApp } from 'vue'
import App from './App.vue'
import Lib from './index';

const app = createApp(App);
app.use(Lib);
app.mount('#app');
