<template>
  <aside class="hidden md:flex flex-col w-72 bg-white border-r-4 border-slate-900 p-6 z-20">
    
    <!-- Logo Industrial -->
    <div class="flex items-center gap-4 mb-12 mt-2">
      <div class="w-12 h-12 bg-emerald-400 border-2 border-slate-900 flex items-center justify-center shadow-[4px_4px_0_0_#0f172a]">
        <svg class="w-7 h-7 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
      </div>
      <span class="text-2xl font-black text-slate-900 tracking-tighter uppercase">Seguridad</span>
    </div>

    <!-- Navegación con Hover Agresivo -->
    <nav class="flex flex-col gap-5 flex-grow">
      
      <router-link to="/" exact-active-class="bg-yellow-300 shadow-[4px_4px_0_0_#0f172a] -translate-x-1 -translate-y-1" class="px-4 py-3 border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest transition-all flex items-center gap-3 hover:bg-yellow-300 hover:shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 hover:-translate-x-1">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        Inicio
      </router-link>

      <router-link to="/simulador" active-class="bg-yellow-300 shadow-[4px_4px_0_0_#0f172a] -translate-x-1 -translate-y-1" class="px-4 py-3 border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest transition-all flex items-center gap-3 hover:bg-yellow-300 hover:shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 hover:-translate-x-1">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        Simulador
      </router-link>

      <router-link to="/biblioteca" active-class="bg-yellow-300 shadow-[4px_4px_0_0_#0f172a] -translate-x-1 -translate-y-1" class="px-4 py-3 border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest transition-all flex items-center gap-3 hover:bg-yellow-300 hover:shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 hover:-translate-x-1">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
        Biblioteca
      </router-link>

      <router-link to="/perfil" active-class="bg-yellow-300 shadow-[4px_4px_0_0_#0f172a] -translate-x-1 -translate-y-1" class="px-4 py-3 border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest transition-all flex items-center gap-3 hover:bg-yellow-300 hover:shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 hover:-translate-x-1">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
        Perfil
      </router-link>
      
    </nav>

    <!-- Perfil -->
    <div class="mt-auto pt-6 border-t-4 border-slate-900 flex items-center gap-4">
      <div class="w-12 h-12 bg-indigo-500 border-2 border-slate-900 flex items-center justify-center text-white font-black shadow-[3px_3px_0_0_#0f172a]">
        LD
      </div>
      <div class="flex flex-col">
        <span class="text-sm font-black text-slate-900 uppercase tracking-tight">Lucas Dávila</span>
        <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Desarrollo</span>
      </div>
    </div>
  </aside>
</template>