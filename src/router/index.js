import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routeList = [
  {
    path: '/foo/:id',
    name: 'foo',
    component: () => import('@/views/demo/Foo.vue'),
    props: {
      name: 'zhangsan',
      age: '23'
    },
    children: [
      {
        path: 'child',
        name: 'child',
        component: () => import('@/views/demo/Child.vue'),
      }
    ]
  },
  {
    path: '/bar',
    name: 'bar',
    component: () => import('@/views/demo/Bar.vue')
    // redirect: {name: 'child'}
  },
  {
    path: '*',
    name: '*',
    component: () => import('@/views/404/index.vue')
  }
]

const router = new VueRouter({
  routes: routeList
})

export default router