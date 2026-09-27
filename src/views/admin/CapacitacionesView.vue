<template>
  <div class="w-full max-w-6xl mx-auto pb-12 font-sans">
    
    <!-- Header de Sección -->
    <div class="mb-8 border-b-4 border-slate-900 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
      <div>
        <h1 class="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-1">Capacitaciones</h1>
        <p class="text-slate-500 font-bold text-lg uppercase tracking-widest">Gestión Académica y Biblioteca</p>
      </div>
      <div class="bg-indigo-500 text-white px-4 py-2 border-4 border-slate-900 font-black uppercase tracking-widest shadow-[4px_4px_0_0_#0f172a]">
        Gestión (RRHH / Gerencia)
      </div>
    </div>

    <!-- Pestañas Neo-Brutalistas -->
    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 w-full">
      <button 
        @click="pestañaActiva = 'modulos'"
        :class="[
          'w-full sm:w-auto px-4 sm:px-6 py-3 font-black uppercase tracking-widest border-4 border-slate-900 transition-all flex items-center justify-center sm:justify-start gap-2',
          pestañaActiva === 'modulos' ? 'bg-yellow-300 text-slate-900 shadow-[4px_4px_0_0_#0f172a] sm:translate-x-1 sm:-translate-y-1' : 'bg-white text-slate-500 hover:bg-slate-100 sm:hover:-translate-y-1'
        ]"
      >
        <svg class="hidden sm:block w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
        Módulos de Estudio
      </button>
      
      <button 
        @click="pestañaActiva = 'biblioteca'"
        :class="[
          'w-full sm:w-auto px-4 sm:px-6 py-3 font-black uppercase tracking-widest border-4 border-slate-900 transition-all flex items-center justify-center sm:justify-start gap-2',
          pestañaActiva === 'biblioteca' ? 'bg-yellow-300 text-slate-900 shadow-[4px_4px_0_0_#0f172a] sm:translate-x-1 sm:-translate-y-1' : 'bg-white text-slate-500 hover:bg-slate-100 sm:hover:-translate-y-1'
        ]"
      >
        <svg class="hidden sm:block w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
        Biblioteca de Manuales
      </button>
    </div>

    <!-- CONTENIDO: PESTAÑA MÓDULOS -->
    <div v-if="pestañaActiva === 'modulos'" class="animate-fade-in">
      <div class="mb-4 flex justify-end">
        <button @click="mostrarFormulario = !mostrarFormulario" class="bg-emerald-400 text-slate-900 px-6 py-3 border-4 border-slate-900 font-black uppercase tracking-widest shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0f172a] transition-all">
          {{ mostrarFormulario ? 'Cancelar Creación' : '+ Crear Módulo' }}
        </button>
      </div>

      <!-- Formulario de Creación (Conectado a la BD) -->
      <div v-if="mostrarFormulario" class="bg-white border-4 border-slate-900 p-6 md:p-8 shadow-[8px_8px_0_0_#0f172a] mb-12">
        
        <!-- SECCIÓN 1: Información General -->
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-widest mb-4 border-b-4 border-slate-100 pb-2">Información General</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="flex flex-col gap-2">
            <label class="text-xs font-black text-slate-600 uppercase tracking-widest">Título de la Capacitación</label>
            <input v-model="nuevoModulo.titulo" type="text" placeholder="Ej: Normativas SRT..." class="w-full bg-slate-50 border-4 border-slate-900 px-4 py-3 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 transition-colors">
          </div>
          
          <div class="flex flex-col gap-2">
            <label class="text-xs font-black text-slate-600 uppercase tracking-widest">Gerencia / Destino</label>
            <select v-model="nuevoModulo.publico_objetivo" class="w-full bg-slate-50 border-4 border-slate-900 px-4 py-3 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 transition-colors">
              <option value="todos">Toda la Planta (General)</option>
              <option value="logistica">Logística</option>
              <option value="mantenimiento">Mantenimiento</option>
              <option value="produccion">Producción</option>
            </select>
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-xs font-black text-slate-600 uppercase tracking-widest">Fecha Límite (Opcional)</label>
            <input v-model="nuevoModulo.fecha_vencimiento" type="date" class="w-full bg-slate-50 border-4 border-slate-900 px-4 py-3 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 transition-colors">
          </div>
        </div>

        <!-- SECCIÓN 2: Reglas del Lobby -->
        <h3 class="text-lg font-black text-slate-900 uppercase tracking-widest mt-8 mb-4 border-b-4 border-slate-100 pb-2">Reglas del Lobby</h3>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="flex flex-col gap-2">
            <label class="text-xs font-black text-slate-600 uppercase tracking-widest">Preguntas por Práctica</label>
            <input v-model="nuevoModulo.cant_preguntas_practica" type="number" min="0" class="w-full bg-slate-50 border-4 border-slate-900 px-4 py-3 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 transition-colors">
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-xs font-black text-slate-600 uppercase tracking-widest">Preguntas en Examen</label>
            <input v-model="nuevoModulo.cant_preguntas_evaluacion" type="number" min="1" class="w-full bg-slate-50 border-4 border-slate-900 px-4 py-3 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 transition-colors">
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-xs font-black text-slate-600 uppercase tracking-widest">Aprobación Mínima (%)</label>
            <input v-model="nuevoModulo.porcentaje_aprobacion" type="number" min="1" max="100" class="w-full bg-slate-50 border-4 border-slate-900 px-4 py-3 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 transition-colors">
          </div>
        </div>

        <!-- SECCIÓN 3: Material Base -->
        <div class="flex flex-col gap-2 mb-8">
          <label class="text-xs font-black text-slate-600 uppercase tracking-widest">Material Base (Manual Oficial)</label>
          <select v-model="nuevoModulo.manual_id" class="w-full bg-slate-50 border-4 border-slate-900 px-4 py-3 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 transition-colors cursor-pointer">
            <option value="" disabled selected>Seleccionar manual de la biblioteca...</option>
            <option v-for="manual in manualesDisponibles" :key="manual.id" :value="manual.id">
              {{ manual.nombre }}
            </option>
          </select>
          <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Requerido para generar con IA. Opcional para carga manual.</p>
        </div>

        <!-- Botonera Dinámica -->
        <div class="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t-4 border-slate-900">
          <button @click="crearModulo('manual')" class="bg-white text-slate-900 font-black px-8 py-4 border-4 border-slate-900 uppercase tracking-widest hover:bg-slate-100 transition-all">
            Crear Manualmente
          </button>
    
          <button @click="crearModulo('ia')" :disabled="!nuevoModulo.manual_id || !nuevoModulo.titulo" class="bg-emerald-400 text-slate-900 font-black px-8 py-4 border-4 border-slate-900 uppercase tracking-widest shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0f172a] transition-all disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0_0_#0f172a] disabled:cursor-not-allowed">
            Generar con IA
          </button>
        </div>
      </div>

      <!-- Lista de Módulos Existentes -->
      <div v-if="!mostrarFormulario" class="mt-8 animate-fade-in">
        <h2 class="text-2xl font-black text-slate-900 uppercase tracking-widest border-b-4 border-slate-200 pb-2 mb-6">Módulos Registrados</h2>
        
        <!-- Mensaje si no hay módulos -->
        <div v-if="listaModulos.length === 0" class="bg-slate-100 border-4 border-slate-900 p-8 text-center shadow-[6px_6px_0_0_#0f172a]">
          <p class="text-slate-600 font-bold uppercase tracking-widest">No hay módulos creados aún.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Tarjeta de Módulo -->
          <div v-for="mod in listaModulos" :key="mod.id" class="bg-white border-4 border-slate-900 flex flex-col shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#0f172a] transition-all">
            
            <!-- Etiqueta de Estado -->
            <div :class="['p-2 border-b-4 border-slate-900 font-black text-xs uppercase tracking-widest text-center', mod.is_active ? 'bg-emerald-400 text-slate-900' : 'bg-yellow-300 text-slate-900']">
              {{ mod.is_active ? 'Activo (Publicado)' : 'En Borrador' }}
            </div>
            
            <div class="p-6 flex-grow flex flex-col">
              <h3 class="text-xl font-black text-slate-900 leading-tight mb-1">{{ mod.titulo }}</h3>
              <p class="text-slate-500 font-bold text-xs uppercase tracking-widest mb-4">Destino: {{ mod.publico_objetivo }}</p>
              
              <div class="flex-grow flex flex-col gap-1 mb-6 text-sm font-bold text-slate-700 bg-slate-50 border-l-4 border-slate-900 pl-3 py-2">
                <p>• Práctica: <span class="text-slate-900">{{ mod.cant_preguntas_practica }} Preg.</span></p>
                <p>• Examen: <span class="text-slate-900">{{ mod.cant_preguntas_evaluacion }} Preg.</span></p>
                <p>• Aprobación: <span class="text-slate-900">{{ mod.porcentaje_aprobacion }}%</span></p>
              </div>
              
              <div class="flex gap-2 mt-auto">
                <router-link :to="`/admin/editor-evaluacion/${mod.id}`" class="flex-1 bg-slate-900 text-white text-center py-3 border-2 border-slate-900 font-black uppercase text-xs hover:bg-slate-800 transition-colors">
                  Editar Banco
                </router-link>
                <button @click="eliminarModulo(mod.id)" class="bg-red-500 text-white px-4 py-3 border-2 border-slate-900 font-black uppercase text-xs hover:bg-red-600 transition-colors" title="Eliminar Módulo">
                  X
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <!-- CONTENIDO: PESTAÑA BIBLIOTECA (Subida de PDFs) -->
    <div v-else class="animate-fade-in">
      <div class="bg-white border-4 border-slate-900 p-6 md:p-8 shadow-[8px_8px_0_0_#0f172a]">
        
        <div 
          @click="triggerFileInput"
          class="mb-8 p-8 border-4 border-dashed border-slate-900 bg-indigo-50 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-indigo-100 transition-colors relative"
          :class="{ 'opacity-50 pointer-events-none': subiendoArchivo }"
        >
          <input type="file" ref="fileInput" accept=".pdf" class="hidden" @change="manejarSubidaArchivo">
          <div v-if="!subiendoArchivo" class="w-16 h-16 bg-indigo-500 border-4 border-slate-900 flex items-center justify-center shadow-[4px_4px_0_0_#0f172a] mb-4">
            <svg class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
          </div>
          <div v-else class="w-16 h-16 bg-yellow-300 border-4 border-slate-900 flex items-center justify-center shadow-[4px_4px_0_0_#0f172a] mb-4 animate-spin">
             <svg class="w-8 h-8 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </div>
          <h3 class="font-black text-slate-900 text-xl uppercase tracking-widest mb-1">
            {{ subiendoArchivo ? 'Subiendo a Cloudinary...' : 'Añadir Manual a Biblioteca' }}
          </h3>
          <p class="font-bold text-slate-600 text-sm">
            {{ subiendoArchivo ? 'Guardando registro en base de datos.' : 'Sube un PDF para usarlo en futuras capacitaciones.' }}
          </p>
        </div>

        <h2 class="text-lg font-black text-slate-900 uppercase tracking-widest border-b-4 border-slate-200 pb-2 mb-6">Manuales Disponibles</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="manual in manualesDisponibles" :key="manual.id" class="border-4 border-slate-900 p-4 flex justify-between items-center group hover:bg-slate-50 transition-colors">
            <div class="flex items-center gap-4 flex-1 min-w-0">
              <div class="w-10 h-10 bg-red-500 border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0_0_#0f172a] shrink-0">
                <span class="text-white font-black text-[10px]">PDF</span>
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-black text-slate-900 leading-tight truncate" :title="manual.nombre">{{ manual.nombre }}</p>
                <p class="text-[10px] font-bold text-slate-500 uppercase tracking-widest truncate">{{ manual.peso }}</p>
              </div>
            </div>
            <!-- Botón temporal para pre-visualizar en una nueva pestaña (luego lo haremos in-app) -->
            <a :href="manual.url_cloudinary" target="_blank" class="text-slate-400 hover:text-indigo-500 transition-colors shrink-0 ml-2" title="Leer Documento">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </a>

            <!-- NUEVO BOTÓN: Eliminar Manual -->
            <button @click="eliminarManual(manual.id)" class="text-slate-400 hover:text-red-500 transition-colors shrink-0 ml-2" title="Eliminar Manual">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const pestañaActiva = ref('modulos')
