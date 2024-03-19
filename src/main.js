import { createApp } from 'vue';
import routers from './routes';
import App from './App.vue';

const app = createApp(App)

app.use(routers);

app.mount("#app"); 