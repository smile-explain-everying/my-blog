import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '~/pages/Main.vue'
import Home from '~/pages/Home.vue'
import NPhoto from '~/pages/NPhoto.vue'
import NMusic from '~/pages/NMusic.vue'
import NVideo from '~/pages/NVideo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: '/photo',
        name: 'nphoto',
        component: NPhoto
      },
      {
        path: 'music',
        name: 'nmusic',
        component: NMusic
      },
      {
        path: 'video',
        name: 'nvideo',
        component: NVideo
      }
    ]
  }
]

export default new VueRouter({
  routes
})
