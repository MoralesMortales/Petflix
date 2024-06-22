<template>
  <div id="app">
    <PokemonComponent :pokemonIds="pokemonIds" :showPokemon="true" />
  </div>
</template>

<script setup lang="ts">
import PokemonComponent from './components/pokeImg.vue'; // Ajusta la ruta según la ubicación real de tu componente

// Define los pokemonIds (ejemplo de 1300 elementos)
const pokemonIds = Array.from({ length: 1300 }, (_, index) => index + 1);
</script>

<style>
/* Estilos adicionales para el cuerpo de la aplicación si es necesario */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
