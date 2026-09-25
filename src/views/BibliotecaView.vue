<template>
  <div class="w-full max-w-7xl mx-auto pb-12 font-sans px-2 xl:px-0">
    
    <!-- Encabezado -->
    <div class="mb-10 border-b-4 border-slate-900 pb-4 flex justify-between items-end">
      <div>
        <h1 class="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-1">Biblioteca</h1>
        <p class="text-slate-600 font-bold text-lg uppercase tracking-widest">Manuales y Protocolos</p>
      </div>
    </div>

    <!-- Buscador Industrial -->
    <div class="mb-8 relative group">
      <div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
        <svg class="w-8 h-8 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      </div>
      <input 
        v-model="busqueda"
        type="text" 
        placeholder="BUSCAR PROTOCOLO, EJ: INCENDIO..." 
        class="w-full bg-white border-4 border-slate-900 pl-16 pr-6 py-5 text-xl font-black text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-yellow-100 shadow-[6px_6px_0_0_#0f172a] transition-colors"
      >
    </div>

    <!-- Filtros / Categorías -->
    <div class="flex flex-wrap gap-4 mb-10">
      <button 
        v-for="cat in categorias" 
        :key="cat"
        @click="categoriaActiva = cat"
        :class="[
          'px-6 py-2 border-4 border-slate-900 font-black uppercase tracking-widest transition-all shadow-[4px_4px_0_0_#0f172a]',
          categoriaActiva === cat ? 'bg-slate-900 text-white translate-x-1 translate-y-1 shadow-none' : 'bg-white text-slate-900 hover:bg-yellow-300 hover:-translate-y-1'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Grilla de Documentos -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
      
      <!-- Mensaje si no hay resultados -->
      <div v-if="documentosFiltrados.length === 0" class="col-span-full bg-slate-100 border-4 border-slate-900 p-10 text-center shadow-[6px_6px_0_0_#0f172a]">
        <svg class="w-16 h-16 text-slate-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <h3 class="text-2xl font-black text-slate-900 uppercase">Sin resultados</h3>
        <p class="text-slate-600 font-bold">No se encontraron manuales con ese término.</p>
      </div>

      <!-- Tarjetas de Documentos -->
      <div 
        v-for="doc in documentosFiltrados" 
        :key="doc.id"
        class="bg-white border-4 border-slate-900 flex flex-col shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#0f172a] transition-all group"
      >
        <div :class="`h-3 w-full border-b-4 border-slate-900 ${doc.color}`"></div>
        <div class="p-6 flex-grow flex flex-col">
          <div class="flex justify-between items-start mb-4">
            <span class="text-[10px] font-black uppercase tracking-widest text-slate-500 border-2 border-slate-900 px-2 py-1">
              {{ doc.categoria }}
            </span>
            <svg class="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
          </div>
          <h3 class="text-xl font-black text-slate-900 leading-tight mb-2">{{ doc.titulo }}</h3>
          <p class="text-slate-600 font-medium text-sm mb-6 flex-grow">{{ doc.descripcion }}</p>
          
          <button class="w-full bg-emerald-400 text-slate-900 border-2 border-slate-900 py-3 font-black uppercase tracking-widest shadow-[3px_3px_0_0_#0f172a] hover:bg-emerald-300 active:translate-y-1 active:translate-x-1 active:shadow-none transition-all">
            Leer Manual
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const busqueda = ref('')
const categoriaActiva = ref('Todos')
const categorias = ['Todos', 'Normativas', 'Emergencias', 'EPP']

const documentos = ref([
  {
    id: 1,
    titulo: 'Ley N° 25.877 - Régimen Laboral',
    descripcion: 'Documento oficial sobre ordenamiento laboral y Trabajo Decente en Argentina.',
    categoria: 'Normativas',
    color: 'bg-indigo-500'
  },
  {
    id: 2,
    titulo: 'Protocolo de Evacuación Nivel 1',
    descripcion: 'Rutas de escape y puntos de encuentro para la Planta Sur.',
    categoria: 'Emergencias',
    color: 'bg-red-500'
  },
  {
    id: 3,
    titulo: 'Uso de Matafuegos (Clase A, B, C)',
    descripcion: 'Guía rápida para la identificación y uso de extintores en planta.',
    categoria: 'Emergencias',
    color: 'bg-red-500'
  },
  {
    id: 4,
    titulo: 'Guía de Indumentaria 2026',
    descripcion: 'Especificaciones técnicas de cascos, guantes y calzado de seguridad.',
    categoria: 'EPP',
    color: 'bg-yellow-400'
  },
  {
    id: 5,
    titulo: 'Reglamento Interno de SRT',
    descripcion: 'Normas de convivencia y obligaciones ante la Superintendencia.',
    categoria: 'Normativas',
    color: 'bg-indigo-500'
  }
])

const documentosFiltrados = computed(() => {
  return documentos.value.filter(doc => {
    const coincideBusqueda = doc.titulo.toLowerCase().includes(busqueda.value.toLowerCase()) || 
                             doc.descripcion.toLowerCase().includes(busqueda.value.toLowerCase())
    const coincideCategoria = categoriaActiva.value === 'Todos' || doc.categoria === categoriaActiva.value
    return coincideBusqueda && coincideCategoria
  })
})
</script>