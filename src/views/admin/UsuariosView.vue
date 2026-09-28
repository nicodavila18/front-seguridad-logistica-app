<template>
  <div class="w-full max-w-6xl mx-auto pb-12 font-sans">
    
    <!-- Header de Sección -->
    <div class="mb-8 border-b-4 border-slate-900 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
      <div>
        <h1 class="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-1">Sistema</h1>
        <p class="text-slate-500 font-bold text-lg uppercase tracking-widest">Directorio General de Empleados</p>
      </div>
      <div class="bg-indigo-500 text-white px-4 py-2 border-4 border-slate-900 font-black uppercase tracking-widest shadow-[4px_4px_0_0_#0f172a]">
        Acceso Nivel Dios
      </div>
    </div>

    <!-- CONTENIDO PRINCIPAL: USUARIOS -->
    <div class="animate-fade-in">
      <div class="bg-white border-4 border-slate-900 p-6 md:p-8 shadow-[8px_8px_0_0_#0f172a]">
        
        <!-- Controles de Tabla -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div class="relative group w-full sm:w-1/2 md:w-1/3">
             <!-- Buscador Interno (Sutil) -->
            <input 
              type="text" 
              placeholder="Buscar empleado por nombre..." 
              class="w-full bg-slate-50 border-4 border-slate-900 px-4 py-2 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 transition-colors"
            >
          </div>
          
          <button class="w-full sm:w-auto bg-slate-900 text-white px-6 py-3 border-4 border-slate-900 font-black text-sm uppercase tracking-widest shadow-[4px_4px_0_0_#cbd5e1] hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
            Alta Nuevo Usuario
          </button>
        </div>

        <!-- Tabla de Empleados -->
        <div class="overflow-x-auto border-4 border-slate-900">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-100 border-b-4 border-slate-900">
                <th class="py-4 px-4 text-xs font-black text-slate-900 uppercase tracking-widest">Nombre y Apellido</th>
                <th class="py-4 px-4 text-xs font-black text-slate-900 uppercase tracking-widest">Área / Sector</th>
                <th class="py-4 px-4 text-xs font-black text-slate-900 uppercase tracking-widest">Rol de Sistema</th>
                <th class="py-4 px-4 text-xs font-black text-slate-900 uppercase tracking-widest text-center">Estado</th>
                <th class="py-4 px-4 text-xs font-black text-slate-900 uppercase tracking-widest text-right">Controles</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b-2 border-slate-200 hover:bg-yellow-50 transition-colors group">
                <td class="py-4 px-4 font-black text-slate-900">Lucas Dávila</td>
                <td class="py-4 px-4 font-bold text-slate-600">Desarrollo</td>
                <td class="py-4 px-4"><span class="bg-slate-200 text-slate-900 text-[10px] font-black uppercase px-2 py-1 border-2 border-slate-900 inline-block">Operario</span></td>
                <td class="py-4 px-4 text-center"><span class="text-emerald-600 font-black text-xs flex items-center justify-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Activo</span></td>
                <td class="py-4 px-4 text-right flex justify-end gap-2">
                  <button class="p-2 border-2 border-slate-900 bg-white hover:bg-yellow-300 transition-colors" title="Editar Permisos"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg></button>
                  <button class="p-2 border-2 border-slate-900 bg-white hover:bg-red-400 hover:text-white transition-colors" title="Dar de Baja / Bloquear"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg></button>
                </td>
              </tr>
              <tr class="border-b-2 border-slate-200 hover:bg-yellow-50 transition-colors group">
                <td class="py-4 px-4 font-black text-slate-900">Marta López</td>
                <td class="py-4 px-4 font-bold text-slate-600">Recursos Humanos</td>
                <td class="py-4 px-4"><span class="bg-indigo-300 text-slate-900 text-[10px] font-black uppercase px-2 py-1 border-2 border-slate-900 inline-block">Gestión (RRHH)</span></td>
                <td class="py-4 px-4 text-center"><span class="text-emerald-600 font-black text-xs flex items-center justify-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Activo</span></td>
                <td class="py-4 px-4 text-right flex justify-end gap-2">
                  <button class="p-2 border-2 border-slate-900 bg-white hover:bg-yellow-300 transition-colors" title="Editar Permisos"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg></button>
                  <button class="p-2 border-2 border-slate-900 bg-white hover:bg-red-400 hover:text-white transition-colors" title="Dar de Baja / Bloquear"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg></button>
                </td>
              </tr>
              <!-- Empleado Inactivo (Desvinculado / Baja) -->
              <tr class="bg-slate-50 opacity-60 grayscale hover:grayscale-0 transition-all border-b-2 border-slate-200">
                <td class="py-4 px-4 font-black text-slate-900 line-through">Jorge Ríos</td>
                <td class="py-4 px-4 font-bold text-slate-600">Mantenimiento</td>
                <td class="py-4 px-4"><span class="bg-slate-200 text-slate-900 text-[10px] font-black uppercase px-2 py-1 border-2 border-slate-900 inline-block">Operario</span></td>
                <td class="py-4 px-4 text-center"><span class="text-red-600 font-black text-xs flex items-center justify-center gap-1"><span class="w-2 h-2 rounded-full bg-red-500"></span> Baja</span></td>
                <td class="py-4 px-4 text-right flex justify-end gap-2">
                  <button class="p-2 border-2 border-slate-900 bg-white hover:bg-emerald-400 hover:text-slate-900 transition-colors" title="Restaurar Acceso"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Todo el script de carga de manuales y pestañas fue eliminado. 
// La vista ahora es estática y limpia, lista para conectarse a un endpoint de usuarios.
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