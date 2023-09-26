import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//引入axios
import axiosInstance from './requests/index'

// 引入localForage
import localForage from "localforage";

//引入全局icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createRouter, createWebHistory } from 'vue-router'
import router from './router'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 将 Axios 实例添加到 Vue 原型中，使其在整个应用程序中可用
app.config.globalProperties.$axios = axiosInstance;

// 使用 provide 将 localforage 注册为全局服务
app.provide('localforage', localForage);

// 添加全局的路由守卫
// 路由守卫
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // 检查用户是否已登录，这里假设有一个名为isAuthenticated的变量用于表示登录状态
  const isLogin = localStorage.getItem('isLogin');
  if (requiresAuth && !isLogin) {
    // 如果需要登录但用户未登录，重定向到登录页或其他页面
    next('/login') // 在这里，您可以指定登录页面的路由路径
  } else {
    // 如果不需要登录或用户已登录，允许访问
    next();
  }
})
createApp(App).use(ElementPlus).use(store).use(router).mount('#app')
function checkUserAuthentication() {
  throw new Error('Function not implemented.')
}

