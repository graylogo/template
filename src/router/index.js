import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/someicon',
    name: 'Icon',
    component: () => import('../views/CommonIcon.vue')
  },
  {
    path: '/select',
    name: 'Form',
    component: () => import('../views/MyForm.vue')
  },
  {
    path: '/table',
    name: 'Form',
    component: () => import('../views/Table.vue')
  },
  {
    path: '/completeTable',
    name: 'mytable',
    component: () => import('../views/table/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
