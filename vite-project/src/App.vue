<template>
  <!-- Navbar -->
  <nav class="bg-gradient-to-r from-yellow-500 to-red-500 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo y Título -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <img class="h-10 w-10" src="@/assets/logopinturas.jpg" alt="PaintPro Logo" />
            <span class="ml-2 text-2xl font-bold text-white">PaintPro</span>
          </router-link>
        </div>

 <!-- Menú de navegación -->
 <div class="hidden sm:flex sm:items-center sm:ml-6">
          <div class="flex space-x-4">
            <router-link
              to="/"
              class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              :class="{ 'text-gray-900 bg-white': $route.path === '/' }"
            >
              Inicio
            </router-link>
            <router-link
              to="/catalogo"
              class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              :class="{ 'text-gray-900 bg-white': $route.path.includes('/Crops') }"
            >
              Catálogo
            </router-link>
            <router-link
              to="/simulador"
              class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Simulador de Colores
            </router-link>
            <router-link
              to="/blog"
              class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Blog de Pintura
            </router-link>
          </div>
        </div>
<router-link
              to="/paint-calculator"
              class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Calculadora
            </router-link>
          <router-link
              to="/inspo"
              class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Inspiraciones
            </router-link>

        <!-- Menú de usuario -->
        <div class="flex items-center">
          <div class="ml-3 relative" v-if="isAuthenticated">
            <div class="relative" @click="toggleUserMenu" ref="userMenuButton">
              <button class="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300">
                <span class="sr-only">Abrir menú de usuario</span>
                <div class="h-8 w-8 rounded-full bg-white flex items-center justify-center">
              <span class="text-2xl">🎨</span>
            </div>

              </button>
            </div>

            <!-- Menú desplegable -->
            <div
              v-if="showUserMenu"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
            >
              <router-link
                to="/profile"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Mi Perfil
              </router-link>
              <button
                @click="logout"
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
          <div v-else class="flex space-x-4">
            <router-link
              to="/login"
              class="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Iniciar Sesión
            </router-link>
            <router-link
              to="/register"
              class="bg-white text-red-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
            >
              Registrarse
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Contenido principal -->
  <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <router-view></router-view>
  </main>

  <!-- Sección de Testimonios -->
  <section class="bg-gray-100 py-16">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Lo que dicen nuestros clientes</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <p class="text-gray-700 italic">"PaintPro tiene las mejores pinturas. El acabado en mis paredes quedó espectacular."</p>
          <h4 class="text-red-500 font-bold mt-4">- Ana Martínez</h4>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <p class="text-gray-700 italic">"Muy buena calidad y precios accesibles. Recomiendo PaintPro para cualquier proyecto de pintura."</p>
          <h4 class="text-red-500 font-bold mt-4">- Luis Gómez</h4>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <p class="text-gray-700 italic">"Excelente servicio y asesoramiento. Encontré el color perfecto para mi auto."</p>
          <h4 class="text-red-500 font-bold mt-4">- Carla Rodríguez</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showUserMenu = ref(false)
const userMenuButton = ref(null)
const isAuthenticated = computed(() => !!localStorage.getItem('token'))

// Calcular iniciales del usuario
const userInitials = computed(() => {
  const user = JSON.parse(localStorage.getItem('user') || '{}')
  if (user.name) {
    return user.name.split(' ').map(n => n[0]).join('').toUpperCase()
  }
  return 'U'
})

// Alternar menú de usuario
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

// Cerrar menú al hacer clic fuera
const handleClickOutside = (event) => {
  if (userMenuButton.value && !userMenuButton.value.contains(event.target)) {
    showUserMenu.value = false
  }
}

// Cerrar sesión
const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push('/login')
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>