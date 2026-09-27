<template>
  <div class="w-full max-w-5xl mx-auto pb-12 font-sans px-2 xl:px-0">
    
    <div v-if="cargando" class="text-center mt-20 font-black text-2xl uppercase animate-pulse">Cargando Módulo...</div>

    <div v-else>
      <!-- HEADER GLOBAL DEL MÓDULO -->
      <div class="mb-8 border-b-4 border-slate-900 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <router-link to="/" class="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 flex items-center gap-2 mb-4">
            ← Volver al Mapa
          </router-link>
          <h1 class="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-1 leading-none">{{ modulo.titulo }}</h1>
          <p class="text-slate-600 font-bold uppercase tracking-widest text-sm mt-2">Gerencia: {{ modulo.publico_objetivo }}</p>
        </div>
        <div v-if="fase === 'lobby'" class="bg-indigo-500 text-white font-black px-4 py-2 border-4 border-slate-900 shadow-[4px_4px_0_0_#0f172a] text-sm uppercase tracking-widest">
          Lobby Principal
        </div>
      </div>

      <!-- ============================================== -->
      <!-- FASE 1: EL LOBBY (Panel de Selección)          -->
      <!-- ============================================== -->
      <div v-if="fase === 'lobby'" class="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Tarjeta 1: Material -->
        <div class="bg-white border-4 border-slate-900 p-6 flex flex-col justify-between shadow-[6px_6px_0_0_#0f172a]">
          <div>
            <div class="w-12 h-12 bg-blue-500 border-4 border-slate-900 mb-4 flex items-center justify-center text-white shadow-[2px_2px_0_0_#0f172a]">PDF</div>
            <h3 class="text-xl font-black text-slate-900 uppercase mb-2">Material de Estudio</h3>
            <p class="text-sm font-bold text-slate-500 mb-6">Lee el manual oficial antes de comenzar.</p>
          </div>
          <a :href="modulo.url_pdf || '#'" target="_blank" class="w-full bg-slate-900 text-white text-center border-2 border-slate-900 py-3 font-black uppercase hover:bg-slate-800 transition-colors">
            Abrir Documento
          </a>
        </div>

        <!-- Tarjeta 2: Práctica -->
        <div class="bg-white border-4 border-slate-900 p-6 flex flex-col justify-between shadow-[6px_6px_0_0_#0f172a]">
          <div>
            <div class="w-12 h-12 bg-emerald-400 border-4 border-slate-900 mb-4 flex items-center justify-center shadow-[2px_2px_0_0_#0f172a]">
              <svg class="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="text-xl font-black text-slate-900 uppercase mb-2">Campo de Práctica</h3>
            <p class="text-sm font-bold text-slate-500 mb-2">Entrenamiento sin impacto en certificación. Respuestas inmediatas.</p>
            <p class="text-xs font-black text-emerald-600 uppercase mb-6">{{ modulo.cant_preguntas_practica }} Preguntas al azar</p>
          </div>
          <button @click="iniciarSimulador('practica')" class="w-full bg-emerald-400 text-slate-900 border-2 border-slate-900 py-3 font-black uppercase hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#0f172a] transition-all">
            Iniciar Práctica
          </button>
        </div>

        <!-- Tarjeta 3: Evaluación Oficial -->
        <div class="bg-white border-4 border-slate-900 p-6 flex flex-col justify-between shadow-[6px_6px_0_0_#0f172a] relative overflow-hidden">
          <div class="absolute -right-6 top-6 bg-red-500 text-white font-black text-[10px] uppercase tracking-widest py-1 px-8 rotate-45 border-y-2 border-slate-900">
            OFICIAL
          </div>
          <div>
            <div class="w-12 h-12 bg-yellow-300 border-4 border-slate-900 mb-4 flex items-center justify-center shadow-[2px_2px_0_0_#0f172a]">
              <svg class="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="text-xl font-black text-slate-900 uppercase mb-2">Evaluación Final</h3>
            <p class="text-sm font-bold text-slate-500 mb-2">Impacta en tu mapa de certificación. Requiere {{ modulo.porcentaje_aprobacion }}% para aprobar.</p>
            <p class="text-xs font-black text-red-600 uppercase mb-6">{{ modulo.cant_preguntas_evaluacion }} Preguntas al azar</p>
          </div>
          <button @click="iniciarSimulador('evaluacion')" class="w-full bg-yellow-300 text-slate-900 border-2 border-slate-900 py-3 font-black uppercase shadow-[3px_3px_0_0_#0f172a] hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#0f172a] transition-all">
            Rendir Examen
          </button>
        </div>
      </div>

      <!-- ============================================== -->
      <!-- FASE 2 y 3: EL MOTOR DE PREGUNTAS              -->
      <!-- ============================================== -->
      <div v-if="fase === 'practica' || fase === 'evaluacion'" class="animate-fade-in w-full max-w-3xl mx-auto">
        
        <!-- Indicador Superior -->
        <div class="flex justify-between items-center mb-4">
          <span class="text-slate-900 font-black uppercase tracking-widest text-sm">
            Pregunta {{ indiceActual + 1 }} de {{ preguntasActivas.length }}
          </span>
          <span :class="['font-black uppercase tracking-widest text-sm px-2 py-1 border-2 border-slate-900', fase === 'practica' ? 'bg-emerald-400' : 'bg-red-500 text-white']">
            Modo: {{ fase }}
          </span>
        </div>

        <!-- Tarjeta de Pregunta -->
        <div class="bg-white border-4 border-slate-900 p-6 sm:p-10 shadow-[8px_8px_0_0_#0f172a] mb-8 relative">
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-slate-900 opacity-90"></div>
          <h3 class="text-2xl font-black text-slate-900 leading-snug mt-2">
            {{ preguntaActual.enunciado }}
          </h3>
        </div>

        <!-- Opciones -->
        <div class="space-y-4 mb-10">
          <button
            v-for="opcion in ['a', 'b', 'c']" :key="opcion"
            @click="seleccionarOpcion(opcion)"
            :disabled="bloquearOpciones"
            v-show="preguntaActual['opcion_' + opcion]"
            :class="[
              'w-full text-left p-4 sm:p-5 border-4 transition-all flex items-center gap-4 relative group',
              opcionSeleccionada === opcion && !mostrarRetroalimentacion ? 'border-slate-900 bg-yellow-300 shadow-[4px_4px_0_0_#0f172a] translate-x-1 -translate-y-1' : 'border-slate-900 bg-white hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#0f172a]',
              
              // Colores de retroalimentación (Inmediato en Práctica)
              mostrarRetroalimentacion && opcion === preguntaActual.opcion_correcta ? 'border-slate-900 bg-emerald-400 shadow-[4px_4px_0_0_#0f172a] z-10' : '',
              mostrarRetroalimentacion && opcionSeleccionada === opcion && opcion !== preguntaActual.opcion_correcta ? 'border-slate-900 bg-red-400 shadow-[4px_4px_0_0_#0f172a] z-10' : '',
              mostrarRetroalimentacion && opcion !== preguntaActual.opcion_correcta && opcion !== opcionSeleccionada ? 'opacity-50 bg-slate-100 grayscale' : ''
            ]"
          >
            <div class="w-8 h-8 border-4 border-slate-900 flex-shrink-0 flex items-center justify-center bg-white">
              <div v-if="opcionSeleccionada === opcion && !mostrarRetroalimentacion" class="w-3 h-3 bg-yellow-300"></div>
              <span v-if="mostrarRetroalimentacion && opcion === preguntaActual.opcion_correcta" class="font-black text-emerald-600 text-xl">✓</span>
              <span v-if="mostrarRetroalimentacion && opcionSeleccionada === opcion && opcion !== preguntaActual.opcion_correcta" class="font-black text-red-600 text-xl">X</span>
            </div>
            <span class="font-bold text-slate-900 text-lg">{{ preguntaActual['opcion_' + opcion] }}</span>
          </button>
        </div>

        <!-- Controles Inferiores -->
        <div class="flex justify-between items-center bg-slate-100 border-4 border-slate-900 p-6">
          <button @click="fase = 'lobby'" class="text-sm font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 underline">
            Abortar y Volver
          </button>

          <!-- Botón Práctica (Verificar en el acto) -->
          <button v-if="fase === 'practica' && !mostrarRetroalimentacion" @click="verificarPractica" :disabled="!opcionSeleccionada" class="bg-slate-900 text-white px-8 py-3 border-4 border-slate-900 font-black uppercase shadow-[4px_4px_0_0_#cbd5e1] hover:-translate-y-1 transition-all disabled:opacity-50">
            Verificar
          </button>

          <!-- Botón Siguiente (Para Práctica post-verificación o para Evaluación directa) -->
          <button v-if="(fase === 'practica' && mostrarRetroalimentacion) || (fase === 'evaluacion')" @click="avanzarPregunta" :disabled="!opcionSeleccionada" class="bg-yellow-300 text-slate-900 px-8 py-3 border-4 border-slate-900 font-black uppercase shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 transition-all disabled:opacity-50">
            {{ indiceActual === preguntasActivas.length - 1 ? 'Finalizar' : 'Siguiente' }}
          </button>
        </div>

      </div>

      <!-- ============================================== -->
      <!-- FASE 4: PANTALLA DE RESULTADOS FINALES         -->
      <!-- ============================================== -->
      <div v-if="fase === 'resultados'" class="animate-fade-in w-full max-w-2xl mx-auto bg-white border-4 border-slate-900 p-10 text-center shadow-[8px_8px_0_0_#0f172a]">
        <h2 class="text-4xl font-black text-slate-900 uppercase mb-2">Resultados</h2>
        <p class="text-slate-600 font-bold uppercase tracking-widest mb-8">Modo: {{ modoJugado }}</p>
        
        <div class="text-8xl font-black mb-6" :class="puntajeFinal >= modulo.porcentaje_aprobacion ? 'text-emerald-500' : 'text-red-500'">
          {{ puntajeFinal }}%
        </div>
        
        <p v-if="puntajeFinal >= modulo.porcentaje_aprobacion" class="text-xl font-black text-slate-900 bg-emerald-100 border-4 border-emerald-500 p-4 mb-8">
          ¡FELICITACIONES! Has superado el umbral requerido.
        </p>
        <p v-else class="text-xl font-black text-slate-900 bg-red-100 border-4 border-red-500 p-4 mb-8">
          NO APROBADO. Necesitas al menos {{ modulo.porcentaje_aprobacion }}% para pasar.
        </p>

        <button @click="fase = 'lobby'" class="bg-slate-900 text-white w-full py-4 border-4 border-slate-900 font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-[6px_6px_0_0_#cbd5e1]">
          Volver al Lobby
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const moduloId = route.params.id

