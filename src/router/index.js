import Vue from 'vue'
import Router from 'vue-router'
//矢量地图
import map from '@/views/home/home/map'
//百度地图
import baidumap from '@/views/home/home/home'
import login from '@/views/home/login/login'
import register from '@/views/home/register/register'
import coaldom from '@/views/coaldom/coaldom'
import datamessage from '@/views/domdata/datamessage'
// import datahisproblem from '@/views/problem/problem'
import datahisproblem from '@/views/problem/problem'
import datahistory from '@/views/history/history'
import createdom from '@/views/create/createdom'
import adminlogin from '@/views/admin/adminlogin'
import adminregister from '@/views/admin/adminregister'
import adminbtn from "@/views/admin/btn"
import dommap from '@/views/dommap/dommap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/allmap',
      name: 'allmap',
      component: baidumap
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      name:'login',
      path: '/login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/coaldom',
      name: coaldom,
      component:coaldom
    },
    {
      path: '/dataMess',
      name: 'dataMess',
      component: datamessage
    },
    {
      path: '/datahisproblem',
      name: 'problem',
      component: datahisproblem
    },
    {
      path: '/datahistory',
      name: 'history',
      component: datahistory
    },
    {
      path: '/domcreate',
      name: 'createdom',
      component: createdom
    },
    {
      path: '/adminlogin',
      name: 'adminlogin',
      component: adminlogin
    },
    {
      path: '/adminregister',
      name: 'adminregister',
      component: adminregister
    },
    {
      path: '/adminbtn',
      name: 'adminbtn',
      component: adminbtn
    },
    {
      path: '/dommap',
      name: 'dommap',
      component: dommap
    }
  ]
})
