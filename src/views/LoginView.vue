<template>
  <!-- Cambiamos selection:text-yellow-300 por emerald-400 -->
  <div class="min-h-[100dvh] flex flex-col md:flex-row font-sans selection:bg-slate-900 selection:text-emerald-400">
    
    <!-- MITAD IZQUIERDA: Branding Industrial (Ahora en Verde) -->
    <!-- MITAD IZQUIERDA: Branding Industrial (Optimizada para Móvil) -->
    <div class="w-full md:w-1/2 bg-emerald-400 border-b-4 md:border-b-0 md:border-r-4 border-slate-900 p-6 md:p-16 flex flex-col justify-center md:justify-between relative overflow-hidden">
      
      <!-- Decoración Cinta Adhesiva (Oculta en móvil para no ensuciar visualmente) -->
      <div class="hidden md:block absolute -top-10 -right-10 w-40 h-12 bg-slate-900 rotate-45 opacity-20"></div>
      <div class="hidden md:block absolute bottom-20 -left-10 w-40 h-12 bg-slate-900 -rotate-12 opacity-20"></div>

      <!-- Contenedor flex: Fila en móvil (ahorra altura), Columna en PC -->
      <div class="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
        
        <!-- Logo más chico en celular -->
        <div class="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-white border-4 border-slate-900 flex items-center justify-center shadow-[4px_4px_0_0_#0f172a] md:shadow-[6px_6px_0_0_#0f172a] md:mb-8">
          <svg class="w-6 h-6 md:w-10 md:h-10 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        </div>
        
        <!-- Textos dinámicos -->
        <div>
          <!-- El título se pone en una sola línea en celular y salta de línea en PC -->
          <h1 class="text-2xl sm:text-3xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none md:mb-4">
            Seguridad<span class="inline md:hidden"> </span><br class="hidden md:block"> Logística
          </h1>
          
          <!-- Subtítulo oculto en móvil -->
          <p class="hidden md:block text-slate-900 font-bold text-lg md:text-xl uppercase tracking-widest border-l-4 border-slate-900 pl-4">
            Plataforma de Inducción<br>y Certificación Operativa
          </p>
        </div>
      </div>

      <!-- Código de barras falso (Oculto en móvil) -->
      <div class="hidden md:flex mt-12 w-full max-w-xs h-16 border-t-4 border-slate-900 items-center justify-center" 
           style="background: repeating-linear-gradient(90deg, #0f172a, #0f172a 4px, transparent 4px, transparent 8px, #0f172a 8px, #0f172a 14px, transparent 14px, transparent 18px);">
      </div>
    </div>

    <!-- MITAD DERECHA: Formulario de Login -->
    <div class="w-full md:w-1/2 bg-slate-50 flex flex-col items-center justify-center p-8 md:p-16 relative">
      
      <div class="w-full max-w-md">
        <div class="mb-10 text-center md:text-left">
          <h2 class="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">Acceso al Sistema</h2>
          <p class="text-slate-500 font-bold uppercase tracking-widest text-xs">Ingrese sus credenciales corporativas</p>
        </div>

        <form @submit.prevent="iniciarSesion" class="space-y-6">
          <div>
            <label class="block text-xs font-black text-slate-900 uppercase tracking-widest mb-2">ID de Empleado / Email</label>
            <input 
              v-model="email" 
              type="text" 
              placeholder="ejemplo@empresa.com" 
              class="w-full bg-white border-4 border-slate-900 px-4 py-4 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 shadow-[6px_6px_0_0_#0f172a] transition-colors"
            >
          </div>

          <div>
            <label class="block text-xs font-black text-slate-900 uppercase tracking-widest mb-2">Contraseña</label>
            <input 
              v-model="password" 
              type="password" 
              placeholder="••••••••" 
              class="w-full bg-white border-4 border-slate-900 px-4 py-4 font-bold text-slate-900 focus:outline-none focus:bg-yellow-100 shadow-[6px_6px_0_0_#0f172a] transition-colors"
            >
          </div>

          <p v-if="mensajeError" class="text-red-500 font-bold text-xs uppercase tracking-widest mt-2 border-l-4 border-red-500 pl-2">
            {{ mensajeError }}
          </p>
          
          <button 
            type="submit" 
            class="w-full bg-slate-900 text-white mt-4 py-4 border-4 border-slate-900 font-black text-xl uppercase tracking-widest shadow-[6px_6px_0_0_#cbd5e1] hover:bg-slate-800 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#cbd5e1] transition-all"
          >
            Ingresar
          </button>
        </form>

        <!-- ACCESOS RÁPIDOS PARA PORTFOLIO -->
        <div class="mt-12 pt-8 border-t-4 border-slate-200">
          <p class="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Accesos Rápidos Demo</p>
          <div class="grid grid-cols-3 gap-2">
            <button @click="accesoRapido('operario')" class="bg-slate-200 hover:bg-emerald-300 text-slate-900 py-2 border-2 border-slate-900 font-black text-[10px] uppercase tracking-widest transition-colors shadow-[2px_2px_0_0_#0f172a]">
              Operario
            </button>
            <button @click="accesoRapido('rrhh')" class="bg-slate-200 hover:bg-indigo-300 text-slate-900 py-2 border-2 border-slate-900 font-black text-[10px] uppercase tracking-widest transition-colors shadow-[2px_2px_0_0_#0f172a]">
              RRHH
            </button>
            <button @click="accesoRapido('admin')" class="bg-slate-200 hover:bg-red-400 hover:text-white text-slate-900 py-2 border-2 border-slate-900 font-black text-[10px] uppercase tracking-widest transition-colors shadow-[2px_2px_0_0_#0f172a]">
              TI (Admin)
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const rolSeleccionado = ref('operario')
const mensajeError = ref('') // Para mostrar si se equivocan la clave

const iniciarSesion = async () => {
  mensajeError.value = ''
  
  try {
    // FastAPI espera los datos en formato "Formulario" (x-www-form-urlencoded), NO JSON.
    const params = new URLSearchParams()
    params.append('username', email.value) // FastAPI exige que el campo se llame 'username'
    params.append('password', password.value)

    const response = await fetch('https://back-seguridad-logistica-app.onrender.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params
    })

    if (!response.ok) {
      mensajeError.value = 'Credenciales incorrectas. Intente nuevamente.'
      return
    }

    const data = await response.json()
    
    // Guardamos el token y el rol REAL que nos devuelve la base de datos
    localStorage.setItem('token', data.access_token)
    localStorage.setItem('rolUsuario', data.rol)
    localStorage.setItem('usuarioId', data.usuario_id)
    
    // Redirigimos
    if (data.rol === 'operario') {
      router.push('/')
    } else {
      router.push('/admin')
    }
  } catch (error) {
    mensajeError.value = 'Error al conectar con el servidor.'
    console.error(error)
  }
}

// Mantenemos los botones de demo para tu portfolio
const accesoRapido = (rol) => {
  email.value = `${rol}@empresa.com`
  password.value = 'demo1234'
  
  // Pequeño delay visual antes de mandar la petición real
  setTimeout(() => {
    iniciarSesion()
  }, 400)
}
</script>