// Datos de la BD
const cargando = ref(true)
const modulo = ref({})
const bancoPreguntas = ref([])

// Estado del Motor
const fase = ref('lobby') // 'lobby', 'practica', 'evaluacion', 'resultados'
const modoJugado = ref('')
const preguntasActivas = ref([])
const indiceActual = ref(0)
const opcionSeleccionada = ref(null)
const mostrarRetroalimentacion = ref(false)
const respuestasCorrectas = ref(0)
const puntajeFinal = ref(0)

const preguntaActual = computed(() => preguntasActivas.value[indiceActual.value] || {})
const bloquearOpciones = computed(() => mostrarRetroalimentacion.value)

// 1. Cargar todo desde FastAPI al entrar
onMounted(async () => {
  try {
    // A. Buscamos la info del módulo (Deberás asegurarte de tener un endpoint GET /api/modulos/{id} en FastAPI)
    const resMod = await fetch('https://back-seguridad-logistica-app.onrender.com/api/modulos')
    const todos = await resMod.json()
    modulo.value = todos.find(m => m.id == moduloId)
    
    // B. Buscamos todas las preguntas de este módulo
    const resPreg = await fetch(`https://back-seguridad-logistica-app.onrender.com/api/modulos/${moduloId}/preguntas`)
    bancoPreguntas.value = await resPreg.json()
    
  } catch (error) {
    console.error("Error al cargar lobby:", error)
  } finally {
    cargando.value = false
  }
})

