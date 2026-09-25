import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      // Operarios, RRHH y Admin pueden ver la app de aprendizaje
      meta: { rolesPermitidos: ['operario', 'rrhh', 'admin'] },
      children: [
        { path: '', name: 'inicio', component: () => import('../views/InicioView.vue') },
        { path: 'simulador', name: 'simulador', component: () => import('../views/SimuladorView.vue') },
        { path: 'biblioteca', name: 'biblioteca', component: () => import('../views/BibliotecaView.vue') },
        { path: 'perfil', name: 'perfil', component: () => import('../views/PerfilView.vue') },
        { path: 'evaluacion', name: 'evaluacion', component: () => import('../views/EvaluacionView.vue') }
      ]
    },
    {
      path: '/admin',
      component: () => import('../layouts/AdminLayout.vue'),
      // Solo RRHH y Admin pueden entrar a Gestión
      meta: { rolesPermitidos: ['rrhh', 'admin'] },
      children: [
        { path: '', name: 'admin-dashboard', component: () => import('../views/admin/DashboardView.vue') },
        { path: 'capacitaciones', name: 'admin-capacitaciones', component: () => import('../views/admin/CapacitacionesView.vue') },
        // SOLO Admin puede entrar a Usuarios (TI)
        { 
          path: 'usuarios', 
          name: 'admin-usuarios', 
          component: () => import('../views/admin/UsuariosView.vue'),
          meta: { rolesPermitidos: ['admin'] } 
        }
      ]
    }
  ]
})

// GUARDIA DE SEGURIDAD GLOBAL
router.beforeEach((to, from, next) => {
  const rolActual = localStorage.getItem('rolUsuario')

  // Si va al login, lo dejamos pasar siempre
  if (to.path === '/login') {
    return next()
  }

  // Si no hay rol guardado (no inició sesión), lo pateamos al login
  if (!rolActual) {
    return next('/login')
  }

  // Verificamos si la ruta tiene restricciones de rol
  if (to.meta.rolesPermitidos && !to.meta.rolesPermitidos.includes(rolActual)) {
    // Si es operario intentando entrar a admin, lo devolvemos al inicio
    if (rolActual === 'operario') return next('/')
    // Si es RRHH intentando entrar a usuarios, lo dejamos en su dashboard
    if (rolActual === 'rrhh') return next('/admin')
  }

  // Si pasó todos los controles, lo dejamos entrar
  next()
})

export default router