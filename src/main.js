import './common/assets/reset.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PiniaRouter from "pinia-plugin-router";
import App from './App.vue'
import router from './router'
import { registerModules } from "./registerModules";









//Импорт всех модулей
import authModule from "./modules/auth";
//Регистрируем модули (в основном добавляем нужные нам данные для маршрутов)
registerModules(router,[

  authModule,
  

]);

const app = createApp(App)
const Pinia=createPinia();
Pinia.use(PiniaRouter(router));
app.use(Pinia);
app.use(router)
app.mount('#app')
