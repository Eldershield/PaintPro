<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Catálogo de Pinturas</h1>
      </div>

      <div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        <div 
          v-for="category in categories" 
          :key="category.id" 
          class="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-200"
        >
          <div class="p-5">
            <h3 class="text-lg font-medium text-gray-900">{{ category.name }}</h3>
            <p class="text-sm text-gray-500">{{ category.description }}</p>
            
            <div class="h-32 bg-gray-100 rounded-lg overflow-hidden mt-3">
              <img :src="category.image" alt="Imagen de categoría" class="h-full w-full object-cover">
            </div>

            <!-- Tarjetas de productos -->
            <div class="mt-4 space-y-4">
              <div 
                v-for="product in category.products" 
                :key="product.id" 
                class="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div>
                  <h4 class="text-md font-semibold text-gray-800">{{ product.name }}</h4>
                  <p class="text-sm text-gray-600">{{ product.description }}</p>
                  <p class="text-sm font-bold text-gray-800">${{ product.price.toFixed(2) }}</p>
                </div>

                <!-- Checkboxes para seleccionar colores -->
                <div v-if="product.colors" class="mt-2">
                  <p class="text-xs text-gray-500 mb-1">Colores disponibles:</p>
                  <div class="flex flex-wrap gap-2 justify-center">
                    <label 
                      v-for="(color, index) in product.colors" 
                      :key="index" 
                      class="flex items-center space-x-2"
                    >
                      <input 
                        type="checkbox" 
                        :value="color" 
                        v-model="product.selectedColors" 
                        class="form-checkbox h-4 w-4 text-blue-600"
                      >
                      <span class="text-sm text-gray-700">{{ color }}</span>
                    </label>
                  </div>
                </div>

                <!-- Mensaje para productos sin colores -->
                <div v-else class="mt-2">
                  <p class="text-xs text-gray-500 text-center">Este producto no requiere selección de colores.</p>
                </div>

                <button 
                  @click="addToCart(product)" 
                  class="mt-2 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 w-full"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Carrito de compras -->
    <div class="fixed bottom-4 right-4 bg-white shadow-xl p-4 rounded-lg w-80 border border-gray-200">
      <h2 class="text-lg font-bold mb-2 flex items-center"><span class="mr-2">🛒</span> Carrito</h2>
      <ul v-if="cart.length" class="space-y-2">
        <li v-for="(item, index) in cart" :key="index" class="flex justify-between items-center border-b pb-2">
          <div>
            <p class="text-sm font-semibold">{{ item.name }} (x{{ item.quantity }})</p>
            <p v-if="item.selectedColors" class="text-xs text-gray-600">Colores: {{ item.selectedColors.join(", ") }}</p>
            <p class="text-xs text-gray-600">${{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
          <div class="flex space-x-2">
            <button @click="addToCart(item)" class="text-green-500 hover:text-green-700">➕</button>
            <button @click="removeFromCart(index)" class="text-red-500 hover:text-red-700">✖</button>
          </div>
        </li>
      </ul>
      <p v-else class="text-gray-500 text-sm text-center py-2">El carrito está vacío</p>
      
      <p class="text-right font-bold mt-2">Total: ${{ cartTotal.toFixed(2) }}</p>
      <button v-if="cart.length" @click="checkout" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded w-full shadow hover:bg-blue-600">Finalizar Compra</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ref([
  {
    id: 1,
    name: "Pinturas para el Hogar",
    description: "Encuentra la mejor paleta de colores y acabados para transformar tu espacio.",
    image: "/src/assets/Pinturas1.jpg",
    products: [
      { id: 1, name: "Pintura Mate", description: "Acabado suave y sin reflejos.", price: 15.99, colors: ["Rojo", "Azul", "Negro"], selectedColors: [] },
      { id: 2, name: "Pintura Satinada", description: "Sutil brillo para una sensación moderna.", price: 18.99 },
      { id: 3, name: "Pintura Lavable", description: "Ideal para espacios de alto tránsito.", price: 20.99 },
      { id: 19, name: "Pintura Acrílica", description: "Secado rápido y alta resistencia.", price: 22.50 },
      { id: 20, name: "Pintura Texturizada", description: "Crea efectos decorativos únicos.", price: 25.00 }
    ]
  },
  {
    id: 3,
    name: "Herramientas de Pintura",
    description: "Todo lo necesario para aplicar pintura con acabados profesionales.",
    image: "/src/assets/Herramientas.jpg",
    products: [
      { id: 4, name: "Rodillos", description: "Diferentes tamaños y texturas para cada aplicación.", price: 10.99 },
      { id: 5, name: "Brochas Profesionales", description: "Cerdas de alta calidad para un mejor acabado.", price: 8.99 },
      { id: 6, name: "Cinta de Enmascarar", description: "Protege y delimita áreas con precisión.", price: 5.99 },
      { id: 21, name: "Bandeja para Pintura", description: "Ideal para trabajar con rodillos.", price: 6.99 },
      { id: 22, name: "Pistola de Pintura", description: "Para una aplicación uniforme y profesional.", price: 49.99 }
    ]
  },
  {
    id: 4,
    name: "Pinturas Automotrices",
    description: "Renueva el color y protege la carrocería de tu auto con nuestros productos premium.",
    image: "/src/assets/Pinturas2.jpg",
    products: [
      { id: 7, name: "Esmalte Acrílico", description: "Durabilidad y resistencia a los rayos UV.", price: 22.99, colors: ["Rojo", "Azul", "Negro"], selectedColors: [] },
      { id: 8, name: "Base Color", description: "Preparación ideal para un acabado perfecto.", price: 24.99, colors: ["Blanco", "Gris", "Negro"], selectedColors: [] },
      { id: 9, name: "Barniz Protector", description: "Brillo y protección contra la intemperie.", price: 27.99, colors: ["Transparente"], selectedColors: [] },
      { id: 23, name: "Pintura Metalizada", description: "Acabado brillante para un look moderno.", price: 30.99, colors: ["Plata", "Oro", "Cobre"], selectedColors: [] },
      { id: 24, name: "Primario Anticorrosivo", description: "Protección extra contra la oxidación.", price: 18.50, colors: ["Gris", "Rojo"], selectedColors: [] }
    ]
  },
])

const cart = ref([])

const addToCart = (product) => {
  if (product.colors && product.selectedColors.length === 0) {
    alert("Por favor, selecciona al menos un color.")
    return
  }

  const existingProduct = cart.value.find(item => item.id === product.id && JSON.stringify(item.selectedColors) === JSON.stringify(product.selectedColors))
  if (existingProduct) {
    existingProduct.quantity++
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }
}

const removeFromCart = (index) => {
  if (cart.value[index].quantity > 1) {
    cart.value[index].quantity--
  } else {
    cart.value.splice(index, 1)
  }
}

const cartTotal = computed(() => {
  return cart.value.reduce((total, item) => total + item.price * item.quantity, 0)
})

const checkout = () => {
  alert("Compra realizada con éxito!")
  cart.value = []
}
</script>