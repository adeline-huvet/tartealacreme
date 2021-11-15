import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Page1 from '../views/Page1.vue';
import Page2 from '../views/Page2.vue';



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
    component: Page1
  },
  {
    path: "/page2",
    name: "Page2",
    component: Page2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
