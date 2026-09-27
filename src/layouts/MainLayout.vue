<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'
import Topbar from '../components/Topbar.vue'

const route = useRoute()
const router = useRouter()

const chatAbierto = ref(false)
const mensaje = ref('')
const historial = ref([
  { rol: 'ia', texto: 'Hola Lucas. Soy tu asistente de Seguridad Logística. ¿Qué protocolo necesitas consultar hoy?' }
])

const contenedorPrincipal = ref(null)

// Leemos el rol
const rolUsuario = ref('')
onMounted(() => {
  rolUsuario.value = localStorage.getItem('rolUsuario') || 'operario'
})

// Función para salir
const cerrarSesion = () => {
  localStorage.removeItem('rolUsuario')
  router.push('/login')
}

watch(() => route.path, () => {
  if (contenedorPrincipal.value) {
    contenedorPrincipal.value.scrollTop = 0
  }
})

const permitirChat = computed(() => route.name !== 'modulo-lobby')

const enviarMensaje = async () => {
  if (!mensaje.value.trim()) return
  
  const textoPregunta = mensaje.value
  historial.value.push({ rol: 'usuario', texto: textoPregunta })
  mensaje.value = ''
  
  // Agregamos un mensaje temporal de "pensando..."
  const indexTemporal = historial.value.push({ rol: 'ia', texto: 'Analizando manuales oficiales...' }) - 1

  try {
    const response = await fetch('https://back-seguridad-logistica-app.onrender.com/api/chat-asistente', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pregunta: textoPregunta })
    })
    
    const data = await response.json()
    
    // Reemplazamos el texto temporal con la respuesta real de la IA
    historial.value[indexTemporal].texto = data.respuesta
    
  } catch (error) {
    historial.value[indexTemporal].texto = "Error de conexión con el Asistente de IA."
  }
}
</script>

