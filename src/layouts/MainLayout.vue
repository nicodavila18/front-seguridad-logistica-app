<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'
import Topbar from '../components/Topbar.vue'

const route = useRoute()
const chatAbierto = ref(false)
const mensaje = ref('')
const historial = ref([
  { rol: 'ia', texto: 'Hola Lucas. Soy tu asistente de Seguridad Logística. ¿Qué protocolo necesitas consultar hoy?' }
])

// Lógica Anti-Trampas: El chat solo existe si NO estamos en el simulador
const permitirChat = computed(() => route.name !== 'simulador')

const enviarMensaje = () => {
  if (!mensaje.value.trim()) return
  
  // Agregamos mensaje del usuario
  historial.value.push({ rol: 'usuario', texto: mensaje.value })
  const textoEnviado = mensaje.value
  mensaje.value = ''

  // Simulamos la respuesta que a futuro vendrá de tu webhook de n8n
  setTimeout(() => {
    historial.value.push({ 
      rol: 'ia', 
      texto: `Consultando los manuales oficiales sobre "${textoEnviado}"... (Acá conectaremos n8n y FastAPI).` 
    })
  }, 1000)
}
</script>

<template>
  <div class="h-screen bg-slate-50 flex overflow-hidden font-sans relative">
    
    <!-- Sidebar (Oculto en móvil) -->
    <Sidebar />

    <div class="flex-1 flex flex-col min-w-0 relative">
      
      <!-- Topbar (Se oculta en móvil) -->
      <div class="hidden md:block">
        <Topbar />
      </div>

      <!-- BOTÓN FLOTANTE MÓVIL (Campana) -->
      <button class="md:hidden fixed top-5 right-5 z-40 w-12 h-12 bg-white border-2 border-slate-900 flex items-center justify-center shadow-[4px_4px_0_0_#0f172a] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all">
        <svg class="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
        <span class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-slate-900"></span>
      </button>
      
      <!-- Contenido Principal -->
      <main class="flex-1 flex justify-center items-start pt-8 md:pt-10 pb-28 md:pb-10 px-4 sm:px-8 overflow-y-auto">
        <router-view></router-view>
      </main>
    </div>

    <!-- COPILOTO DE IA (Flotante) -->
    <div v-if="permitirChat" class="fixed bottom-20 md:bottom-10 right-4 md:right-10 z-50 flex flex-col items-end">
      
      <!-- Ventana de Chat Abierta -->
      <div v-if="chatAbierto" class="mb-4 w-[90vw] md:w-96 bg-white border-4 border-slate-900 shadow-[8px_8px_0_0_#0f172a] flex flex-col h-[500px] animate-fade-in origin-bottom-right">
        <!-- Header Chat -->
        <div class="bg-yellow-300 border-b-4 border-slate-900 p-4 flex justify-between items-center">
          <div class="flex items-center gap-3">
            <div class="w-3 h-3 bg-slate-900 rounded-full animate-pulse"></div>
            <span class="font-black text-slate-900 uppercase tracking-widest text-sm">Asistente IA</span>
          </div>
          <button @click="chatAbierto = false" class="text-slate-900 hover:scale-110 transition-transform">
            <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        
        <!-- Cuerpo del Chat -->
        <div class="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-4">
          <div v-for="(msg, index) in historial" :key="index" :class="['max-w-[85%] p-3 border-2 border-slate-900 shadow-[2px_2px_0_0_#0f172a]', msg.rol === 'ia' ? 'self-start bg-white' : 'self-end bg-emerald-300']">
            <p class="text-sm font-bold text-slate-900">{{ msg.texto }}</p>
          </div>
        </div>

        <!-- Input Chat -->
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

      <!-- Botón Disparador del Chat -->
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

    <!-- BOTTOM NAV MÓVIL (Brutalista) -->
    <nav class="md:hidden fixed bottom-0 left-0 w-full bg-white border-t-4 border-slate-900 flex z-40">
      <router-link to="/" exact-active-class="bg-yellow-300" class="flex-1 border-r-2 border-slate-900 py-3 flex flex-col items-center gap-1 text-slate-900 transition-colors">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
        <span class="text-[9px] font-black uppercase tracking-widest">Inicio</span>
      </router-link>
      
      <router-link to="/simulador" active-class="bg-yellow-300" class="flex-1 border-r-2 border-slate-900 py-3 flex flex-col items-center gap-1 text-slate-900 transition-colors">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        <span class="text-[9px] font-black uppercase tracking-widest">Trivia</span>
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