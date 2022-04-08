import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routeList = [
  {
    path: '/foo',
    name: 'foo',
    component: () => import('@/views/demo/Foo.vue'),
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

router.beforeEach((to, from, next) => {
  console.log('listen router TO before Each in router/indexjs => ', to)
  console.log('listen router FROM before Each in router/indexjs => ', from)
  next()
})

export default router