<template>
  <div class="w-full max-w-6xl mx-auto pb-12 font-sans relative">
    
    <!-- Encabezado de Sección -->
    <div class="mb-10 border-b-4 border-slate-900 pb-4 flex justify-between items-end">
      <div>
        <h1 class="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-1">Mi Perfil</h1>
        <p class="text-slate-600 font-bold text-lg uppercase tracking-widest">Credencial y Logros</p>
      </div>
    </div>

    <!-- Contenedor con items-start para evitar que se estiren igual -->
    <div class="flex flex-col lg:flex-row gap-8 items-start">
      
      <!-- ID Badge (Fijado con Sticky) -->
      <div class="w-full lg:w-1/3 bg-white border-4 border-slate-900 shadow-[8px_8px_0_0_#0f172a] flex flex-col relative overflow-hidden group lg:sticky lg:top-32">
        <!-- Cinta superior -->
        <div class="h-6 bg-yellow-300 border-b-4 border-slate-900 w-full"></div>
        
        <div class="p-8 flex flex-col items-center text-center">
          <!-- Foto de Perfil -->
          <div class="w-24 h-24 bg-indigo-500 border-4 border-slate-900 mb-6 flex items-center justify-center shadow-[4px_4px_0_0_#0f172a] transform group-hover:-translate-y-1 group-hover:scale-105 transition-all">
            <span class="text-4xl font-black text-white">LD</span>
          </div>
          
          <h2 class="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none mb-2">Lucas Dávila</h2>
          <p class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Planta Sur</p>
          
          <!-- Área Asignada en vez de ID -->
          <div class="w-full bg-slate-100 border-4 border-slate-900 p-4 mb-2 shadow-[4px_4px_0_0_#0f172a]">
            <p class="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Área Asignada</p>
            <p class="text-xl font-black text-slate-900 tracking-widest uppercase">Desarrollo</p>
          </div>
        </div>
        
        <!-- Código de barras estético -->
        <div class="h-12 w-full border-t-4 border-slate-900 flex items-center justify-center px-4 opacity-80" 
             style="background: repeating-linear-gradient(90deg, #0f172a, #0f172a 3px, transparent 3px, transparent 6px, #0f172a 6px, #0f172a 12px, transparent 12px, transparent 14px);">
        </div>
      </div>

      <!-- Panel de Estadísticas y Grilla de Certificados -->
      <div class="w-full lg:w-2/3 flex flex-col gap-8">
        
        <!-- Stats Rápidas -->
        <div class="grid grid-cols-2 gap-6">
          <div class="bg-emerald-400 border-4 border-slate-900 p-6 shadow-[6px_6px_0_0_#0f172a] transform hover:-translate-y-1 transition-transform">
            <p class="text-xs font-black text-slate-900 uppercase tracking-widest mb-2">Aprobados</p>
            <p class="text-5xl font-black text-slate-900">1<span class="text-xl opacity-60">/4</span></p>
          </div>
          <div class="bg-white border-4 border-slate-900 p-6 shadow-[6px_6px_0_0_#0f172a] transform hover:-translate-y-1 transition-transform">
            <p class="text-xs font-black text-slate-900 uppercase tracking-widest mb-2">Racha Días</p>
            <p class="text-5xl font-black text-slate-900">3</p>
          </div>
        </div>

        <!-- Colección de Certificados (Formato Grilla Compacta) -->
        <div class="bg-white border-4 border-slate-900 p-6 sm:p-8 shadow-[8px_8px_0_0_#0f172a]">
          <h3 class="text-xl font-black text-slate-900 uppercase tracking-widest mb-6">Colección de Certificados</h3>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <!-- Certificado Aprobado (Estilo Sello/Badge) -->
            <div class="bg-emerald-50 border-4 border-slate-900 p-5 flex flex-col justify-between shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0f172a] transition-all group">
              <div class="flex justify-between items-start mb-6">
                <div class="w-12 h-12 bg-emerald-400 border-4 border-slate-900 flex items-center justify-center rounded-full shadow-[2px_2px_0_0_#0f172a]">
                  <svg class="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                </div>
                <button class="bg-white border-2 border-slate-900 text-[10px] font-black uppercase tracking-widest px-2 py-1 shadow-[2px_2px_0_0_#0f172a] hover:bg-yellow-300 transition-colors flex items-center gap-1">
                  <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  PDF
                </button>
              </div>
              <div>
                <h4 class="font-black text-slate-900 uppercase text-lg leading-tight mb-1">Normativas SRT</h4>
                <p class="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Aprobado 24/09/26</p>
              </div>
            </div>

            <!-- Certificado Bloqueado -->
            <div class="bg-slate-100 border-4 border-slate-900 p-5 flex flex-col justify-between opacity-60 grayscale cursor-not-allowed">
              <div class="flex justify-between items-start mb-6">
                <div class="w-12 h-12 bg-slate-300 border-4 border-slate-500 flex items-center justify-center rounded-full">
                  <svg class="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/></svg>
                </div>
              </div>
              <div>
                <h4 class="font-black text-slate-600 uppercase text-lg leading-tight mb-1">Prevención Fuego</h4>
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Bloqueado</p>
              </div>
            </div>
            
            <!-- Simulamos un tercero bloqueado para ver la grilla -->
            <div class="bg-slate-100 border-4 border-slate-900 p-5 flex flex-col justify-between opacity-60 grayscale cursor-not-allowed">
              <div class="flex justify-between items-start mb-6">
                <div class="w-12 h-12 bg-slate-300 border-4 border-slate-500 flex items-center justify-center rounded-full">
                  <svg class="w-6 h-6 text-slate-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/></svg>
                </div>
              </div>
              <div>
                <h4 class="font-black text-slate-600 uppercase text-lg leading-tight mb-1">Uso de EPP</h4>
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Bloqueado</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>