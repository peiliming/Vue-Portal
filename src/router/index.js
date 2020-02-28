import Vue from 'vue'
import VueRouter from 'vue-router'
import PortalDefault from '@/components/portal-default/PortalDefault.vue'
import vueAxiosTest from '@/components/vue-axios-test/vueAxiosTest.vue'
import PortalTransform from '@/components/portal-transform/PortalTransform.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'portal-default',
    component: PortalDefault
  },
  {
    path: '/vueAxiosTest',
    name: 'vue-axios-test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: vueAxiosTest
  },
  {
    path: '/portalTransform',
    name: 'portal-tranform',
    component: PortalTransform
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: 'active'
})

export default router
