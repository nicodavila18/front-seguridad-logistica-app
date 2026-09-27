<template>
  <div class="w-full max-w-7xl mx-auto pb-12 font-sans px-2 xl:px-0">
    
    <!-- Encabezado con estilo Industrial -->
    <div class="mb-10 pb-6 border-b-4 border-slate-900 flex justify-between items-end pr-14 md:pr-0">
      <div>
        <h1 class="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-1 leading-none">Panel de Operario</h1>
        <p class="text-slate-600 font-bold text-sm sm:text-lg mt-2">LUCAS DÁVILA • PLANTA SUR</p>
      </div>
      <div class="hidden sm:block text-right">
        <p class="text-xs font-bold text-slate-500 tracking-widest uppercase">Certificación</p>
        <p class="text-2xl font-black text-emerald-600">En Progreso</p>
      </div>
    </div>

    <!-- Tablero de Mapa Zig-Zag Dinámico -->
    <div class="relative w-full bg-slate-900 border-4 border-slate-900 shadow-[8px_8px_0_0_#cbd5e1] p-8 sm:p-16 overflow-hidden min-h-[500px]">
      
      <div class="absolute inset-0 opacity-20 pointer-events-none" style="background-image: linear-gradient(#475569 2px, transparent 2px), linear-gradient(90deg, #475569 2px, transparent 2px); background-size: 40px 40px;"></div>

      <h2 class="relative z-10 text-white text-2xl font-black uppercase tracking-widest mb-16 text-center">
        Mapa de Certificación
      </h2>

      <div v-if="cargando" class="text-center text-white font-black animate-pulse relative z-10">
        CARGANDO MÓDULOS DE LA BASE DE DATOS...
      </div>

      <!-- Contenedor del camino gamificado -->
      <div v-else class="relative z-10 w-full max-w-2xl mx-auto flex flex-col gap-12 sm:gap-24">
        
        <div v-for="(mod, index) in modulosActivos" :key="mod.id" 
             :class="['w-[85%] sm:w-1/2 relative group', index % 2 === 0 ? 'self-start' : 'self-end']">
          
          <!-- Conector ZigZag (Alterna dirección según índice) -->
          <svg v-if="index < modulosActivos.length - 1" :class="['hidden sm:block absolute top-[60%] w-[120%] h-32 -z-10 text-indigo-500 opacity-60', index % 2 === 0 ? 'left-[90%]' : 'right-[90%] transform scale-x-[-1]']" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,0 C60,0 40,100 100,100" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="8 8"/>
          </svg>

          <!-- Tarjeta del Nodo Activo -->
          <div class="bg-indigo-500 border-2 border-slate-900 p-5 shadow-[6px_6px_0_0_rgba(255,255,255,1)] transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[4px_4px_0_0_rgba(255,255,255,1)] transition-all">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-white border-2 border-slate-900 flex-shrink-0 flex items-center justify-center font-black text-xl text-indigo-600 shadow-[2px_2px_0_0_#0f172a]">
                {{ index + 1 }}
              </div>
              <div>
                <p class="text-[10px] text-indigo-100 font-bold uppercase tracking-widest mb-1">Módulo Disponible</p>
                <h3 class="font-black text-white leading-tight text-lg">{{ mod.titulo }}</h3>
              </div>
            </div>
            
            <router-link :to="`/modulo/${mod.id}`" class="block w-full bg-yellow-300 text-slate-900 border-2 border-slate-900 text-center font-black uppercase tracking-widest py-3 shadow-[3px_3px_0_0_#0f172a] hover:bg-yellow-400 hover:-translate-y-1 transition-all">
              Ingresar al Lobby
            </router-link>
          </div>
        </div>

        <div v-if="modulosActivos.length === 0 && !cargando" class="text-center text-white font-black bg-slate-800 p-8 border-4 border-slate-700">
          No hay módulos activos asignados a tu gerencia en este momento.
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const modulosActivos = ref([])
const cargando = ref(true)

const cargarModulos = async () => {
  try {
    const response = await fetch('https://back-seguridad-logistica-app.onrender.com/api/modulos')
    const todosLosModulos = await response.json()
    // Solo mostramos los módulos que RRHH ya marcó como "Activos/Publicados"
    modulosActivos.value = todosLosModulos.filter(m => m.is_active === true)
  } catch (error) {
    console.error("Error al cargar el mapa:", error)
  } finally {
    cargando.value = false
  }
}

onMounted(() => {
  cargarModulos()
})
</script>