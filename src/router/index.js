import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home.vue'
import Mine from '@/view/Mine.vue'
import Test1 from '@/view/Test1.vue'
// import Store from '../store'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/mine',
      name: 'mine',
      component: Mine
    }, {
      path: '/test',
      name: 'test',
      component: (resolve) => {
        require(['../view/SyncComponent.vue'], resolve)
      }
    }, {
      path: '/test1',
      name: 'test1',
      component: Test1
    }
  ]

})

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   console.log(Store)
//   Store.commit('UPDATE_VIEW', { name: to.name, desc: '' })
//   next()
// })

export default router
