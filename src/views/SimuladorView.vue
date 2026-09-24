<template>
  <div class="w-full max-w-4xl mx-auto pb-12 font-sans">
    
    <!-- Encabezado Global del Simulador -->
    <div class="mb-8 border-b-4 border-slate-900 pb-4 flex justify-between items-end">
      <div>
        <h2 class="text-3xl font-black text-slate-900 uppercase tracking-tighter">Campo de Práctica</h2>
        <p class="text-slate-600 font-bold uppercase tracking-widest text-sm mt-1">Entrenamiento sin impacto en certificación</p>
      </div>
      <span v-if="fase === 'jugando'" class="bg-indigo-500 text-white font-black px-3 py-1 border-2 border-slate-900 shadow-[3px_3px_0_0_#0f172a] text-xs uppercase tracking-widest hidden sm:inline-block">
        {{ moduloSeleccionado.nombre }}
      </span>
    </div>

    <!-- FASE 1: LOBBY DE SELECCIÓN -->
    <div v-if="fase === 'seleccion'" class="animate-fade-in">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Tarjeta de Selección de Módulo -->
        <button 
          v-for="mod in modulosDisponibles" 
          :key="mod.id"
          @click="iniciarPractica(mod)"
          class="bg-white border-4 border-slate-900 p-6 text-left shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#0f172a] transition-all group flex flex-col justify-between min-h-[200px]"
        >
          <div class="flex justify-between items-start mb-4">
            <div :class="`w-12 h-12 border-4 border-slate-900 flex items-center justify-center shadow-[3px_3px_0_0_#0f172a] ${mod.color}`">
              <component :is="mod.icono" class="w-6 h-6 text-slate-900" />
            </div>
            <span class="bg-slate-100 border-2 border-slate-900 text-slate-900 text-[10px] font-black uppercase tracking-widest px-2 py-1">
              {{ mod.cantidadPreguntas }} Preguntas
            </span>
          </div>
          
          <div>
            <h3 class="text-2xl font-black text-slate-900 uppercase leading-none mb-2">{{ mod.nombre }}</h3>
            <p class="text-sm font-bold text-slate-500 uppercase tracking-widest">{{ mod.descripcion }}</p>
          </div>
        </button>

      </div>
    </div>

    <!-- FASE 2: TRIVIA INTERACTIVA -->
    <div v-else-if="fase === 'jugando'" class="animate-fade-in">
      
      <!-- Barra de Progreso (Simulada) -->
      <div class="w-full h-4 bg-slate-200 border-4 border-slate-900 mb-8 relative overflow-hidden">
        <div class="absolute top-0 left-0 h-full bg-yellow-300 w-1/5 border-r-4 border-slate-900"></div>
      </div>

      <!-- Tarjeta de Pregunta -->
      <div class="bg-white border-4 border-slate-900 p-6 sm:p-10 shadow-[8px_8px_0_0_#0f172a] mb-8 relative">
        <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-yellow-300 border-2 border-slate-900 opacity-90"></div>
        <h3 class="text-2xl font-black text-slate-900 leading-snug mt-2">
          {{ escenario.pregunta }}
        </h3>
      </div>

      <!-- Opciones -->
      <div class="space-y-4 mb-10">
        <button
          v-for="(opcion, index) in escenario.opciones"
          :key="index"
          @click="seleccionarOpcion(opcion)"
          :disabled="mostrarResultado"
          :class="[
            'w-full text-left p-4 sm:p-5 border-4 transition-all flex items-center gap-4 relative group',
            opcionSeleccionada === opcion && !mostrarResultado ? 'border-slate-900 bg-yellow-300 shadow-[4px_4px_0_0_#0f172a] translate-x-1 -translate-y-1' : 'border-slate-900 bg-white hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#0f172a]',
            mostrarResultado && opcion === escenario.respuesta_correcta ? 'border-slate-900 bg-emerald-400 shadow-[4px_4px_0_0_#0f172a] z-10' : '',
            mostrarResultado && opcionSeleccionada === opcion && opcion !== escenario.respuesta_correcta ? 'border-slate-900 bg-red-400 shadow-[4px_4px_0_0_#0f172a] z-10' : '',
            mostrarResultado && opcion !== escenario.respuesta_correcta && opcion !== opcionSeleccionada ? 'opacity-50 bg-slate-100 grayscale' : ''
          ]"
        >
          <div :class="[
            'w-8 h-8 border-4 border-slate-900 flex-shrink-0 flex items-center justify-center bg-white transition-colors',
            mostrarResultado && opcion === escenario.respuesta_correcta ? 'bg-slate-900' : '',
            mostrarResultado && opcionSeleccionada === opcion && opcion !== escenario.respuesta_correcta ? 'bg-slate-900' : '',
            opcionSeleccionada === opcion && !mostrarResultado ? 'bg-slate-900' : ''
          ]">
            <svg v-if="mostrarResultado && opcion === escenario.respuesta_correcta" class="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            <svg v-else-if="mostrarResultado && opcionSeleccionada === opcion && opcion !== escenario.respuesta_correcta" class="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            <div v-else-if="opcionSeleccionada === opcion" class="w-3 h-3 bg-yellow-300"></div>
          </div>
          <span class="font-bold text-slate-900 text-lg sm:text-xl">{{ opcion }}</span>
        </button>
      </div>

      <!-- Botón de Confirmación -->
      <button
        v-if="!mostrarResultado"
        @click="verificarRespuesta"
        :disabled="!opcionSeleccionada"
        class="w-full bg-slate-900 text-white font-black text-xl tracking-widest uppercase py-5 border-4 border-slate-900 shadow-[6px_6px_0_0_#cbd5e1] hover:bg-slate-800 hover:shadow-[2px_2px_0_0_#cbd5e1] hover:translate-y-1 transition-all disabled:opacity-50 disabled:shadow-none disabled:translate-y-0 disabled:cursor-not-allowed"
      >
        Confirmar Respuesta
      </button>

      <!-- Feedback -->
      <div v-if="mostrarResultado" class="animate-fade-in border-4 border-slate-900 p-6 sm:p-8" :class="esCorrecto ? 'bg-emerald-50' : 'bg-red-50'">
        <div class="flex items-center gap-4 mb-4">
          <div :class="['w-14 h-14 flex-shrink-0 border-4 border-slate-900 flex items-center justify-center shadow-[4px_4px_0_0_#0f172a]', esCorrecto ? 'bg-emerald-400' : 'bg-red-400']">
            <svg v-if="esCorrecto" class="w-8 h-8 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
            <svg v-else class="w-8 h-8 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          </div>
          <h3 class="font-black text-2xl text-slate-900 uppercase tracking-tight">
            {{ esCorrecto ? 'Correcto' : 'Incorrecto' }}
          </h3>
        </div>
        <p class="text-slate-800 font-bold text-lg leading-relaxed mb-6 border-l-4 border-slate-900 pl-4 bg-white/50 py-2">
          {{ escenario.explicacion }}
        </p>
        
        <div class="flex justify-between items-center mt-6">
          <button @click="fase = 'seleccion'" class="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 underline">
            Abandonar Práctica
          </button>
          <button @click="siguientePregunta" class="bg-yellow-300 text-slate-900 border-4 border-slate-900 px-8 py-3 font-black uppercase tracking-widest shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0_0_#0f172a] transition-all">
            Siguiente
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, h } from 'vue'

