<template>
  <div class="min-h-screen bg-gradient-to-b from-indigo-500 to-purple-700 animate-fade-in">
    <div class="container mx-auto px-12 py-16 max-w-7xl">
      <div class="text-center">
        <h1 class="text-6xl font-extrabold text-white mb-8 drop-shadow-lg animate-bounce">
          Bienvenido a PaintPro
        </h1>
        <p class="text-lg text-gray-200 mb-14 animate-fade-in-up">
          Descubre la mejor selección de pinturas para hogar y automóviles con acabados de calidad profesional.
        </p>

        <div v-if="!isAuthenticated" class="space-y-6 animate-fade-in">
          <div class="flex flex-col sm:flex-row justify-center gap-6">
            <router-link
              to="/login"
              class="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-md text-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-transform transform hover:scale-110"
            >
              <i class="fas fa-sign-in-alt mr-2"></i>
              Iniciar Sesión
            </router-link>
            <router-link
              to="/register"
              class="inline-flex items-center justify-center px-6 py-3 border border-yellow-500 rounded-lg shadow-md text-lg font-semibold text-yellow-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-transform transform hover:scale-110"
            >
              <i class="fas fa-user-plus mr-2"></i>
              Registrarse
            </router-link>
          </div>
        </div>

        <div v-else class="space-y-6 animate-fade-in">
          <router-link
            to="/catalogo"
            class="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-md text-lg font-semibold text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-transform transform hover:scale-110"
          >
            <i class="fas fa-palette mr-2"></i>
            Ver Productos
          </router-link>
        </div>

        <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div class="bg-pink-500 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-white">
            <div class="text-5xl mb-6 animate-pulse">
              <i class="fas fa-paint-roller"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Pinturas para el Hogar</h3>
            <p>Encuentra la mejor paleta de colores y acabados para transformar tu espacio.</p>
          </div>

          <div class="bg-orange-500 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-white">
            <div class="text-5xl mb-6 animate-pulse">
              <i class="fas fa-car"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Pinturas Automotrices</h3>
            <p>Renueva el color y protege la carrocería de tu auto con nuestros productos premium.</p>
          </div>

          <div class="bg-green-500 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-white">
            <div class="text-5xl mb-6 animate-pulse">
              <i class="fas fa-brush"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Herramientas y Accesorios</h3>
            <p>Todo lo que necesitas para aplicar pintura con un acabado profesional.</p>
          </div>

          <div class="bg-blue-500 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-white">
            <div class="text-5xl mb-6 animate-pulse">
              <i class="fas fa-spray-can"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Pinturas en Aerosol</h3>
            <p>Soluciones rápidas y eficientes para acabados uniformes y duraderos.</p>
          </div>

          <div class="bg-purple-500 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-white">
            <div class="text-5xl mb-6 animate-pulse">
              <i class="fas fa-fill-drip"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Esmaltes y Barnices</h3>
            <p>Protección y brillo para madera y metales en interiores y exteriores.</p>
          </div>

          <div class="bg-red-500 p-10 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-white">
            <div class="text-5xl mb-6 animate-pulse">
              <i class="fas fa-brush"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Pinturas Ecológicas</h3>
            <p>Opciones amigables con el medio ambiente sin comprometer la calidad.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const isAuthenticated = computed(() => {
  return !!localStorage.getItem('token')
})
</script>

<style>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-fade-in { animation: fade-in 1s ease-in-out; }
.animate-fade-in-up { animation: fade-in-up 1s ease-in-out; }
.animate-bounce { animation: bounce 1.5s infinite; }
.animate-pulse { animation: pulse 2s infinite; }
</style>

