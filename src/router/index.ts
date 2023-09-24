import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
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
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/childProblem',
    name: 'childProblem',
    component: ChildProblem
  },
  {
    path: '/problemManage',
    name: 'problemManage',
    component: ProblemManage
  },
  {
    path: '/chatPlatform',
    name: 'chatPlatform',
    component: ChatPlatform
  },
  {
    path: '/personal',
    name: 'personal',
    component: Personal
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
