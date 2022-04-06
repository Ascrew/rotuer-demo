import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routeList = [
  {
    path: '/foo',
    component: () => import('@/views/demo/Bar.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/demo/Child.vue'),
      }
    ]
  },
  {
    path: '/bar',
    component: () => import('@/views/demo/Foo.vue')
  },
  {
    path: '*',
    component: () => import('@/views/404/index.vue')
  }
]

const router = new VueRouter({
  routes: routeList
})

export default router