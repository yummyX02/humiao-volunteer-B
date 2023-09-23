import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


//引入全局icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