const mostrarFormulario = ref(false)

// Estado del nuevo formulario
const nuevoModulo = ref({
  titulo: '',
  publico_objetivo: 'todos',
  fecha_vencimiento: '',
  metodo_creacion: 'ia',
  cant_preguntas_practica: 5,
  cant_preguntas_evaluacion: 10,
  porcentaje_aprobacion: 70,
  manual_id: ''
})

// Referencias de subida
const fileInput = ref(null)
const subiendoArchivo = ref(false)
const manualesDisponibles = ref([])

// 1. Cargar manuales al abrir la pantalla
const cargarManuales = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/manuales')
    if (response.ok) {
      manualesDisponibles.value = await response.json()
    }
  } catch (error) {
    console.error("Error al cargar la biblioteca:", error)
  }
}

onMounted(() => {
  cargarManuales()
})

// --- Lógica de la Lista de Módulos ---
const listaModulos = ref([])

const cargarModulos = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/modulos')
    if (response.ok) {
      listaModulos.value = await response.json()
    }
  } catch (error) {
    console.error("Error al cargar módulos:", error)
  }
}

// Actualizamos onMounted para que cargue ambas cosas
onMounted(() => {
  cargarManuales()
  cargarModulos()
})

const eliminarModulo = async (id) => {
  if (!confirm("¿Seguro que deseas eliminar este módulo y todas sus preguntas? Esta acción es irreversible.")) return
  
  try {
    await fetch(`http://127.0.0.1:8000/api/modulos/${id}`, { method: 'DELETE' })
    cargarModulos() // Recargamos la lista para que desaparezca
  } catch (error) {
    console.error("Error al eliminar módulo:", error)
  }
}

