import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/drag',
        component: () => import('../views/Drag.vue')
      },
      {
        path: '/tree',
        component: () => import('../views/Tree.vue')
      }
    ]
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
    path: '/tableori',
    name: 'tableOri',
    component: () => import('../views/tableOri/index.vue')
  },
  {
    path: '/completeTable',
    name: 'mytable',
    component: () => import('../views/table/index.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import('../views/Vuex.vue')
  },
  {
    path: '/route',
    name: 'route',
    component: () => import('../views/Route.vue'),
    children: [
      {
        path: '/user/:id',
        name: 'user',
        component: () => import('../views/routetest/User.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        props: true,
        component: () => import('../views/routetest/Product.vue')
      },
      {
        path: '/others',
        name: 'others',
        props: true,
        component: () => import('../views/routetest/Others.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
