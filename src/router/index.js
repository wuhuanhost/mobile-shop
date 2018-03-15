import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home.vue'
import Mine from '@/view/Mine.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { keepAlive: true }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { keepAlive: true }
    }, {
      path: '/mine',
      name: 'mine',
      component: Mine,
      meta: { keepAlive: true }
    }
  ]

})
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  console.log(this.$store)
  next()
})

export default router
