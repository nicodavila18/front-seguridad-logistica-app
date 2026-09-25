<template>
  <div class="w-full max-w-6xl mx-auto pb-12 font-sans">
    
    <!-- Header -->
    <div class="mb-10 border-b-4 border-slate-900 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
      <div>
        <h1 class="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-1">Métricas Generales</h1>
        <p class="text-slate-500 font-bold text-lg uppercase tracking-widest">Resumen de Planta Sur</p>
      </div>
      <div class="bg-slate-900 text-white px-4 py-2 border-4 border-slate-900 font-black uppercase tracking-widest shadow-[4px_4px_0_0_#cbd5e1]">
        Reporte Q3 - 2026
      </div>
    </div>

    <!-- KPIs Rápidos -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <!-- KPI 1 -->
      <div class="bg-emerald-50 border-4 border-slate-900 p-6 shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 transition-transform">
        <div class="flex justify-between items-start mb-4">
          <p class="text-xs font-black text-slate-600 uppercase tracking-widest">Cumplimiento Global</p>
          <svg class="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
        </div>
        <p class="text-5xl font-black text-slate-900">82<span class="text-2xl text-emerald-600">%</span></p>
      </div>

      <!-- KPI 2 -->
      <div class="bg-white border-4 border-slate-900 p-6 shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 transition-transform">
        <div class="flex justify-between items-start mb-4">
          <p class="text-xs font-black text-slate-500 uppercase tracking-widest">Módulos Activos</p>
          <svg class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
        </div>
        <p class="text-5xl font-black text-slate-900">14</p>
      </div>

      <!-- KPI 3 (Alerta) -->
      <div class="bg-red-50 border-4 border-slate-900 p-6 shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 transition-transform">
        <div class="flex justify-between items-start mb-4">
          <p class="text-xs font-black text-red-700 uppercase tracking-widest">Empleados en Riesgo</p>
          <svg class="w-6 h-6 text-red-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
        </div>
        <p class="text-5xl font-black text-red-600">7<span class="text-lg text-red-400 font-bold ml-2">Vencidos</span></p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      <!-- Gráfico de Barras Neo-Brutalista -->
      <div class="bg-white border-4 border-slate-900 p-6 md:p-8 shadow-[8px_8px_0_0_#0f172a]">
        <h3 class="text-xl font-black text-slate-900 uppercase tracking-widest mb-8 border-b-4 border-slate-100 pb-4">Cumplimiento por Área</h3>
        
        <div class="flex flex-col gap-6">
          <div>
            <div class="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
              <span class="text-slate-600">Administración</span>
              <span class="text-emerald-600">95%</span>
            </div>
            <div class="w-full h-8 bg-slate-100 border-2 border-slate-900 relative overflow-hidden">
              <div class="absolute top-0 left-0 h-full bg-emerald-400 border-r-4 border-slate-900" style="width: 95%;"></div>
            </div>
          </div>
          
          <div>
            <div class="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
              <span class="text-slate-600">Desarrollo</span>
              <span class="text-yellow-600">75%</span>
            </div>
            <div class="w-full h-8 bg-slate-100 border-2 border-slate-900 relative overflow-hidden">
              <div class="absolute top-0 left-0 h-full bg-yellow-300 border-r-4 border-slate-900" style="width: 75%;"></div>
            </div>
          </div>

          <div>
            <div class="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
              <span class="text-slate-600">Mantenimiento</span>
              <span class="text-red-600">42%</span>
            </div>
            <div class="w-full h-8 bg-slate-100 border-2 border-slate-900 relative overflow-hidden">
              <div class="absolute top-0 left-0 h-full bg-red-400 border-r-4 border-slate-900" style="width: 42%;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabla de Alertas -->
      <div class="bg-white border-4 border-slate-900 p-6 md:p-8 shadow-[8px_8px_0_0_#0f172a]">
        <h3 class="text-xl font-black text-slate-900 uppercase tracking-widest mb-6 border-b-4 border-slate-100 pb-4 flex items-center gap-2">
          <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
          Atención Requerida
        </h3>
        
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="border-b-4 border-slate-900">
                <th class="py-3 text-xs font-black text-slate-500 uppercase tracking-widest">Empleado</th>
                <th class="py-3 text-xs font-black text-slate-500 uppercase tracking-widest">Módulo Faltante</th>
                <th class="py-3 text-xs font-black text-slate-500 uppercase tracking-widest text-right">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b-2 border-slate-100 hover:bg-slate-50 transition-colors">
                <td class="py-4 font-bold text-slate-900">Jorge R.</td>
                <td class="py-4 text-sm text-slate-600">EPP Nivel 2</td>
                <td class="py-4 text-right font-black text-red-500">Vencido</td>
              </tr>
              <tr class="border-b-2 border-slate-100 hover:bg-slate-50 transition-colors">
                <td class="py-4 font-bold text-slate-900">Marta L.</td>
                <td class="py-4 text-sm text-slate-600">Riesgo Eléctrico</td>
                <td class="py-4 text-right font-black text-red-500">Hoy</td>
              </tr>
              <tr class="hover:bg-slate-50 transition-colors">
                <td class="py-4 font-bold text-slate-900">Lucas D.</td>
                <td class="py-4 text-sm text-slate-600">Prev. Incendios</td>
                <td class="py-4 text-right font-black text-yellow-500">En 2 días</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>