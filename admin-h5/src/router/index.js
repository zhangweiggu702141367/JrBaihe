import Vue from 'vue'
import Router from 'vue-router'

const login = r => require.ensure([], () => r(require('@/components/Login')), 'login')
const hello = r => require.ensure([], () => r(require('@/components/Hello')), 'hello')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    }
  ]
})
