import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import ChildProblem from '../views/ChildProblem.vue'
import ProblemManage from '../views/ProblemManage.vue'
import ChatPlatform from '../views/ChatPlatform.vue'
import Personal from '../views/Personal.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }, // 需要身份验证
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/childProblem',
    name: 'childProblem',
    component: ChildProblem,
    meta: { requiresAuth: true }, // 需要身份验证
  },
  {
    path: '/problemManage',
    name: 'problemManage',
    component: ProblemManage,
    meta: { requiresAuth: true }, // 需要身份验证
  },
  {
    path: '/chatPlatform',
    name: 'chatPlatform',
    component: ChatPlatform,
    meta: { requiresAuth: true }, // 需要身份验证
  },
  {
    path: '/personal',
    name: 'personal',
    component: Personal,
    meta: { requiresAuth: true }, // 需要身份验证
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
