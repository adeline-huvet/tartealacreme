import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import Page1 from '../views/Page1.vue';
// import Page2 from '../views/Page2.vue';



Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page1",
    name: "Page1",
    // component: Page1
    //ne charge la  page que quand celle-ci est appeler par l utilisateur
    component: () => import(/* webpackChunkName: "page1" */ '../views/Page1.vue'),
  },
  {
    path: "/page2",
    name: "Page2",
    // component: Page2
    component: () => import(/* webpackChunkName: "page1" */ '../views/Page2.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
