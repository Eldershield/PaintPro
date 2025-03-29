<template>
    <div class="inspiration-section">
      <h2 class="section-title">Inspiración 🌈</h2>
  
      <!-- Paletas de colores recomendadas -->
      <div class="palettes">
        <h3 class="subtitle">Paletas de colores recomendadas</h3>
        <div class="palette-grid">
          <div v-for="(palette, index) in colorPalettes" :key="index" class="palette-card">
            <div class="colors">
              <div
                v-for="(color, i) in palette.colors"
                :key="i"
                class="color-box"
                :style="{ backgroundColor: color }"
              ></div>
            </div>
            <p class="palette-name">{{ palette.name }}</p>
          </div>
        </div>
      </div>
  
      <!-- Tendencias en diseño de interiores -->
      <div class="trends">
        <h3 class="subtitle">Tendencias en diseño de interiores</h3>
        <div class="trend-grid">
          <div v-for="(trend, index) in interiorTrends" :key="index" class="trend-card">
            <img :src="trend.image" :alt="trend.name" class="trend-image" />
            <div class="trend-info">
              <p class="trend-name">{{ trend.name }}</p>
              <p class="trend-description">{{ trend.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Paletas de colores recomendadas
        colorPalettes: [
          {
            name: "Tierra y Naturaleza",
            colors: ["#A68A64", "#6B8E23", "#8B4513", "#F4A460"],
          },
          {
            name: "Azules Relajantes",
            colors: ["#1E90FF", "#87CEEB", "#4682B4", "#B0E0E6"],
          },
          {
            name: "Moderno y Elegante",
            colors: ["#2F4F4F", "#708090", "#C0C0C0", "#F5F5F5"],
          },
          {
            name: "Vibrante y Alegre",
            colors: ["#FF4500", "#FFD700", "#FF69B4", "#32CD32"],
          },
        ],
        
  
        // Tendencias en diseño de interiores
        interiorTrends: [
          {
            name: "Minimalismo",
            description: "Menos es más. Espacios limpios y funcionales.",
            image: "/src/assets/minimalista.jpg",
          },
          {
            name: "Boho Chic",
            description: "Colores vibrantes y texturas naturales.",
            image: "/src/assets/boho.jpg",
          },
          {
            name: "Industrial",
            description: "Materiales crudos como metal y madera.",
            image: "/src/assets/industrial.jpg",
          },
          {
            name: "Automotriz",
            description: "Disponibles para vehiculos.",
            image: "/src/assets/auto.jpg",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .inspiration-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  .section-title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .subtitle {
    font-size: 22px;
    font-weight: 600;
    color: #444;
    margin-bottom: 20px;
  }
  
  /* Estilos para las paletas de colores */
  .palette-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .palette-card {
    background: #f9f9f9;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .palette-card:hover {
    transform: translateY(-5px);
  }
  
  .colors {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
  }
  
  .color-box {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
  
  .palette-name {
    font-size: 16px;
    font-weight: 500;
    color: #333;
    text-align: center;
  }
  
  /* Estilos para las tendencias en diseño de interiores */
  .trend-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .trend-card {
    background: #f9f9f9;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .trend-card:hover {
    transform: translateY(-5px);
  }
  
  .trend-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .trend-info {
    padding: 15px;
  }
  
  .trend-name {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
  }
  
  .trend-description {
    font-size: 14px;
    color: #666;
  }
  </style>