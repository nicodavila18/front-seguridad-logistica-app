<template>
  <div class="w-full max-w-6xl mx-auto pb-12 font-sans">
    
    <!-- Header de Sección -->
    <div class="mb-8 border-b-4 border-slate-900 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
      <div>
        <h1 class="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-1">Sistema</h1>
        <p class="text-slate-500 font-bold text-lg uppercase tracking-widest">Gestión de Usuarios y Servidor</p>
      </div>
      <div class="bg-indigo-500 text-white px-4 py-2 border-4 border-slate-900 font-black uppercase tracking-widest shadow-[4px_4px_0_0_#0f172a]">
        Acceso Nivel Dios (TI)
      </div>
    </div>

    <!-- Pestañas (Tabs) Neo-Brutalistas -->
    <div class="flex gap-4 mb-8">
      <button 
        @click="pestañaActiva = 'usuarios'"
        :class="[
          'px-6 py-3 font-black uppercase tracking-widest border-4 border-slate-900 transition-all flex items-center gap-2',
          pestañaActiva === 'usuarios' ? 'bg-yellow-300 text-slate-900 shadow-[4px_4px_0_0_#0f172a] translate-x-1 -translate-y-1' : 'bg-white text-slate-500 hover:bg-slate-100 hover:-translate-y-1'
        ]"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
        Personal (Empleados)
      </button>
      
      <button 
        @click="pestañaActiva = 'archivos'"
        :class="[
          'px-6 py-3 font-black uppercase tracking-widest border-4 border-slate-900 transition-all flex items-center gap-2',
          pestañaActiva === 'archivos' ? 'bg-yellow-300 text-slate-900 shadow-[4px_4px_0_0_#0f172a] translate-x-1 -translate-y-1' : 'bg-white text-slate-500 hover:bg-slate-100 hover:-translate-y-1'
        ]"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>
        Base de Datos (PDFs)
      </button>
    </div>

    <!-- CONTENIDO: PESTAÑA USUARIOS -->
    <div v-if="pestañaActiva === 'usuarios'" class="animate-fade-in">
      <div class="bg-white border-4 border-slate-900 p-6 md:p-8 shadow-[8px_8px_0_0_#0f172a]">
        
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-black text-slate-900 uppercase tracking-widest border-b-4 border-yellow-300 pb-1 inline-block">Directorio de Empleados</h2>
          <button class="bg-slate-900 text-white px-4 py-2 border-2 border-slate-900 font-black text-xs uppercase tracking-widest shadow-[3px_3px_0_0_#cbd5e1] hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-1">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
            Alta Usuario
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-100 border-y-4 border-slate-900">
                <th class="py-4 px-4 text-xs font-black text-slate-900 uppercase tracking-widest">Nombre</th>
                <th class="py-4 px-4 text-xs font-black text-slate-900 uppercase tracking-widest">Área</th>
                <th class="py-4 px-4 text-xs font-black text-slate-900 uppercase tracking-widest">Rol de Sistema</th>
                <th class="py-4 px-4 text-xs font-black text-slate-900 uppercase tracking-widest">Estado</th>
                <th class="py-4 px-4 text-xs font-black text-slate-900 uppercase tracking-widest text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b-2 border-slate-200 hover:bg-yellow-50 transition-colors group">
                <td class="py-4 px-4 font-black text-slate-900">Lucas Dávila</td>
                <td class="py-4 px-4 font-bold text-slate-600">Desarrollo</td>
                <td class="py-4 px-4"><span class="bg-slate-200 text-slate-900 text-[10px] font-black uppercase px-2 py-1 border-2 border-slate-900">Operario</span></td>
                <td class="py-4 px-4"><span class="text-emerald-600 font-black text-xs flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Activo</span></td>
                <td class="py-4 px-4 text-right flex justify-end gap-2">
                  <button class="p-2 border-2 border-slate-900 bg-white hover:bg-yellow-300 transition-colors" title="Editar"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg></button>
                  <button class="p-2 border-2 border-slate-900 bg-white hover:bg-red-400 hover:text-white transition-colors" title="Dar de Baja (Soft Delete)"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg></button>
                </td>
              </tr>
              <tr class="border-b-2 border-slate-200 hover:bg-yellow-50 transition-colors group">
                <td class="py-4 px-4 font-black text-slate-900">Marta López</td>
                <td class="py-4 px-4 font-bold text-slate-600">Recursos Humanos</td>
                <td class="py-4 px-4"><span class="bg-indigo-300 text-slate-900 text-[10px] font-black uppercase px-2 py-1 border-2 border-slate-900">Gestión (RRHH)</span></td>
                <td class="py-4 px-4"><span class="text-emerald-600 font-black text-xs flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Activo</span></td>
                <td class="py-4 px-4 text-right flex justify-end gap-2">
                  <button class="p-2 border-2 border-slate-900 bg-white hover:bg-yellow-300 transition-colors" title="Editar"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg></button>
                  <button class="p-2 border-2 border-slate-900 bg-white hover:bg-red-400 hover:text-white transition-colors" title="Dar de Baja"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg></button>
                </td>
              </tr>
              <!-- Empleado Inactivo (Baja) -->
              <tr class="bg-slate-50 opacity-60 grayscale hover:grayscale-0 transition-all">
                <td class="py-4 px-4 font-black text-slate-900 line-through">Jorge Ríos</td>
                <td class="py-4 px-4 font-bold text-slate-600">Mantenimiento</td>
                <td class="py-4 px-4"><span class="bg-slate-200 text-slate-900 text-[10px] font-black uppercase px-2 py-1 border-2 border-slate-900">Operario</span></td>
                <td class="py-4 px-4"><span class="text-red-600 font-black text-xs flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-red-500"></span> Inactivo</span></td>
                <td class="py-4 px-4 text-right flex justify-end gap-2">
                  <button class="p-2 border-2 border-slate-900 bg-white hover:bg-emerald-400 hover:text-slate-900 transition-colors" title="Restaurar Usuario"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- CONTENIDO: PESTAÑA ARCHIVOS DEL SERVIDOR -->
    <div v-else class="animate-fade-in">
      <div class="bg-white border-4 border-slate-900 p-6 md:p-8 shadow-[8px_8px_0_0_#0f172a]">
        
        <div class="mb-8 p-8 border-4 border-dashed border-slate-900 bg-indigo-50 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-indigo-100 transition-colors">
          <div class="w-16 h-16 bg-indigo-500 border-4 border-slate-900 flex items-center justify-center shadow-[4px_4px_0_0_#0f172a] mb-4">
            <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
          </div>
          <h3 class="font-black text-slate-900 text-xl uppercase tracking-widest mb-1">Subir Manual al Servidor</h3>
          <p class="font-bold text-slate-600 text-sm">Arrastra un archivo PDF o haz clic aquí.</p>
          <p class="font-bold text-indigo-600 text-[10px] uppercase tracking-widest mt-4 bg-white border-2 border-slate-900 px-2 py-1 shadow-[2px_2px_0_0_#0f172a]">Este documento quedará disponible para RRHH y la IA.</p>
        </div>

        <h2 class="text-lg font-black text-slate-900 uppercase tracking-widest border-b-4 border-slate-200 pb-2 mb-6">Archivos Aprobados en Base de Datos</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Archivo 1 -->
          <div class="border-4 border-slate-900 p-4 flex justify-between items-center group hover:bg-slate-50 transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-red-500 border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0_0_#0f172a]">
                <span class="text-white font-black text-[10px]">PDF</span>
              </div>
              <div>
                <p class="font-black text-slate-900 leading-tight">Ley_N25877_Oficial.pdf</p>
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Subido: 01/09/2026 • 2.4 MB</p>
              </div>
            </div>
            <button class="text-slate-400 hover:text-red-500 transition-colors" title="Borrar del servidor">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
          <!-- Archivo 2 -->
          <div class="border-4 border-slate-900 p-4 flex justify-between items-center group hover:bg-slate-50 transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 bg-red-500 border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0_0_#0f172a]">
                <span class="text-white font-black text-[10px]">PDF</span>
              </div>
              <div>
                <p class="font-black text-slate-900 leading-tight">Protocolo_Evacuacion_v3.pdf</p>
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Subido: 15/09/2026 • 5.1 MB</p>
              </div>
            </div>
            <button class="text-slate-400 hover:text-red-500 transition-colors" title="Borrar del servidor">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const pestañaActiva = ref('usuarios') // 'usuarios' o 'archivos'
</script>

<style>
.animate-fade-in {
  animation: fadeIn 0.2s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>