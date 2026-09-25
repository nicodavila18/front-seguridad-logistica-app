<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const rolUsuario = ref('')

onMounted(() => {
  rolUsuario.value = localStorage.getItem('rolUsuario') || 'rrhh'
})

const cerrarSesion = () => {
  localStorage.removeItem('rolUsuario')
  router.push('/login')
}
</script>

<template>
  <div class="h-[100dvh] bg-slate-50 flex overflow-hidden font-sans">
    
    <!-- Sidebar de Comando (Verde Corporativo) -->
    <aside class="hidden md:flex flex-col w-72 bg-emerald-500 border-r-4 border-slate-900 p-6 z-20">
      
      <!-- Logo Sistema -->
      <div class="flex items-center gap-4 mb-12 mt-2">
        <div class="w-12 h-12 bg-white border-4 border-slate-900 flex items-center justify-center shadow-[4px_4px_0_0_#0f172a]">
          <svg class="w-7 h-7 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        </div>
        <div class="flex flex-col">
          <span class="text-xl font-black text-slate-900 tracking-tighter uppercase leading-none">Gestión</span>
          <span class="text-[10px] text-slate-800 font-black tracking-widest">{{ rolUsuario === 'admin' ? 'SISTEMAS' : 'RRHH / GERENCIA' }}</span>
        </div>
      </div>

      <!-- Navegación Admin -->
      <nav class="flex flex-col gap-4 flex-grow">
        <router-link to="/admin" exact-active-class="bg-white shadow-[4px_4px_0_0_#0f172a] -translate-y-1 -translate-x-1" class="px-4 py-3 border-4 border-transparent text-slate-900 font-black uppercase tracking-widest transition-all flex items-center gap-3 hover:bg-white/50">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
          Métricas
        </router-link>

        <router-link to="/admin/capacitaciones" active-class="bg-white shadow-[4px_4px_0_0_#0f172a] -translate-y-1 -translate-x-1" class="px-4 py-3 border-4 border-transparent text-slate-900 font-black uppercase tracking-widest transition-all flex items-center gap-3 hover:bg-white/50">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8"/></svg>
          Capacitaciones
        </router-link>

        <router-link v-if="rolUsuario === 'admin'" to="/admin/usuarios" active-class="bg-white shadow-[4px_4px_0_0_#0f172a] -translate-y-1 -translate-x-1" class="px-4 py-3 border-4 border-transparent text-slate-900 font-black uppercase tracking-widest transition-all flex items-center gap-3 hover:bg-white/50 bg-slate-900/10">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
          G. Sistema
        </router-link>
      </nav>

      <!-- Perfil Gerencial y Salida -->
      <div class="mt-auto pt-6 border-t-4 border-slate-900 flex items-center justify-between">
        
        <!-- Info del Usuario (Movido de arriba hacia abajo) -->
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-slate-900 border-2 border-slate-900 flex items-center justify-center text-white font-black shadow-[2px_2px_0_0_#0f172a]">
            {{ rolUsuario === 'admin' ? 'TI' : 'RH' }}
          </div>
          <div class="flex flex-col">
            <span class="text-sm font-black text-slate-900 uppercase tracking-tight">{{ rolUsuario === 'admin' ? 'Sistemas' : 'Recursos H.' }}</span>
            <span class="text-[10px] font-bold text-slate-800 uppercase tracking-widest">{{ rolUsuario === 'admin' ? 'Admin' : 'Gerencia' }}</span>
          </div>
        </div>

        <!-- Botón Cerrar Sesión (Power) -->
        <button @click="cerrarSesion" class="text-slate-900 hover:text-red-600 hover:scale-110 transition-transform cursor-pointer" title="Cerrar Sesión">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9" />
          </svg>
        </button>
      </div>
    </aside>

    <div class="flex-1 flex flex-col min-w-0 relative">
      
      <!-- Topbar Administrativo -->
      <header class="h-20 bg-white border-b-4 border-slate-900 flex items-center justify-between px-8 z-10 w-full sticky top-0 shadow-sm">
        <div class="text-slate-900 font-black uppercase tracking-widest text-lg">
          Panel de Control
        </div>
        
        <div class="flex items-center gap-6">
          
          <!-- Botón Volver a App Operativa (Movido de abajo hacia arriba) -->
          <router-link to="/" class="px-4 py-2 bg-yellow-300 text-slate-900 border-2 border-slate-900 font-black text-xs uppercase tracking-widest shadow-[3px_3px_0_0_#0f172a] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[5px_5px_0_0_#0f172a] hover:bg-yellow-400 transition-all flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Volver a App
          </router-link>

        </div>
      </header>

      <!-- Contenido Principal -->
      <main class="flex-1 overflow-y-auto p-4 sm:p-8 md:p-10 scroll-smooth">
        <router-view></router-view>
      </main>
    </div>

  </div>
</template>