<template>
  <div class="paint-calculator">
    <h2 class="title">Calculadora de Pintura 🎨</h2>
    <div class="inputs">
      <!-- Número de paredes -->
      <label>Número de paredes:</label>
      <input v-model.number="numWalls" type="number" min="1" placeholder="Ej: 4" />

      <!-- Alto de la pared -->
      <label>Alto de la pared (m):</label>
      <input v-model.number="height" type="number" min="0" placeholder="Ej: 2.5" />

      <!-- Ancho de la pared -->
      <label>Ancho de la pared (m):</label>
      <input v-model.number="width" type="number" min="0" placeholder="Ej: 4" />

      <!-- Número de manos de pintura -->
      <label>Número de manos de pintura:</label>
      <input v-model.number="coats" type="number" min="1" placeholder="Ej: 2" />

      <!-- Rendimiento de la pintura -->
      <label>Rendimiento (m² por litro):</label>
      <input v-model.number="coverage" type="number" min="1" placeholder="Ej: 10" />

      <!-- Botón de cálculo -->
      <button @click="calculatePaint">Calcular</button>
    </div>

    <!-- Resultado -->
    <p v-if="paintNeeded !== null" class="result">
      Necesitas aproximadamente <strong>{{ paintNeeded.toFixed(2) }}</strong> litros de pintura. 🖌️
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numWalls: 1, // Número de paredes
      height: null, // Alto de la pared
      width: null, // Ancho de la pared
      coats: 1, // Número de manos de pintura
      coverage: 10, // Rendimiento de la pintura (m² por litro)
      paintNeeded: null, // Litros de pintura necesarios
    };
  },
  methods: {
    calculatePaint() {
      if (
        this.numWalls > 0 &&
        this.height > 0 &&
        this.width > 0 &&
        this.coats > 0 &&
        this.coverage > 0
      ) {
        const area = this.numWalls * this.height * this.width; // Área total
        this.paintNeeded = (area * this.coats) / this.coverage; // Litros necesarios
      } else {
        this.paintNeeded = null;
      }
    },
  },
};
</script>

<style scoped>
.paint-calculator {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  font-size: 14px;
  font-weight: 500;
  color: #555;
  text-align: left;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

button {
  background: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #0056b3;
}

.result {
  margin-top: 20px;
  font-size: 18px;
  color: #333;
}

.result strong {
  color: #007bff;
}
</style>