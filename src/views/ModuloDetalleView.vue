<!-- src/views/ModuloDetalleView.vue -->
<template>
  <div class="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
    
    <!-- HEADER DEL MÓDULO (Neo-brutalista) -->
    <header class="bg-yellow-300 border-4 border-black p-6 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div class="flex justify-between items-center">
        <div>
          <span class="bg-black text-white px-3 py-1 text-sm font-bold tracking-widest uppercase mb-2 inline-block">Módulo Activo</span>
          <h1 class="text-3xl md:text-5xl font-black uppercase tracking-tight">Protocolo de Evacuación</h1>
        </div>
        <div class="hidden md:block text-right">
          <p class="font-bold text-lg">ID: 1</p>
          <p class="text-sm font-bold text-gray-700">Estado: <span class="text-green-700">Con PDF Cargado</span></p>
        </div>
      </div>
    </header>

    <!-- PANEL EXCLUSIVO ADMIN IT -->
    <section v-if="rol === 'admin'" class="bg-blue-300 border-4 border-black p-6 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <h2 class="text-2xl font-black uppercase mb-4">🛠️ Panel de Sistemas</h2>
      <p class="font-bold mb-4">Gestión de archivos físicos. (Solo accesible por IT)</p>
      <div class="flex gap-4">
        <button class="bg-white border-4 border-black font-black uppercase py-3 px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          Subir/Reemplazar PDF
        </button>
      </div>
    </section>

    <!-- PANEL EXCLUSIVO RRHH / GERENTE -->
    <section v-if="rol === 'rrhh' || rol === 'gerente'" class="mb-12">
      <div class="flex flex-wrap gap-4 mb-8">
        <!-- Botón IA -->
        <button 
          @click="generarPreguntasIA" 
          :disabled="cargandoIA"
          class="bg-purple-400 border-4 border-black font-black uppercase py-3 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <span v-if="!cargandoIA">✨ Generar Evaluación con IA</span>
          <span v-else>⏳ La IA está analizando el manual...</span>
        </button>

        <!-- Botón Manual -->
        <button class="bg-green-400 border-4 border-black font-black uppercase py-3 px-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          ✍️ Agregar Pregunta Manual
        </button>
      </div>

      <!-- ZONA DE AUDITORÍA / REVISIÓN DE PREGUNTAS -->
      <div v-if="preguntas.length > 0">
        <h2 class="text-2xl font-black uppercase mb-6 bg-black text-white inline-block px-4 py-2">Auditoría de Preguntas</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Tarjetas de Preguntas -->
          <article 
            v-for="(pregunta, index) in preguntas" 
            :key="pregunta.id"
            class="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative"
          >
            <span class="absolute -top-4 -left-4 bg-red-500 text-white border-4 border-black w-10 h-10 flex items-center justify-center font-black text-xl">
              {{ index + 1 }}
            </span>
            
            <h3 class="font-black text-lg mb-4 mt-2">{{ pregunta.enunciado }}</h3>
            
            <ul class="space-y-2 mb-6 font-bold">
              <li :class="{'bg-green-200 border-2 border-black p-2': pregunta.opcion_correcta === 'a', 'p-2': pregunta.opcion_correcta !== 'a'}">
                A) {{ pregunta.opcion_a }}
              </li>
              <li :class="{'bg-green-200 border-2 border-black p-2': pregunta.opcion_correcta === 'b', 'p-2': pregunta.opcion_correcta !== 'b'}">
                B) {{ pregunta.opcion_b }}
              </li>
              <li :class="{'bg-green-200 border-2 border-black p-2': pregunta.opcion_correcta === 'c', 'p-2': pregunta.opcion_correcta !== 'c'}">
                C) {{ pregunta.opcion_c }}
              </li>
            </ul>

            <div class="flex gap-2 border-t-4 border-black pt-4">
              <button class="bg-yellow-300 border-2 border-black px-4 py-1 font-bold text-sm hover:bg-yellow-400">Editar</button>
              <button class="bg-red-400 border-2 border-black px-4 py-1 font-bold text-sm hover:bg-red-500 text-white">Eliminar</button>
            </div>
          </article>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Leemos quién está usando la app desde el localStorage
const rol = ref(localStorage.getItem('rolUsuario') || 'rrhh')
const cargandoIA = ref(false)
const preguntas = ref([])

// Texto de prueba simulando lo que extraería el backend del PDF
const textoDemo = "El protocolo de evacuación indica que ante la alarma de incendio, todo el personal debe dirigirse al punto de encuentro A en el patio central. No se deben usar ascensores. Los matafuegos clase A sirven para madera y papel, los clase B para líquidos inflamables y los clase C para riesgo eléctrico."

// 1. Función para disparar el Webhook de n8n
const generarPreguntasIA = async () => {
  cargandoIA.value = true
  
  try {
    // Le avisamos a FastAPI que despierte a n8n
    await fetch('https://back-seguridad-logistica-app.onrender.com/test-ia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        modulo_id: 1,
        texto_manual: textoDemo
      })
    })

    // Como n8n trabaja en segundo plano, hacemos un "Polling" (esperamos 5 segundos)
    // En una app real de gran escala usaríamos WebSockets, pero esto es perfecto para la UX actual.
    setTimeout(() => {
      cargarPreguntasAuditadas()
      cargandoIA.value = false
    }, 5000)

  } catch (error) {
    console.error("Error contactando a la IA:", error)
    cargandoIA.value = false
  }
}

// 2. Función para traer las preguntas ya guardadas en PostgreSQL
const cargarPreguntasAuditadas = async () => {
  try {
    const response = await fetch('https://back-seguridad-logistica-app.onrender.com/modulos/1/preguntas')
    if (response.ok) {
      preguntas.value = await response.json()
    }
  } catch (error) {
    console.error("Error obteniendo preguntas:", error)
  }
}

// Al cargar la pantalla, vemos si ya hay preguntas generadas anteriormente
onMounted(() => {
  cargarPreguntasAuditadas()
})
</script>