<template>
  <div class="max-w-4xl mx-auto py-10 px-6 bg-white shadow-md rounded-lg">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Mi Perfil</h1>
    <div v-if="user" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Nombre</label>
        <p class="text-lg text-gray-900">{{ user.username }}</p>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Correo Electrónico</label>
        <p class="text-lg text-gray-900">{{ user.email }}</p>
      </div>
    </div>
    <p v-else class="text-gray-500">Cargando datos del perfil...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from '@/plugins/axios';

const user = ref(null);

const fetchUserProfile = async () => {
  try {
    const response = await axios.get('/api/users/profile'); // Adjust the endpoint if needed
    user.value = response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    alert('No se pudo cargar el perfil del usuario.');
  }
};

onMounted(fetchUserProfile);
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>