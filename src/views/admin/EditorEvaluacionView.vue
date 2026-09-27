<template>
  <div class="w-full max-w-4xl mx-auto pb-12 font-sans">
    
    <div class="mb-8 border-b-4 border-slate-900 pb-4">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-1">Editor de Módulo</h1>
          <p class="text-slate-500 font-bold text-lg uppercase tracking-widest">Revisión y Ajuste de Preguntas</p>
        </div>
        <div v-if="cargandoIA" class="bg-yellow-300 text-slate-900 px-4 py-2 border-4 border-slate-900 font-black uppercase tracking-widest shadow-[4px_4px_0_0_#0f172a] animate-pulse">
          La IA está escribiendo...
        </div>
      </div>
    </div>

    <!-- Lista de Preguntas -->
    <div class="space-y-8 mb-12">
      <div v-for="(pregunta, index) in preguntas" :key="index" class="bg-white border-4 border-slate-900 p-6 shadow-[8px_8px_0_0_#0f172a] relative group">
        
        <!-- Botón Eliminar Pregunta -->
        <button @click="eliminarPregunta(index)" class="absolute -top-4 -right-4 bg-red-500 text-white w-10 h-10 border-4 border-slate-900 font-black flex items-center justify-center hover:scale-110 transition-transform">
          X
        </button>

        <div class="mb-4">
          <label class="text-xs font-black text-slate-500 uppercase tracking-widest">Pregunta {{ index + 1 }}</label>
          <textarea v-model="pregunta.enunciado" rows="2" class="w-full bg-slate-50 border-4 border-slate-900 px-4 py-3 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 transition-colors resize-none" placeholder="Escribe el enunciado aquí..."></textarea>
        </div>

        <div class="space-y-3">
          <!-- Opción A -->
          <div class="flex items-center gap-3">
            <input type="radio" :name="'correcta-'+index" value="a" v-model="pregunta.opcion_correcta" class="w-6 h-6 accent-emerald-500 cursor-pointer">
            <span class="font-black text-slate-900 bg-slate-200 px-3 py-2 border-2 border-slate-900">A</span>
            <input v-model="pregunta.opcion_a" type="text" class="flex-1 bg-transparent border-b-4 border-slate-200 focus:border-slate-900 px-2 py-1 font-bold text-slate-700 focus:outline-none" placeholder="Texto de la opción A">
          </div>
          <!-- Opción B -->
          <div class="flex items-center gap-3">
            <input type="radio" :name="'correcta-'+index" value="b" v-model="pregunta.opcion_correcta" class="w-6 h-6 accent-emerald-500 cursor-pointer">
            <span class="font-black text-slate-900 bg-slate-200 px-3 py-2 border-2 border-slate-900">B</span>
            <input v-model="pregunta.opcion_b" type="text" class="flex-1 bg-transparent border-b-4 border-slate-200 focus:border-slate-900 px-2 py-1 font-bold text-slate-700 focus:outline-none" placeholder="Texto de la opción B">
          </div>
          <!-- Opción C -->
          <div class="flex items-center gap-3">
            <input type="radio" :name="'correcta-'+index" value="c" v-model="pregunta.opcion_correcta" class="w-6 h-6 accent-emerald-500 cursor-pointer">
            <span class="font-black text-slate-900 bg-slate-200 px-3 py-2 border-2 border-slate-900">C</span>
            <input v-model="pregunta.opcion_c" type="text" class="flex-1 bg-transparent border-b-4 border-slate-200 focus:border-slate-900 px-2 py-1 font-bold text-slate-700 focus:outline-none" placeholder="Texto de la opción C">
          </div>
        </div>
      </div>
    </div>

    <!-- Controles Inferiores -->
    <div class="flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-100 border-4 border-slate-900 p-6">
      <button @click="agregarPreguntaVacia" class="bg-white text-slate-900 font-black px-6 py-3 border-4 border-slate-900 uppercase tracking-widest hover:bg-slate-200 transition-colors flex items-center gap-2">
        <span>+ Agregar Pregunta</span>
      </button>

      <button @click="publicarModulo" class="bg-emerald-400 text-slate-900 font-black px-10 py-4 border-4 border-slate-900 uppercase tracking-widest shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#0f172a] transition-all text-xl">
        Activar y Publicar Módulo
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const moduloId = route.params.id

const cargandoIA = ref(true)
const preguntas = ref([])
let intervaloIA = null

// Función que consulta al backend
const cargarPreguntas = async () => {
  try {
    const res = await fetch(`https://back-seguridad-logistica-app.onrender.com/api/modulos/${moduloId}/preguntas`)
    const data = await res.json()
    
    // Si ya llegaron las preguntas de n8n o si ya existían de antes
    if (data && data.length > 0) {
      preguntas.value = data
      cargandoIA.value = false // Apagamos el cartel de carga
      
      // Detenemos el reloj de consultas continuas
      if (intervaloIA) clearInterval(intervaloIA)
    }
  } catch (error) {
    console.error("Error al cargar preguntas:", error)
  }
}

onMounted(() => {
  // 1. Hacemos la primera consulta al instante
  cargarPreguntas()
  
  // 2. Programamos el reloj para que pregunte cada 3 segundos (3000 ms)
  intervaloIA = setInterval(() => {
    if (preguntas.value.length === 0) {
      cargarPreguntas()
    }
  }, 3000)
})

// Por seguridad, si el usuario se va de la página antes de que termine la IA, apagamos el reloj
onUnmounted(() => {
  if (intervaloIA) clearInterval(intervaloIA)
})

const agregarPreguntaVacia = () => {
  cargandoIA.value = false // Si agrega manual, apagamos el cartel de IA
  preguntas.value.push({
    enunciado: "",
    opcion_a: "",
    opcion_b: "",
    opcion_c: "",
    opcion_correcta: "a"
  })
}

const eliminarPregunta = (index) => {
  preguntas.value.splice(index, 1)
}

const publicarModulo = async () => {
  try {
    await fetch(`https://back-seguridad-logistica-app.onrender.com/api/modulos/${moduloId}/activar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ preguntas: preguntas.value })
    })
    router.push('/admin/capacitaciones')
  } catch (error) {
    console.error("Error al publicar:", error)
  }
}
</script>