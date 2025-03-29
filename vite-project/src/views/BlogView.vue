<template>
    <div class="min-h-screen bg-gray-100 py-10 px-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-extrabold text-center text-gray-800 mb-10">🎨 Blog de Pintura</h1>
        
        <div v-for="(post, index) in posts" :key="post.id" :class="['mb-8 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105', dynamicBackgrounds[index % dynamicBackgrounds.length]]">
          <h2 class="text-2xl font-bold mb-4 text-white">{{ post.title }}</h2>
          <p class="text-white" v-if="!post.expanded">{{ post.summary }}...</p>
          <p class="text-white" v-else>{{ post.content }}</p>
          <button @click="toggleExpand(post)" class="mt-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">
            {{ post.expanded ? 'Leer menos' : 'Leer más' }}
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const posts = ref([
    {
      id: 1,
      title: 'Cómo elegir los colores adecuados para tu hogar',
      summary: 'Elegir los colores correctos puede transformar un espacio...',
      content: 'Elegir los colores correctos puede transformar un espacio, creando ambientes acogedores o energizantes. Es importante considerar la iluminación y el mobiliario para una combinación armoniosa.',
      expanded: false
    },
    {
      id: 2,
      title: 'Técnicas avanzadas para pintar paredes',
      summary: 'Desde el degradado hasta el esponjado, explora...',
      content: 'Desde el degradado hasta el esponjado, explora técnicas avanzadas para darle a tus paredes un acabado único y profesional. Estas técnicas permiten personalizar cualquier habitación.',
      expanded: false
    },
    {
      id: 3,
      title: 'Cómo mantener la pintura de tus paredes como nueva',
      summary: 'Aprende a limpiar y mantener tus paredes sin...',
      content: 'Aprende a limpiar y mantener tus paredes sin dañarlas, utilizando productos adecuados para cada tipo de pintura. Evita manchas y deterioro con mantenimiento regular.',
      expanded: false
    },
    {
      id: 4,
      title: 'Colores en tendencia para este año',
      summary: 'Descubre las combinaciones de colores que...',
      content: 'Descubre las combinaciones de colores que están marcando tendencia este año y cómo aplicarlas en tus espacios para un estilo moderno y vibrante.',
      expanded: false
    },
    {
      id: 5,
      title: 'Errores comunes al pintar y cómo evitarlos',
      summary: 'Desde elegir la pintura equivocada hasta...',
      content: 'Desde elegir la pintura equivocada hasta aplicar capas incorrectas, conoce los errores más comunes al pintar y cómo evitarlos para lograr un acabado profesional.',
      expanded: false
    },
    {
      id: 6,
      title: 'Cómo preparar una superficie antes de pintar',
      summary: 'La preparación es clave para un acabado...',
      content: 'La preparación es clave para un acabado duradero. Aprende cómo limpiar, lijar y aplicar imprimación antes de pintar cualquier superficie.',
      expanded: false
    }
  ])
  
  const dynamicBackgrounds = [
    'bg-blue-500', 'bg-purple-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-indigo-500'
  ]
  
  const toggleExpand = (post) => {
    post.expanded = !post.expanded
  }
  </script>
  
  <style>
  .shadow-lg {
    transition: box-shadow 0.3s ease-in-out;
  }
  .shadow-lg:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  </style>
  