<template>
  <div class="w-full max-w-5xl mx-auto pb-12 font-sans">
    
    <!-- Encabezado con estilo Industrial -->
    <div class="mb-10 pb-6 border-b-4 border-slate-900 flex justify-between items-end pr-14 md:pr-0">
      <div>
        <h1 class="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-1 leading-none">Panel de Operario</h1>
        <p class="text-slate-600 font-bold text-sm sm:text-lg mt-2">LUCAS DÁVILA • PLANTA SUR</p>
      </div>
      <div class="hidden sm:block text-right">
        <p class="text-xs font-bold text-slate-500 tracking-widest uppercase">Certificación</p>
        <p class="text-2xl font-black text-emerald-600">75%</p>
      </div>
    </div>

    <!-- Widgets Sharp (Sin bordes redondeados, sombras sólidas) -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
      <div class="bg-white border-2 border-slate-900 p-5 shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0f172a] transition-all">
        <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Nivel General</p>
        <p class="text-2xl font-black text-slate-900">INICIAL</p>
      </div>
      
      <div class="bg-emerald-400 border-2 border-slate-900 p-5 shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0f172a] transition-all">
        <p class="text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Precisión</p>
        <p class="text-2xl font-black text-slate-900">-- %</p>
      </div>

      <div class="bg-amber-300 border-2 border-slate-900 p-5 shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0f172a] transition-all">
        <p class="text-xs font-bold text-slate-900 uppercase tracking-widest mb-2">Vencimiento</p>
        <p class="text-2xl font-black text-slate-900">N/A</p>
      </div>
    </div>

    <!-- Tablero de Mapa Zig-Zag -->
    <div class="relative w-full bg-slate-900 border-4 border-slate-900 shadow-[8px_8px_0_0_#cbd5e1] p-8 sm:p-16 overflow-hidden">
      
      <!-- Fondo de plano técnico (Blueprint grid) -->
      <div class="absolute inset-0 opacity-20 pointer-events-none" 
           style="background-image: linear-gradient(#475569 2px, transparent 2px), linear-gradient(90deg, #475569 2px, transparent 2px); background-size: 40px 40px;">
      </div>

      <h2 class="relative z-10 text-white text-2xl font-black uppercase tracking-widest mb-16 text-center">
        Mapa de Certificación
      </h2>

      <!-- Contenedor del camino gamificado -->
      <div class="relative z-10 w-full max-w-2xl mx-auto flex flex-col gap-12 sm:gap-24">
        
        <!-- NODO 1: Completado (Alineado a la izquierda) -->
        <div class="self-start w-[85%] sm:w-1/2 relative group">
          <!-- Conector de SVG (Línea ZigZag al nodo 2) -->
          <svg class="hidden sm:block absolute top-[60%] left-[90%] w-[120%] h-32 -z-10 text-emerald-500 opacity-60" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,0 C60,0 40,100 100,100" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="8 8"/>
          </svg>
          
          <div class="bg-white border-2 border-slate-900 p-1 shadow-[6px_6px_0_0_rgba(16,185,129,1)]">
            <div class="border-2 border-dashed border-emerald-500 p-4">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-emerald-500 border-2 border-slate-900 flex-shrink-0 flex items-center justify-center shadow-[2px_2px_0_0_#0f172a]">
                  <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <div>
                  <p class="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mb-1">Módulo 1 • Aprobado</p>
                  <h3 class="font-black text-slate-900 leading-tight text-lg">Normativas SRT</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- NODO 2: Activo (Alineado a la derecha) -->
        <div class="self-end w-[85%] sm:w-1/2 relative group">
          <!-- Conector de SVG (Línea ZigZag al nodo 3 invertida) -->
          <svg class="hidden sm:block absolute top-[60%] right-[90%] w-[120%] h-32 -z-10 text-indigo-500 opacity-60 transform scale-x-[-1]" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,0 C60,0 40,100 100,100" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="8 8"/>
          </svg>

          <div class="bg-indigo-500 border-2 border-slate-900 p-5 shadow-[6px_6px_0_0_rgba(255,255,255,1)] transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0_0_rgba(255,255,255,1)] transition-all">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-white border-2 border-slate-900 flex-shrink-0 flex items-center justify-center font-black text-xl text-indigo-600 shadow-[2px_2px_0_0_#0f172a] animate-pulse">
                2
              </div>
              <div>
                <p class="text-[10px] text-indigo-100 font-bold uppercase tracking-widest mb-1">En curso</p>
                <h3 class="font-black text-white leading-tight text-lg">Prevención Incendios</h3>
              </div>
            </div>
            
            <!-- Botón de acción con estilo retro-tech -->
            <router-link to="/evaluacion" class="block w-full bg-yellow-300 text-slate-900 border-2 border-slate-900 text-center font-black uppercase tracking-widest py-3 shadow-[3px_3px_0_0_#0f172a] hover:bg-yellow-400 hover:shadow-[1px_1px_0_0_#0f172a] hover:translate-y-[2px] hover:translate-x-[2px] transition-all">
              Iniciar Evaluación
            </router-link>
          </div>
        </div>

        <!-- NODO 3: Bloqueado (Alineado a la izquierda) -->
        <div class="self-start w-[85%] sm:w-1/2 relative group opacity-60 grayscale cursor-not-allowed">
          <div class="bg-slate-200 border-2 border-slate-400 p-5 shadow-[6px_6px_0_0_#94a3b8]">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-slate-300 border-2 border-slate-400 flex-shrink-0 flex items-center justify-center shadow-[2px_2px_0_0_#64748b]">
                <svg class="w-6 h-6 text-slate-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/></svg>
              </div>
              <div>
                <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Bloqueado</p>
                <h3 class="font-black text-slate-700 leading-tight text-lg">Equipos EPP</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>