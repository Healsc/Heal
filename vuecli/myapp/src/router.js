import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: () => import( '@/views/movie/Movie.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import( './views/book/Book.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import( './views/music/Music.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import( './views/chat/Chat.vue')
    },
    {
      path: '*',
      component: () => import( './views/Error.vue')
    },{
      path:"/bookdetail",
      name:"bookdetail",
      component:()=>import('./views/book/Bookdetail.vue')
    }
  ]
})
