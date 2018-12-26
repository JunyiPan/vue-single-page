import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Common/login/index'
import Layout from '@/components/Common/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '',
      name: 'Layout',
      component: Layout,
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/components/DashBoard/index'),
          name: 'dashboard',
          meta: {title: 'dashboard', icon: 'dashboard', noCache: true}
        }
      ]
    }
  ]
})
