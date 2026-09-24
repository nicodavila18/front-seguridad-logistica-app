<template>
  <div class="w-full max-w-3xl mx-auto pb-12 font-sans">
    
    <!-- Encabezado de Examen Oficial -->
    <div class="mb-8 border-b-4 border-slate-900 pb-4 flex justify-between items-end">
      <div>
        <h2 class="text-3xl font-black text-slate-900 uppercase tracking-tighter">Evaluación Oficial</h2>
        <p class="text-red-500 font-bold uppercase tracking-widest text-sm mt-1 animate-pulse">Impacta en tu certificación</p>
      </div>
      <span class="bg-red-500 text-white font-black px-3 py-1 border-2 border-slate-900 shadow-[3px_3px_0_0_#0f172a] text-xs uppercase tracking-widest hidden sm:inline-block">
        Módulo 2
      </span>
    </div>

    <!-- Progreso del Examen -->
    <div class="flex justify-between items-center mb-4">
      <span class="text-slate-900 font-black uppercase tracking-widest text-sm">Pregunta 1 de 10</span>
      <span class="text-slate-500 font-bold uppercase tracking-widest text-sm">Aprobación: 70%</span>
    </div>
    <div class="w-full h-4 bg-slate-200 border-4 border-slate-900 mb-8 relative overflow-hidden">
      <div class="absolute top-0 left-0 h-full bg-red-500 w-[10%] border-r-4 border-slate-900"></div>
    </div>

    <!-- Tarjeta de Pregunta -->
    <div class="bg-white border-4 border-slate-900 p-6 sm:p-10 shadow-[8px_8px_0_0_#0f172a] mb-8 relative">
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-slate-900 opacity-90 flex items-center justify-center">
         <svg class="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
      </div>
      <h3 class="text-2xl font-black text-slate-900 leading-snug mt-2">
        Según los protocolos de la empresa, ¿cuál es el primer paso al detectar un incendio clase B?
      </h3>
    </div>

    <!-- Opciones -->
    <div class="space-y-4 mb-10">
      <button
        v-for="(opcion, index) in opciones"
        :key="index"
        @click="opcionSeleccionada = opcion"
        :class="[
          'w-full text-left p-4 sm:p-5 border-4 transition-all flex items-center gap-4 relative group',
          opcionSeleccionada === opcion ? 'border-slate-900 bg-yellow-300 shadow-[4px_4px_0_0_#0f172a] translate-x-1 -translate-y-1' : 'border-slate-900 bg-white hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#0f172a]'
        ]"
      >
        <div :class="[
          'w-8 h-8 border-4 border-slate-900 flex-shrink-0 flex items-center justify-center bg-white transition-colors',
          opcionSeleccionada === opcion ? 'bg-slate-900' : ''
        ]">
          <div v-if="opcionSeleccionada === opcion" class="w-3 h-3 bg-yellow-300"></div>
        </div>
        <span class="font-bold text-slate-900 text-lg sm:text-xl">{{ opcion }}</span>
      </button>
    </div>

    <!-- Controles -->
    <div class="flex justify-between items-center">
      <router-link to="/" class="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-red-500 underline">
        Abortar Examen
      </router-link>
      <button
        :disabled="!opcionSeleccionada"
        class="bg-slate-900 text-white px-8 py-4 border-4 border-slate-900 font-black uppercase tracking-widest shadow-[6px_6px_0_0_#cbd5e1] hover:bg-slate-800 hover:shadow-[2px_2px_0_0_#cbd5e1] hover:translate-y-1 transition-all disabled:opacity-50 disabled:shadow-none disabled:translate-y-0 disabled:cursor-not-allowed"
      >
        Siguiente
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const opciones = ref([
  "Utilizar agua inmediatamente",
  "Dar aviso y usar extintor de polvo químico seco (ABC)",
  "Abrir puertas y ventanas para ventilar",
  "Ignorar si es pequeño"
])
const opcionSeleccionada = ref(null)
</script>