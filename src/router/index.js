import { createRouter, createWebHistory } from "vue-router"
import IceChart from "@/views/IceChart.vue"
import HomeView from "@/views/HomeView.vue"
import GoogleView from "@/views/GoogleView.vue"
import GoogleMap from "@/views/GoogleMap.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/map/:ice",
    name: "map",
    props: true,

    component: GoogleView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SearchView.vue"),
  },
  {
    path: "/icechart",
    name: "icechart",
    component: IceChart,
  },
  {
    path: "/GoogleMap",
    name: "GoogleMap",
    component: GoogleMap,
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
export default router
