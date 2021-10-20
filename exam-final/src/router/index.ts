import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import EntryList from '@/views/EntryList.vue'
import EntryDetails from '@/views/EntryDetails.vue'
import EntryCreate from '@/views/EntryCreate.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // หน้าแรก
  {
    path: '/entry/push',
    name: 'EntryDetails',
    component: EntryDetails
  },
  // หน้าสอง
  {
    path: '/entries',
    name: 'EntryList',
    component: EntryList
  },
  // หน้าสอง
  {
    path: '/create',
    name: 'EntryCreate',
    component: EntryCreate
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
