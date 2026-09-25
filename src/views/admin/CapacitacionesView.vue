<template>
  <div class="w-full max-w-6xl mx-auto pb-12 font-sans">
    
    <!-- Header de Sección -->
    <div class="mb-10 border-b-4 border-slate-900 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
      <div>
        <h1 class="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-1">Capacitaciones</h1>
        <p class="text-slate-500 font-bold text-lg uppercase tracking-widest">Gestión de Módulos Oficiales</p>
      </div>
      <button @click="mostrarFormulario = !mostrarFormulario" class="bg-yellow-300 text-slate-900 px-6 py-3 border-4 border-slate-900 font-black uppercase tracking-widest shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0f172a] transition-all flex items-center gap-2">
        <svg v-if="!mostrarFormulario" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
        <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        {{ mostrarFormulario ? 'Cancelar Creación' : 'Crear Módulo' }}
      </button>
    </div>

    <!-- Formulario de Creación de Módulo -->
    <div v-if="mostrarFormulario" class="bg-white border-4 border-slate-900 p-6 md:p-8 shadow-[8px_8px_0_0_#0f172a] mb-12 animate-fade-in">
      <h2 class="text-2xl font-black text-slate-900 uppercase tracking-widest mb-6 border-b-4 border-slate-100 pb-2">Configurar Nuevo Módulo</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        
        <div class="flex flex-col gap-2">
          <label class="text-xs font-black text-slate-600 uppercase tracking-widest">Título de la Capacitación</label>
          <input type="text" placeholder="Ej: Protocolo de Derrames Tóxicos" class="w-full bg-slate-50 border-4 border-slate-900 px-4 py-3 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 transition-colors">
        </div>
        
        <div class="flex flex-col gap-2">
          <label class="text-xs font-black text-slate-600 uppercase tracking-widest">Público Objetivo (Segmentación)</label>
          <select class="w-full bg-slate-50 border-4 border-slate-900 px-4 py-3 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 transition-colors appearance-none cursor-pointer">
            <option value="todos">Toda la Planta (Base General)</option>
            <option value="mantenimiento">Solo Mantenimiento</option>
            <option value="desarrollo">Solo Desarrollo</option>
            <option value="nuevos">Solo Ingresantes (Onboarding)</option>
          </select>
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-xs font-black text-slate-600 uppercase tracking-widest">Fecha Límite (Opcional)</label>
          <input type="date" class="w-full bg-slate-50 border-4 border-slate-900 px-4 py-3 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 transition-colors cursor-pointer">
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-xs font-black text-slate-600 uppercase tracking-widest">Material Base (Manual Oficial)</label>
          <div class="relative">
            <select class="w-full bg-slate-50 border-4 border-slate-900 px-4 py-3 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 transition-colors appearance-none cursor-pointer">
              <option value="" disabled selected>Seleccionar manual de la biblioteca...</option>
              <option value="srt">Ley N° 25.877 - Régimen Laboral</option>
              <option value="evacuacion">Protocolo de Evacuación Nivel 1</option>
              <option value="matafuegos">Uso de Matafuegos (Clase A, B, C)</option>
              <option value="epp">Guía de Indumentaria 2026</option>
            </select>
            <!-- Icono de flecha custom -->
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-900">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección de Banco de Preguntas -->
      <div class="mb-8 p-6 border-4 border-slate-900 bg-slate-50">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <h3 class="text-sm font-black text-slate-900 uppercase tracking-widest">Cuestionario de Evaluación</h3>
          <div class="flex gap-2 w-full sm:w-auto">
            <button class="flex-1 sm:flex-none text-xs font-black bg-indigo-500 text-white px-3 py-2 uppercase tracking-widest hover:bg-indigo-600 flex items-center justify-center gap-1 border-2 border-slate-900 shadow-[2px_2px_0_0_#0f172a]">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              Generar con IA (n8n)
            </button>
            <button class="flex-1 sm:flex-none text-xs font-black bg-white text-slate-900 px-3 py-2 uppercase tracking-widest hover:bg-yellow-300 border-2 border-slate-900 shadow-[2px_2px_0_0_#0f172a]">
              + Añadir Pregunta Manual
            </button>
          </div>
        </div>
        <div class="text-center py-8 text-slate-400 font-bold text-sm uppercase tracking-widest border-4 border-dashed border-slate-300 bg-white">
          Selecciona un manual base y presiona "Generar con IA" o añade preguntas manualmente.
        </div>
      </div>

      <button class="w-full bg-emerald-400 text-slate-900 py-4 border-4 border-slate-900 font-black text-lg uppercase tracking-widest shadow-[6px_6px_0_0_#0f172a] hover:translate-y-1 hover:shadow-[2px_2px_0_0_#0f172a] transition-all">
        Guardar y Publicar Capacitación
      </button>
    </div>

    <!-- Grilla de Capacitaciones Existentes -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <!-- Módulo Base (Sin vencimiento) -->
      <div class="bg-white border-4 border-slate-900 p-6 flex flex-col shadow-[6px_6px_0_0_#0f172a] group hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#0f172a] transition-all">
        <div class="flex justify-between items-start mb-4">
          <span class="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1">General (Toda la Planta)</span>
          <button class="text-slate-400 hover:text-red-500 transition-colors" title="Eliminar Módulo">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
        <h3 class="text-xl font-black text-slate-900 leading-tight mb-2">Normativas SRT</h3>
        <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Módulo Base • Sin Vencimiento</p>
        <div class="mt-auto flex gap-2">
          <button class="flex-1 bg-slate-100 border-2 border-slate-900 py-2 font-black text-[10px] uppercase tracking-widest hover:bg-yellow-300 transition-colors">Editar</button>
          <button class="flex-1 bg-slate-100 border-2 border-slate-900 py-2 font-black text-[10px] uppercase tracking-widest hover:bg-emerald-300 transition-colors">Métricas</button>
        </div>
      </div>

      <!-- Módulo Segmentado (Con vencimiento) -->
      <div class="bg-yellow-50 border-4 border-slate-900 p-6 flex flex-col shadow-[6px_6px_0_0_#0f172a] group hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#0f172a] transition-all">
        <div class="flex justify-between items-start mb-4">
          <span class="bg-yellow-400 text-slate-900 border-2 border-slate-900 text-[10px] font-black uppercase tracking-widest px-2 py-1">Área: Mantenimiento</span>
          <button class="text-slate-400 hover:text-red-500 transition-colors">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
          </button>
        </div>
        <h3 class="text-xl font-black text-slate-900 leading-tight mb-2">Riesgo Eléctrico (Actualización)</h3>
        <p class="text-xs font-bold text-red-500 uppercase tracking-widest mb-6 flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          Vencimiento: 30 Nov 2026
        </p>
        <div class="mt-auto flex gap-2">
          <button class="flex-1 bg-white border-2 border-slate-900 py-2 font-black text-[10px] uppercase tracking-widest hover:bg-yellow-300 transition-colors">Editar</button>
          <button class="flex-1 bg-white border-2 border-slate-900 py-2 font-black text-[10px] uppercase tracking-widest hover:bg-emerald-300 transition-colors">Métricas</button>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const mostrarFormulario = ref(false)
</script>

<style>
.animate-fade-in {
  animation: fadeIn 0.2s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>