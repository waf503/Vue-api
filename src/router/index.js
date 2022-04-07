import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrearCosa from '../components/CrearCosa.vue'
import EditarCosa from '../components/EditarCosa.vue'
import ListarCosa from '../components/ListarCosa.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'Crear',
    component: CrearCosa
  },
  {
    path: '/editar',
    name: 'Editar',
    component: EditarCosa
  },
  {
    path: '/listar',
    name: 'Listar',
    component: ListarCosa
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