// 2. Lógica de Subida de PDFs
const triggerFileInput = () => {
  if (!subiendoArchivo.value && fileInput.value) {
    fileInput.value.click()
  }
}

const manejarSubidaArchivo = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  subiendoArchivo.value = true
  const formData = new FormData()
  formData.append('file', file)

  try {
    const response = await fetch('http://127.0.0.1:8000/upload-pdf', {
      method: 'POST',
      body: formData
    })
    
    const data = await response.json()
    if (data.manual) {
      manualesDisponibles.value.unshift(data.manual)
    }
  } catch (error) {
    console.error("Error de subida:", error)
  } finally {
    subiendoArchivo.value = false
    if (fileInput.value) fileInput.value.value = ''
  }
}

const eliminarManual = async (id) => {
  if (!confirm("¿Seguro que deseas eliminar este manual de la biblioteca?")) return
  
  try {
    const response = await fetch(`http://127.0.0.1:8000/manuales/${id}`, { 
      method: 'DELETE' 
    })
    
    if (response.ok) {
      // Lo sacamos de la vista instantáneamente sin recargar la página
      manualesDisponibles.value = manualesDisponibles.value.filter(m => m.id !== id)
    }
  } catch (error) {
    console.error("Error al eliminar el manual:", error)
  }
}

