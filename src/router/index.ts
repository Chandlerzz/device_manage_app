import Vue from "vue";
import {createRouter,createWebHashHistory} from 'vue-router';


const routes = [
  {
    path:'/',
    redirect:'/welcome'
  },
  {
    path:'/welcome',
    name:'/welcome',
    component:() => import ("@/views/welcome/index.vue"),
    meta: {
      title: '欢迎页'
    }
  },
  {
    path:'/home',
    name:'/home',
    component:() => import ("@/views/home/index.vue"),
    meta: {
      title: '首页'
    }
  },
]


 export default createRouter({
  history:createWebHashHistory(),
  routes,
})