// --- Iconos SVG (Renderizados como componentes) ---
const IconoEscudo = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2.5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })])
const IconoFuego = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2.5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z' })])
const IconoCasco = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2.5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M13 10V3L4 14h7v7l9-11h-7z' })])
const IconoRayo = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '2.5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M13 10V3L4 14h7v7l9-11h-7z' })]) // Reusamos rayo para ejemplo

// --- Estado Global ---
const fase = ref('seleccion')
const moduloSeleccionado = ref(null)

const modulosDisponibles = ref([
  { id: 1, nombre: 'Normativas SRT', descripcion: 'Leyes laborales y obligaciones.', cantidadPreguntas: 45, color: 'bg-emerald-400', icono: IconoEscudo },
  { id: 2, nombre: 'Prevención Incendios', descripcion: 'Tipos de fuego y evacuación.', cantidadPreguntas: 30, color: 'bg-red-400', icono: IconoFuego },
  { id: 3, nombre: 'Uso de EPP', descripcion: 'Indumentaria de protección.', cantidadPreguntas: 25, color: 'bg-yellow-300', icono: IconoCasco },
  { id: 4, nombre: 'Riesgo Eléctrico', descripcion: 'Protocolos de alta tensión.', cantidadPreguntas: 18, color: 'bg-indigo-400', icono: IconoRayo }
])

// --- Estado de la Pregunta ---
const escenario = ref(null)
const opcionSeleccionada = ref(null)
const mostrarResultado = ref(false)
const esCorrecto = ref(false)

const iniciarPractica = (modulo) => {
  moduloSeleccionado.value = modulo
  
  // Acá a futuro harás el fetch() a FastAPI enviando el ID del módulo
  escenario.value = {
    pregunta: "¿Qué organismo asumió la responsabilidad de promover el concepto de 'Trabajo Decente' en Argentina a través de la Ley N° 25.877 de Ordenamiento del Régimen Laboral?",
    opciones: [
      "El Ministerio de Trabajo, Empleo y Seguridad Social (MTEySS)",
      "La Superintendencia de Riesgos del Trabajo (SRT)",
      "La Unión de Aseguradoras de Riesgo del Trabajo (UART)",
      "La Organización Internacional del Trabajo (OIT)"
    ],
    respuesta_correcta: "El Ministerio de Trabajo, Empleo y Seguridad Social (MTEySS)",
    explicacion: "A través de la Ley N° 25.877 de marzo de 2004, se otorgó al MTEySS la responsabilidad de promover el Trabajo Decente."
  }
  
  fase.value = 'jugando'
}

const seleccionarOpcion = (opcion) => {
  if (mostrarResultado.value) return
  opcionSeleccionada.value = opcion
}

const verificarRespuesta = () => {
  esCorrecto.value = opcionSeleccionada.value === escenario.value.respuesta_correcta
  mostrarResultado.value = true
}

const siguientePregunta = () => {
  opcionSeleccionada.value = null
  mostrarResultado.value = false
  // Acá harías otro fetch() para cargar la siguiente pregunta aleatoria
}
</script>

<style>
.animate-fade-in {
  animation: fadeIn 0.25s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>