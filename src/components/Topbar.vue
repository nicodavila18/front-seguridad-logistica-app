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
      <span class="px-3 py-1.5 bg-white border-2 border-slate-900 font-black text-[10px] uppercase tracking-widest shadow-[3px_3px_0_0_#0f172a] flex items-center">
        <span class="w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-900 mr-2 animate-pulse"></span>
        Sistema Activo
      </span>
      
      <!-- Campanita PC -->
      <button class="relative w-11 h-11 bg-white border-2 border-slate-900 flex items-center justify-center shadow-[3px_3px_0_0_#0f172a] hover:bg-yellow-300 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0_0_#0f172a] transition-all cursor-pointer">
        <svg class="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
        <!-- Punto rojo de alerta -->
        <span class="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-red-500 border-2 border-slate-900"></span>
      </button>
    </div>
  </header>
</template>