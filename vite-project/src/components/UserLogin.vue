<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-800 p-6 animate-bg-transition">
    <div class="max-w-md w-full bg-white rounded-3xl shadow-lg p-8 text-center">
      <h1 class="text-4xl font-extrabold text-purple-600 mb-4 animate-fade-in">Bienvenido a Paint Pro</h1>
      <h2 class="text-2xl font-extrabold text-yellow-400 mb-6 animate-slide-in">Iniciar Sesión</h2>
      
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            id="password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            required
            class="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
          />
          <button type="button" @click="togglePassword" class="mt-2 text-sm text-yellow-400 hover:underline">{{ showPassword ? 'Ocultar' : 'Mostrar' }} contraseña</button>
        </div>

        <div class="text-sm text-center">
          <router-link to="/register" class="font-medium text-yellow-400 hover:underline">
            ¿No tienes cuenta? Regístrate
          </router-link>
        </div>

        <button
          type="submit"
          class="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-white font-bold bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-all"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axiosInstance from '../plugins/axios'

const router = useRouter()
const email = ref('')
const password = ref('')
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value;
}

const handleSubmit = async () => {
  try {
    const response = await axiosInstance.post('/api/auth/login', {
      email: email.value,
      password: password.value
    })
    
    localStorage.setItem('token', response.data.token)
    router.push('/crops')
  } catch (error) {
    console.error('Error de inicio de sesión:', error)
    alert('Error al iniciar sesión. Por favor, verifica tus credenciales.')
  }
}
</script>

<style scoped>
/* Fondos de transición suave */
@keyframes gradientAnimation {
  0% { background: linear-gradient(to right, #6b46c1, #4c51bf); }
  100% { background: linear-gradient(to right, #805ad5, #5a67d8); }
}

.animate-bg-transition {
  animation: gradientAnimation 6s infinite alternate;
}

/* Animaciones de texto */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fade-in {
  animation: fadeIn 1.2s ease-out;
}

.animate-slide-in {
  animation: slideIn 1.2s ease-out;
}
</style>
