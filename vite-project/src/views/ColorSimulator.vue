<template>
  <div class="min-h-screen bg-gray-100 py-10 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-extrabold text-gray-800 mb-10">🎨 Simulador de Colores</h1>
      <div class="grid grid-cols-4 gap-4">
        <div 
          v-for="color in colors" 
          :key="color.name" 
          :style="{ backgroundColor: color.hex }" 
          class="h-20 w-20 rounded-full cursor-pointer shadow-lg transition-transform transform hover:scale-110"
          @click="selectColor(color)">
        </div>
      </div>
      
      <div v-if="selectedColor" class="mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 class="text-2xl font-bold">Color seleccionado: {{ selectedColor.name }}</h2>
        <p class="text-gray-700 mt-2">{{ selectedColor.description }}</p>
        <p class="text-gray-700 mt-2"><strong>Usos recomendados:</strong> {{ selectedColor.uses }}</p>
        <p class="text-gray-700 mt-2">Combinaciones recomendadas:</p>
        <div class="flex justify-center gap-4 mt-4">
          <div 
            v-for="combo in selectedColor.combinations" 
            :key="combo" 
            :style="{ backgroundColor: combo }" 
            class="h-12 w-12 rounded-full border border-gray-300">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const colors = ref([
  { 
    name: 'Rojo Carmesí', 
    hex: '#DC143C', 
    combinations: ['#FFFFFF', '#000000', '#FFD700'],
    description: 'Un rojo intenso y vibrante que evoca pasión y energía.',
    uses: 'Ideal para acentos en diseño gráfico, moda y decoración de interiores.'
  },
  { 
    name: 'Azul Real', 
    hex: '#4169E1', 
    combinations: ['#FFFFFF', '#FFD700', '#808080'],
    description: 'Un azul profundo y majestuoso que transmite confianza y serenidad.',
    uses: 'Perfecto para diseños corporativos, branding y espacios relajantes.'
  },
  { 
    name: 'Verde Esmeralda', 
    hex: '#50C878', 
    combinations: ['#FFFFFF', '#8B4513', '#FFD700'],
    description: 'Un verde vibrante y refrescante que simboliza naturaleza y crecimiento.',
    uses: 'Excelente para diseños ecológicos, moda y decoración de interiores.'
  },
  { 
    name: 'Amarillo Mostaza', 
    hex: '#FFDB58', 
    combinations: ['#000000', '#808080', '#008000'],
    description: 'Un amarillo cálido y terroso que aporta calidez y sofisticación.',
    uses: 'Ideal para diseños vintage, moda otoñal y decoración acogedora.'
  },
  { 
    name: 'Naranja Brillante', 
    hex: '#FF6600', 
    combinations: ['#FFFFFF', '#000000', '#8B4513'],
    description: 'Un naranja vibrante y lleno de energía que llama la atención.',
    uses: 'Perfecto para diseños publicitarios, deportivos y espacios juveniles.'
  },
  { 
    name: 'Violeta Intenso', 
    hex: '#9400D3', 
    combinations: ['#FFFFFF', '#FFD700', '#000000'],
    description: 'Un violeta profundo y misterioso que evoca elegancia y creatividad.',
    uses: 'Ideal para diseños artísticos, moda elegante y decoración moderna.'
  },
  { 
    name: 'Cyan Vibrante', 
    hex: '#00CED1', 
    combinations: ['#000000', '#808080', '#FF4500'],
    description: 'Un cyan brillante y moderno que transmite frescura y innovación.',
    uses: 'Perfecto para diseños tecnológicos, identidades de marca y espacios modernos.'
  },
  { 
    name: 'Magenta Fucsia', 
    hex: '#FF1493', 
    combinations: ['#FFFFFF', '#808080', '#000000'],
    description: 'Un magenta vibrante y audaz que representa energía y creatividad.',
    uses: 'Ideal para diseños juveniles, moda atrevida y publicidad impactante.'
  },
  { 
    name: 'Marrón Chocolate', 
    hex: '#D2691E', 
    combinations: ['#FFFFFF', '#FFD700', '#008000'],
    description: 'Un marrón cálido y acogedor que evoca naturalidad y estabilidad.',
    uses: 'Perfecto para diseños rústicos, moda otoñal y decoración hogareña.'
  },
  { 
    name: 'Gris Plateado', 
    hex: '#C0C0C0', 
    combinations: ['#000000', '#FFFFFF', '#FFD700'],
    description: 'Un gris neutro y elegante que combina con casi cualquier color.',
    uses: 'Ideal para diseños minimalistas, tecnología y decoración moderna.'
  },
  { 
    name: 'Negro Ébano', 
    hex: '#0C0C0C', 
    combinations: ['#FFFFFF', '#FFD700', '#808080'],
    description: 'Un negro profundo y sofisticado que representa elegancia y poder.',
    uses: 'Perfecto para diseños de lujo, moda formal y decoración contemporánea.'
  },
  { 
    name: 'Blanco Perla', 
    hex: '#FAF0E6', 
    combinations: ['#000000', '#808080', '#FFD700'],
    description: 'Un blanco suave y cálido que transmite pureza y serenidad.',
    uses: 'Ideal para diseños minimalistas, decoración clásica y moda elegante.'
  },
  { 
    name: 'Celeste Suave', 
    hex: '#B0E0E6', 
    combinations: ['#FFFFFF', '#FFD700', '#00008B'],
    description: 'Un celeste tranquilo y relajante que evoca calma y frescura.',
    uses: 'Perfecto para diseños de spa, decoración infantil y ambientes relajados.'
  },
  { 
    name: 'Turquesa Marino', 
    hex: '#30D5C8', 
    combinations: ['#FFFFFF', '#FFD700', '#808080'],
    description: 'Un turquesa vibrante y refrescante que simboliza el mar y la naturaleza.',
    uses: 'Ideal para diseños tropicales, moda veraniega y decoración playera.'
  },
  { 
    name: 'Rosa Pastel', 
    hex: '#FFD1DC', 
    combinations: ['#000000', '#808080', '#FFD700'],
    description: 'Un rosa suave y delicado que transmite dulzura y romanticismo.',
    uses: 'Perfecto para diseños femeninos, decoración infantil y eventos especiales.'
  },
  { 
    name: 'Beige Arena', 
    hex: '#D2B48C', 
    combinations: ['#000000', '#808080', '#8B4513'],
    description: 'Un beige cálido y terroso que evoca naturalidad y calma.',
    uses: 'Ideal para diseños rústicos, moda casual y decoración acogedora.'
  },
  { 
    name: 'Lavanda Claro', 
    hex: '#E6E6FA', 
    combinations: ['#800080', '#FFFFFF', '#FFD700'],
    description: 'Un lavanda suave y relajante que transmite tranquilidad y elegancia.',
    uses: 'Perfecto para diseños de bienestar, decoración moderna y moda femenina.'
  },
  { 
    name: 'Oliva Oscuro', 
    hex: '#556B2F', 
    combinations: ['#FFFFFF', '#000000', '#8B4513'],
    description: 'Un verde oliva profundo que evoca naturaleza y sofisticación.',
    uses: 'Ideal para diseños militares, moda casual y decoración rústica.'
  },
  { 
    name: 'Coral Intenso', 
    hex: '#FF6F61', 
    combinations: ['#FFFFFF', '#808080', '#FFD700'],
    description: 'Un coral vibrante y energético que llama la atención.',
    uses: 'Perfecto para diseños juveniles, moda veraniega y decoración moderna.'
  },
  { 
    name: 'Azul Profundo', 
    hex: '#191970', 
    combinations: ['#FFD700', '#FFFFFF', '#808080'],
    description: 'Un azul oscuro y misterioso que transmite profundidad y elegancia.',
    uses: 'Ideal para diseños corporativos, moda formal y decoración sofisticada.'
  },
  { 
    name: 'Verde Lima', 
    hex: '#32CD32', 
    combinations: ['#000000', '#808080', '#FFD700'],
    description: 'Un verde brillante y fresco que evoca energía y vitalidad.',
    uses: 'Perfecto para diseños deportivos, moda juvenil y decoración moderna.'
  },
  { 
    name: 'Rojo Granada', 
    hex: '#8B0000', 
    combinations: ['#FFFFFF', '#FFD700', '#808080'],
    description: 'Un rojo oscuro y sofisticado que transmite pasión y elegancia.',
    uses: 'Ideal para diseños de lujo, moda formal y decoración clásica.'
  },
  { 
    name: 'Azul Cobalto', 
    hex: '#0047AB', 
    combinations: ['#FFD700', '#FFFFFF', '#8B4513'],
    description: 'Un azul intenso y vibrante que evoca confianza y profesionalismo.',
    uses: 'Perfecto para diseños corporativos, branding y decoración moderna.'
  },
  { 
    name: 'Naranja Cobrizo', 
    hex: '#E97451', 
    combinations: ['#FFFFFF', '#FFD700', '#000000'],
    description: 'Un naranja terroso y cálido que transmite calidez y creatividad.',
    uses: 'Ideal para diseños otoñales, moda casual y decoración acogedora.'
  },
  { 
    name: 'Violeta Suave', 
    hex: '#D8BFD8', 
    combinations: ['#000000', '#FFFFFF', '#808080'],
    description: 'Un violeta claro y delicado que evoca romanticismo y tranquilidad.',
    uses: 'Perfecto para diseños femeninos, decoración vintage y eventos especiales.'
  },
  { 
    name: 'Cyan Neón', 
    hex: '#0FF0FC', 
    combinations: ['#000000', '#FFD700', '#FF4500'],
    description: 'Un cyan brillante y moderno que llama la atención.',
    uses: 'Ideal para diseños tecnológicos, publicidad y espacios modernos.'
  },
  { 
    name: 'Magenta Violeta', 
    hex: '#C71585', 
    combinations: ['#FFFFFF', '#808080', '#000000'],
    description: 'Un magenta profundo y elegante que transmite sofisticación y creatividad.',
    uses: 'Perfecto para diseños artísticos, moda elegante y decoración moderna.'
  },
  { 
    name: 'Marrón Rústico', 
    hex: '#A52A2A', 
    combinations: ['#FFFFFF', '#FFD700', '#008000'],
    description: 'Un marrón oscuro y terroso que evoca naturalidad y estabilidad.',
    uses: 'Ideal para diseños rústicos, moda otoñal y decoración hogareña.'
  },
  { 
    name: 'Gris Oscuro', 
    hex: '#A9A9A9', 
    combinations: ['#000000', '#FFFFFF', '#FFD700'],
    description: 'Un gris neutro y sofisticado que combina con casi cualquier color.',
    uses: 'Perfecto para diseños minimalistas, tecnología y decoración moderna.'
  },
  { 
    name: 'Negro Carvón', 
    hex: '#2F4F4F', 
    combinations: ['#FFFFFF', '#FFD700', '#808080'],
    description: 'Un negro profundo y misterioso que transmite elegancia y poder.',
    uses: 'Ideal para diseños de lujo, moda formal y decoración contemporánea.'
  },
  { 
    name: 'Blanco Nieve', 
    hex: '#FFFAFA', 
    combinations: ['#000000', '#808080', '#FFD700'],
    description: 'Un blanco puro y brillante que transmite limpieza y serenidad.',
    uses: 'Perfecto para diseños minimalistas, decoración clásica y moda elegante.'
  },
  { 
    name: 'Celeste Neón', 
    hex: '#00FFFF', 
    combinations: ['#000000', '#FFD700', '#00008B'],
    description: 'Un celeste brillante y moderno que llama la atención.',
    uses: 'Ideal para diseños tecnológicos, publicidad y espacios modernos.'
  },
  { 
    name: 'Turquesa Tropical', 
    hex: '#00CED1', 
    combinations: ['#FFFFFF', '#FFD700', '#808080'],
    description: 'Un turquesa vibrante y refrescante que simboliza el mar y la naturaleza.',
    uses: 'Perfecto para diseños tropicales, moda veraniega y decoración playera.'
  },
  { 
    name: 'Rosa Neón', 
    hex: '#FF69B4', 
    combinations: ['#000000', '#808080', '#FFD700'],
    description: 'Un rosa brillante y audaz que representa energía y creatividad.',
    uses: 'Ideal para diseños juveniles, moda atrevida y publicidad impactante.'
  },
  { 
    name: 'Beige Almendra', 
    hex: '#DEB887', 
    combinations: ['#000000', '#808080', '#8B4513'],
    description: 'Un beige cálido y natural que evoca calma y serenidad.',
    uses: 'Perfecto para diseños rústicos, moda casual y decoración acogedora.'
  },
  { 
    name: 'Lavanda Oscuro', 
    hex: '#967BB6', 
    combinations: ['#800080', '#FFFFFF', '#FFD700'],
    description: 'Un lavanda profundo y sofisticado que transmite elegancia y creatividad.',
    uses: 'Ideal para diseños artísticos, moda elegante y decoración moderna.'
  },
  { 
    name: 'Oliva Militar', 
    hex: '#808000', 
    combinations: ['#FFFFFF', '#000000', '#8B4513'],
    description: 'Un verde oliva profundo que evoca naturaleza y sofisticación.',
    uses: 'Perfecto para diseños militares, moda casual y decoración rústica.'
  },
  { 
    name: 'Coral Vivo', 
    hex: '#FF4040', 
    combinations: ['#FFFFFF', '#808080', '#FFD700'],
    description: 'Un coral vibrante y energético que llama la atención.',
    uses: 'Ideal para diseños juveniles, moda veraniega y decoración moderna.'
  },
  { 
    name: 'Azul Gélido', 
    hex: '#5F9EA0', 
    combinations: ['#FFD700', '#FFFFFF', '#808080'],
    description: 'Un azul frío y relajante que transmite calma y serenidad.',
    uses: 'Perfecto para diseños de spa, decoración moderna y ambientes relajados.'
  },
  { 
    name: 'Verde Musgo', 
    hex: '#8A9A5B', 
    combinations: ['#000000', '#808080', '#FFD700'],
    description: 'Un verde terroso y natural que evoca tranquilidad y conexión con la naturaleza.',
    uses: 'Ideal para diseños ecológicos, moda casual y decoración rústica.'
  },
  { 
    name: 'Rojo Rubí', 
    hex: '#9B111E', 
    combinations: ['#FFFFFF', '#FFD700', '#808080'],
    description: 'Un rojo oscuro y sofisticado que transmite pasión y elegancia.',
    uses: 'Perfecto para diseños de lujo, moda formal y decoración clásica.'
  },
  { 
    name: 'Azul Eléctrico', 
    hex: '#7DF9FF', 
    combinations: ['#FFD700', '#FFFFFF', '#8B4513'],
    description: 'Un azul brillante y moderno que llama la atención.',
    uses: 'Ideal para diseños tecnológicos, publicidad y espacios modernos.'
  },
  { 
    name: 'Naranja Mandarina', 
    hex: '#FF8C00', 
    combinations: ['#FFFFFF', '#FFD700', '#000000'],
    description: 'Un naranja vibrante y lleno de energía que evoca alegría y vitalidad.',
    uses: 'Perfecto para diseños publicitarios, moda juvenil y decoración moderna.'
  },
  { 
    name: 'Violeta Lavanda', 
    hex: '#B57EDC', 
    combinations: ['#000000', '#FFFFFF', '#808080'],
    description: 'Un violeta suave y relajante que transmite tranquilidad y elegancia.',
    uses: 'Ideal para diseños de bienestar, decoración moderna y moda femenina.'
  },
  { 
    name: 'Cyan Aguamarina', 
    hex: '#7FFFD4', 
    combinations: ['#000000', '#FFD700', '#FF4500'],
    description: 'Un cyan brillante y refrescante que evoca el mar y la naturaleza.',
    uses: 'Perfecto para diseños tropicales, moda veraniega y decoración playera.'
  },
  { 
    name: 'Magenta Oscuro', 
    hex: '#8B008B', 
    combinations: ['#FFFFFF', '#808080', '#000000'],
    description: 'Un magenta profundo y sofisticado que transmite elegancia y creatividad.',
    uses: 'Ideal para diseños artísticos, moda elegante y decoración moderna.'
  },
  { 
    name: 'Marrón Caoba', 
    hex: '#800000', 
    combinations: ['#FFFFFF', '#FFD700', '#008000'],
    description: 'Un marrón oscuro y rico que evoca lujo y sofisticación.',
    uses: 'Perfecto para diseños de lujo, moda formal y decoración clásica.'
  },
  { 
    name: 'Gris Ceniza', 
    hex: '#BEBEBE', 
    combinations: ['#000000', '#FFFFFF', '#FFD700'],
    description: 'Un gris neutro y moderno que combina con casi cualquier color.',
    uses: 'Ideal para diseños minimalistas, tecnología y decoración moderna.'
  },
  { 
    name: 'Rojo Fuego', 
    hex: '#E25822', 
    combinations: ['#FFFFFF', '#000000', '#FFD700'],
    description: 'Un rojo intenso y vibrante que evoca pasión y energía.',
    uses: 'Perfecto para diseños publicitarios, moda atrevida y decoración moderna.'
  },
  { 
    name: 'Azul Zafiro', 
    hex: '#0F52BA', 
    combinations: ['#FFFFFF', '#FFD700', '#808080'],
    description: 'Un azul profundo y majestuoso que transmite confianza y serenidad.',
    uses: 'Ideal para diseños corporativos, branding y espacios relajantes.'
  },
  { 
    name: 'Verde Bosque', 
    hex: '#228B22', 
    combinations: ['#FFFFFF', '#8B4513', '#FFD700'],
    description: 'Un verde oscuro y natural que evoca tranquilidad y conexión con la naturaleza.',
    uses: 'Perfecto para diseños ecológicos, moda casual y decoración rústica.'
  },
  { 
    name: 'Amarillo Sol', 
    hex: '#FFCC00', 
    combinations: ['#000000', '#808080', '#008000'],
    description: 'Un amarillo brillante y energético que transmite alegría y vitalidad.',
    uses: 'Ideal para diseños publicitarios, moda juvenil y decoración moderna.'
  },
  { 
    name: 'Naranja Otoño', 
    hex: '#D2691E', 
    combinations: ['#FFFFFF', '#000000', '#8B4513'],
    description: 'Un naranja terroso y cálido que evoca calidez y creatividad.',
    uses: 'Perfecto para diseños otoñales, moda casual y decoración acogedora.'
  },
  { 
    name: 'Violeta Uva', 
    hex: '#5D3FD3', 
    combinations: ['#FFFFFF', '#FFD700', '#000000'],
    description: 'Un violeta profundo y sofisticado que transmite elegancia y creatividad.',
    uses: 'Ideal para diseños artísticos, moda elegante y decoración moderna.'
  },
  { 
    name: 'Cyan Caribeño', 
    hex: '#00B7EB', 
    combinations: ['#000000', '#808080', '#FF4500'],
    description: 'Un cyan brillante y refrescante que evoca el mar y la naturaleza.',
    uses: 'Perfecto para diseños tropicales, moda veraniega y decoración playera.'
  },
  { 
    name: 'Magenta Encendido', 
    hex: '#FF007F', 
    combinations: ['#FFFFFF', '#808080', '#000000'],
    description: 'Un magenta vibrante y audaz que representa energía y creatividad.',
    uses: 'Ideal para diseños juveniles, moda atrevida y publicidad impactante.'
  },
  { 
    name: 'Marrón Cedro', 
    hex: '#A45A52', 
    combinations: ['#FFFFFF', '#FFD700', '#008000'],
    description: 'Un marrón cálido y acogedor que evoca naturalidad y estabilidad.',
    uses: 'Perfecto para diseños rústicos, moda otoñal y decoración hogareña.'
  },
  { 
    name: 'Gris Cemento', 
    hex: '#8B8B8B', 
    combinations: ['#000000', '#FFFFFF', '#FFD700'],
    description: 'Un gris neutro y moderno que combina con casi cualquier color.',
    uses: 'Ideal para diseños minimalistas, tecnología y decoración moderna.'
  },
  { 
    name: 'Negro Ónix', 
    hex: '#3D3D3D', 
    combinations: ['#FFFFFF', '#FFD700', '#808080'],
    description: 'Un negro profundo y sofisticado que transmite elegancia y poder.',
    uses: 'Perfecto para diseños de lujo, moda formal y decoración contemporánea.'
  },
  { 
    name: 'Blanco Marfil', 
    hex: '#FFFFF0', 
    combinations: ['#000000', '#808080', '#FFD700'],
    description: 'Un blanco suave y cálido que transmite pureza y serenidad.',
    uses: 'Ideal para diseños minimalistas, decoración clásica y moda elegante.'
  },
  { 
    name: 'Celeste Marino', 
    hex: '#4682B4', 
    combinations: ['#000000', '#FFD700', '#00008B'],
    description: 'Un celeste profundo y relajante que evoca el mar y la tranquilidad.',
    uses: 'Perfecto para diseños náuticos, moda veraniega y decoración playera.'
  },
  { 
    name: 'Turquesa Claro', 
    hex: '#00A5CF', 
    combinations: ['#FFFFFF', '#FFD700', '#808080'],
    description: 'Un turquesa brillante y refrescante que simboliza el mar y la naturaleza.',
    uses: 'Ideal para diseños tropicales, moda veraniega y decoración playera.'
  },
  { 
    name: 'Rosa Coralino', 
    hex: '#F88379', 
    combinations: ['#000000', '#808080', '#FFD700'],
    description: 'Un rosa cálido y vibrante que transmite energía y alegría.',
    uses: 'Perfecto para diseños juveniles, moda veraniega y decoración moderna.'
  },
  { 
    name: 'Beige Suave', 
    hex: '#F5DEB3', 
    combinations: ['#000000', '#808080', '#8B4513'],
    description: 'Un beige cálido y natural que evoca calma y serenidad.',
    uses: 'Ideal para diseños rústicos, moda casual y decoración acogedora.'
  },
  { 
    name: 'Lavanda Profundo', 
    hex: '#916BBF', 
    combinations: ['#800080', '#FFFFFF', '#FFD700'],
    description: 'Un lavanda profundo y sofisticado que transmite elegancia y creatividad.',
    uses: 'Perfecto para diseños artísticos, moda elegante y decoración moderna.'
  },
  { 
    name: 'Oliva Pasto', 
    hex: '#738678', 
    combinations: ['#FFFFFF', '#000000', '#8B4513'],
    description: 'Un verde oliva suave y natural que evoca tranquilidad y conexión con la naturaleza.',
    uses: 'Ideal para diseños ecológicos, moda casual y decoración rústica.'
  },
  { 
    name: 'Coral Tropical', 
    hex: '#FA8072', 
    combinations: ['#FFFFFF', '#808080', '#FFD700'],
    description: 'Un coral vibrante y energético que llama la atención.',
    uses: 'Perfecto para diseños juveniles, moda veraniega y decoración moderna.'
  },
  { 
    name: 'Azul Eléctrico', 
    hex: '#007FFF', 
    combinations: ['#FFD700', '#FFFFFF', '#808080'],
    description: 'Un azul brillante y moderno que llama la atención.',
    uses: 'Ideal para diseños tecnológicos, publicidad y espacios modernos.'
  },
  { 
    name: 'Verde Esmeralda', 
    hex: '#50C878', 
    combinations: ['#000000', '#808080', '#FFD700'],
    description: 'Un verde vibrante y refrescante que simboliza naturaleza y crecimiento.',
    uses: 'Excelente para diseños ecológicos, moda y decoración de interiores.'
  },
  { 
    name: 'Rojo Sangre', 
    hex: '#8A0707', 
    combinations: ['#FFFFFF', '#FFD700', '#808080'],
    description: 'Un rojo oscuro y sofisticado que transmite pasión y elegancia.',
    uses: 'Perfecto para diseños de lujo, moda formal y decoración clásica.'
  },
  { 
    name: 'Azul Ultramar', 
    hex: '#4166F5', 
    combinations: ['#FFD700', '#FFFFFF', '#8B4513'],
    description: 'Un azul intenso y vibrante que evoca confianza y profesionalismo.',
    uses: 'Ideal para diseños corporativos, branding y decoración moderna.'
  },
  { 
    name: 'Naranja Solar', 
    hex: '#E25822', 
    combinations: ['#FFFFFF', '#FFD700', '#000000'],
    description: 'Un naranja vibrante y lleno de energía que evoca alegría y vitalidad.',
    uses: 'Perfecto para diseños publicitarios, moda juvenil y decoración moderna.'
  },
  { 
    name: 'Violeta Neón', 
    hex: '#DDA0DD', 
    combinations: ['#000000', '#FFFFFF', '#808080'],
    description: 'Un violeta brillante y moderno que llama la atención.',
    uses: 'Ideal para diseños tecnológicos, publicidad y espacios modernos.'
  },
  { 
    name: 'Cyan Fluorescente', 
    hex: '#00FFFF', 
    combinations: ['#000000', '#FFD700', '#FF4500'],
    description: 'Un cyan brillante y moderno que llama la atención.',
    uses: 'Perfecto para diseños tecnológicos, publicidad y espacios modernos.'
  },
  { 
    name: 'Magenta Neón', 
    hex: '#FF00FF', 
    combinations: ['#FFFFFF', '#808080', '#000000'],
    description: 'Un magenta brillante y audaz que representa energía y creatividad.',
    uses: 'Ideal para diseños juveniles, moda atrevida y publicidad impactante.'
  },
  { 
    name: 'Marrón Trigo', 
    hex: '#DAA520', 
    combinations: ['#FFFFFF', '#FFD700', '#008000'],
    description: 'Un marrón cálido y acogedor que evoca naturalidad y estabilidad.',
    uses: 'Perfecto para diseños rústicos, moda otoñal y decoración hogareña.'
  },
  { 
    name: 'Gris Metalizado', 
    hex: '#A9A9A9', 
    combinations: ['#000000', '#FFFFFF', '#FFD700'],
    description: 'Un gris neutro y moderno que combina con casi cualquier color.',
    uses: 'Ideal para diseños minimalistas, tecnología y decoración moderna.'
  }
]);

const selectedColor = ref(null);

const selectColor = (color) => {
  selectedColor.value = color;
};
</script>

<style>
.shadow-lg {
  transition: box-shadow 0.3s ease-in-out;
}
.shadow-lg:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>