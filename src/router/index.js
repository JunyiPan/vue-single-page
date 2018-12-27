import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Common/login/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