<template>
  <!-- Usamos h-[100dvh] para que en celulares no rebote con la barra del navegador -->
  <div class="h-[100dvh] bg-slate-50 flex overflow-hidden font-sans relative">
    
    <!-- Sidebar -->
    <Sidebar />

    <div class="flex-1 flex flex-col min-w-0 relative">
      
      <!-- Topbar -->
      <div class="hidden md:block">
        <Topbar />
      </div>

      <!-- MOBILE HEADER -->
      <header class="md:hidden sticky top-0 z-40 w-full bg-white border-b-4 border-slate-900 flex items-center justify-between px-4 py-3 shadow-sm">
        <div class="font-black text-slate-900 uppercase tracking-tighter text-xl flex items-center gap-2">
          <div class="w-8 h-8 bg-emerald-400 border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0_0_#0f172a]">
            <svg class="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          S.L.
        </div>

        <div class="flex items-center gap-3">
          <!-- Campanita Móvil -->
          <button class="relative w-9 h-9 bg-white border-2 border-slate-900 flex items-center justify-center shadow-[2px_2px_0_0_#0f172a] active:translate-y-px active:shadow-none transition-all">
            <svg class="w-5 h-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
            <span class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-slate-900"></span>
          </button>
          
          <!-- Apagar / Salir -->
          <button @click="cerrarSesion" class="bg-white w-9 h-9 border-2 border-slate-900 flex items-center justify-center text-red-500 shadow-[2px_2px_0_0_#0f172a] active:translate-y-px active:shadow-none transition-all">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9" /></svg>
          </button>
        </div>
      </header>

      <!-- Contenido Principal -->
      <main ref="contenedorPrincipal" class="flex-1 overflow-y-auto pt-6 md:pt-10 pb-28 md:pb-10 px-4 sm:px-8 scroll-smooth">
        <router-view></router-view>
      </main>
    </div>

    <!-- ZONA DE BOTONES FLOTANTES (Abajo a la derecha) -->
    <div v-if="permitirChat" class="fixed bottom-20 md:bottom-10 right-4 md:right-10 z-50 flex flex-col items-end gap-3">
      
      <!-- Botón Ir a Gestión (Solo RRHH/Admin) -->
      <router-link v-if="rolUsuario === 'rrhh' || rolUsuario === 'admin'" to="/admin" class="group flex items-center gap-0 mb-2">
        <span class="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 border-y-2 border-l-2 border-slate-900 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 hidden sm:block">Panel de Gestión</span>
        <div class="w-12 h-12 md:w-14 md:h-14 bg-indigo-500 border-4 border-slate-900 flex items-center justify-center shadow-[4px_4px_0_0_#0f172a] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0_0_#0f172a] transition-all text-white">
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        </div>
      </router-link>
    
      <!-- Ventana de Chat -->
      <div v-if="chatAbierto" class="mb-4 w-[90vw] md:w-96 bg-white border-4 border-slate-900 shadow-[8px_8px_0_0_#0f172a] flex flex-col h-[500px] animate-fade-in origin-bottom-right">
        <div class="bg-yellow-300 border-b-4 border-slate-900 p-4 flex justify-between items-center">
          <div class="flex items-center gap-3">
            <div class="w-3 h-3 bg-slate-900 rounded-full animate-pulse"></div>
            <span class="font-black text-slate-900 uppercase tracking-widest text-sm">Asistente IA</span>
          </div>
          <button @click="chatAbierto = false" class="text-slate-900 hover:scale-110 transition-transform">
            <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        
        <div class="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-4">
          <div v-for="(msg, index) in historial" :key="index" :class="['max-w-[85%] p-3 border-2 border-slate-900 shadow-[2px_2px_0_0_#0f172a]', msg.rol === 'ia' ? 'self-start bg-white' : 'self-end bg-emerald-300']">
            <p class="text-sm font-bold text-slate-900">{{ msg.texto }}</p>
          </div>
        </div>

        <div class="p-3 border-t-4 border-slate-900 bg-white flex gap-2">
          <input 
            v-model="mensaje" 
            @keyup.enter="enviarMensaje"
            type="text" 
            placeholder="Consultar manual..." 
            class="flex-1 bg-slate-100 border-2 border-slate-900 px-3 py-2 text-sm font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 transition-colors"
          >
          <button @click="enviarMensaje" class="bg-slate-900 text-white px-4 border-2 border-slate-900 hover:bg-slate-700 transition-colors flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
          </button>
        </div>
      </div>

      <!-- Botón Disparador -->
      <button 
        v-show="!chatAbierto"
        @click="chatAbierto = true" 
        class="w-16 h-16 bg-yellow-300 border-4 border-slate-900 flex items-center justify-center shadow-[6px_6px_0_0_#0f172a] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#0f172a] transition-all group"
      >
        <svg class="w-8 h-8 text-slate-900 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>

    <!-- BOTTOM NAV (Móvil) -->
    <nav class="md:hidden fixed bottom-0 left-0 w-full bg-white border-t-4 border-slate-900 flex z-40">
      <router-link to="/" exact-active-class="bg-yellow-300" class="flex-1 border-r-2 border-slate-900 py-3 flex flex-col items-center gap-1 text-slate-900 transition-colors">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        <span class="text-[9px] font-black uppercase tracking-widest">Inicio</span>
      </router-link>
      
      <router-link to="/biblioteca" active-class="bg-yellow-300" class="flex-1 border-r-2 border-slate-900 py-3 flex flex-col items-center gap-1 text-slate-900 transition-colors">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
        <span class="text-[9px] font-black uppercase tracking-widest">Manuales</span>
      </router-link>
      
      <router-link to="/perfil" active-class="bg-yellow-300" class="flex-1 py-3 flex flex-col items-center gap-1 text-slate-900 transition-colors">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
        <span class="text-[9px] font-black uppercase tracking-widest">Perfil</span>
      </router-link>
    </nav>
  </div>
</template>