// 3. Lógica para Crear el Módulo
const crearModulo = async (metodo) => {
  try {
    const responseCreacion = await fetch('http://127.0.0.1:8000/api/modulos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...nuevoModulo.value,
        metodo_creacion: metodo // Le pasamos a FastAPI la decisión del botón
      })
    })
    
    const dataModulo = await responseCreacion.json()
    const moduloIdGenerado = dataModulo.id 
    
    // Si apretó el botón verde de IA, despertamos a n8n
    if (metodo === 'ia') {
       const manualData = manualesDisponibles.value.find(m => m.id === nuevoModulo.value.manual_id)
       
       // Calculamos el pool total necesario sumando las reglas del lobby
       const poolTotalPreguntas = nuevoModulo.value.cant_preguntas_practica + nuevoModulo.value.cant_preguntas_evaluacion

       await fetch('http://127.0.0.1:8000/api/generar-evaluacion', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
           manual_id: moduloIdGenerado,
           url_pdf: manualData.url_cloudinary,
           cantidad_preguntas: poolTotalPreguntas,
           tipo_modulo: "general"
         })
       })
    }
    
    // En ambos casos, saltamos a la sala de revisión/edición
    router.push(`/admin/editor-evaluacion/${moduloIdGenerado}`)
    
  } catch (error) {
    console.error("Error al crear el módulo:", error)
  }
}
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