// 2. Barajar y repartir (La magia del Pool)
const iniciarSimulador = (modo) => {
  modoJugado.value = modo
  // Mezclamos TODA la bolsa al azar
  let preguntasMezcladas = [...bancoPreguntas.value].sort(() => 0.5 - Math.random())
  
  // Cortamos según las reglas definidas por RRHH
  let cantidad = modo === 'practica' ? modulo.value.cant_preguntas_practica : modulo.value.cant_preguntas_evaluacion
  preguntasActivas.value = preguntasMezcladas.slice(0, cantidad)
  
  // Reseteamos marcadores
  indiceActual.value = 0
  respuestasCorrectas.value = 0
  opcionSeleccionada.value = null
  mostrarRetroalimentacion.value = false
  
  fase.value = modo
}

const seleccionarOpcion = (letra) => {
  opcionSeleccionada.value = letra
}

// 3. Lógica específica de PRÁCTICA (Retroalimentación inmediata)
const verificarPractica = () => {
  mostrarRetroalimentacion.value = true
  if (opcionSeleccionada.value === preguntaActual.value.opcion_correcta) {
    respuestasCorrectas.value++
  }
}

// 4. Lógica de avance y finalización
const avanzarPregunta = async () => {
  // Si estamos en evaluación, registramos acierto silenciosamente
  if (fase.value === 'evaluacion' && opcionSeleccionada.value === preguntaActual.value.opcion_correcta) {
    respuestasCorrectas.value++
  }

  // ¿Hay más preguntas?
  if (indiceActual.value < preguntasActivas.value.length - 1) {
    indiceActual.value++
    opcionSeleccionada.value = null
    mostrarRetroalimentacion.value = false
  } else {
    // Calcular puntaje final
    puntajeFinal.value = Math.round((respuestasCorrectas.value / preguntasActivas.value.length) * 100)
    
    // --- LÓGICA DE CERTIFICACIÓN AUTOMÁTICA ---
    if (fase.value === 'evaluacion' && puntajeFinal.value >= modulo.value.porcentaje_aprobacion) {
      try {
        // En un caso real, acá sacás el ID del usuario de tu sistema de login.
        // Asumimos 1 temporalmente para que no falle la prueba.
        const usuarioId = localStorage.getItem('usuarioId') || 1; 

        await fetch('https://back-seguridad-logistica-app.onrender.com/api/certificaciones', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            usuario_id: parseInt(usuarioId),
            modulo_id: modulo.value.id,
            titulo_modulo_aprobado: modulo.value.titulo, // La fotografía inmutable del título
            puntaje: puntajeFinal.value
          })
        });
      } catch (error) {
        console.error("Error al emitir el certificado:", error);
      }
    }
    
    // Mostramos la pantalla de resultados
    fase.value = 'resultados'
  }
}
</script>

<style>
.animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>