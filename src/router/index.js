import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '', // Esta es la ruta por defecto (el Inicio)
          name: 'inicio',
          component: () => import('../views/InicioView.vue')
        },
        {
          path: 'simulador', // Y esta es la ruta de las preguntas
          name: 'simulador',
          component: () => import('../views/SimuladorView.vue')
        },
        {
          path: 'biblioteca', // <--- Nueva ruta agregada
          name: 'biblioteca',
          component: () => import('../views/BibliotecaView.vue')
        },
        {
          path: 'perfil', // <--- Nueva ruta
          name: 'perfil',
          component: () => import('../views/PerfilView.vue')
        },
        {
          path: 'evaluacion', // <--- Nueva ruta para el examen oficial
          name: 'evaluacion',
          component: () => import('../views/EvaluacionView.vue')
        }
      ]
    }
  ]
})

export default router