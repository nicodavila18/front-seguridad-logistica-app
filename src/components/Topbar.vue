<template>
  <header class="h-20 bg-white border-b-4 border-slate-900 flex items-center justify-between px-8 z-10 w-full sticky top-0">
    
    <!-- Migas de pan fuertes -->
    <div class="flex items-center text-sm font-black text-slate-400 uppercase tracking-widest">
      <span class="hover:text-slate-900 cursor-pointer transition-colors">Seguridad</span>
      <svg class="w-5 h-5 mx-2 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
      <span class="text-slate-900 bg-emerald-300 px-3 py-1 border-2 border-slate-900 shadow-[2px_2px_0_0_#0f172a]">App</span>
    </div>

    <!-- Acciones -->
    <div class="flex items-center gap-6">
      
      <!-- Botón Ir a Gestión (SOLO VISIBLE PARA RRHH Y ADMIN) -->
      <router-link v-if="rolUsuario === 'rrhh' || rolUsuario === 'admin'" to="/admin" class="px-4 py-2 bg-slate-900 text-white border-2 border-slate-900 font-black text-[10px] sm:text-xs uppercase tracking-widest shadow-[3px_3px_0_0_#cbd5e1] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[5px_5px_0_0_#cbd5e1] hover:bg-slate-800 transition-all flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        Ir a Gestión
      </router-link>
      
      <!-- Campanita PC -->
      <button class="relative w-11 h-11 bg-white border-2 border-slate-900 flex items-center justify-center shadow-[3px_3px_0_0_#0f172a] hover:bg-yellow-300 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0_0_#0f172a] transition-all cursor-pointer">
        <svg class="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
        <span class="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-red-500 border-2 border-slate-900"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const rolUsuario = ref('')

onMounted(() => {
  rolUsuario.value = localStorage.getItem('rolUsuario') || 'operario'
})
</script>