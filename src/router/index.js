import Vue from 'vue'
import VueRouter from 'vue-router'
import Play from '../components/Play.vue'
import Artist from '../components/Artist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Play',
    component: Play
  },
  {
    path: '/artist/:artist',
    name: 'artist',
    component: Artist,
    props:"toto",
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
