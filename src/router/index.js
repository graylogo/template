import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'
import Add from '../views/routetest/user/add.vue'
import Edit from '../views/routetest/user/edit.vue'
import Left from '../views/routetest/user/left.vue'
import Right from '../views/routetest/user/right.vue'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
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
        path: 'user/:id',
        name: 'user',
        component: () => import('../views/routetest/User.vue'),
        redirect: to => `/route/user/${to.params.id}/add`,
        children: [
          {
            path: 'add', components: {
              default: Add,
              // 根据router-view的name属性来匹配
              left: Left,
              right: Right
            }
          },
          { path: 'edit', component: Edit }
        ]
      },
      {
        path: '/product/:id',
        name: 'product',
        props: true,
        component: () => import('../views/routetest/Product.vue')
      },
      //   注意，要实现子路由，即路由前面自动加上他的父级路由，那么前面不能加斜杠 /
      {
        path: 'others',
        name: 'others',
        props: (route) => ({ queryID: route.query.queryID }),
        component: () => import('../views/routetest/Others.vue')
      }
    ]
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/blog/index.vue')
  },
  // 404页面
  {
    path: '*',
    name: 'notfound',
    component: () => import('../views/notfound/404NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((from, to, next) => {
  next()
})
export default router
