import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import SignUp from '@/components/SignUp'
import User from '@/components/user_page/User'
import UserProfile from '@/components/user_page/UserProfile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign_up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/user/:id',
      component: User,
      children: [
        {
          path: 'profile',
          component: UserProfile
        }
      ]
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
