<template>
    <div id="TheBackground">
      <div class="pokemon-container grid grid-cols-4 gap-5 justify-items-center place-items-center">
        <div v-for="id in pokemonIds" :key="id" class="pokemon-item w-5/6 h-full flex items-center justify-center bg-green-200 flex-col rounded-xl">
          <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`" class="h-1/2 flex justify-center items-center w-full" :alt="'Pokemon ' + id">
          <p class="pokemon-name text-center">Pokemon {{ id }}</p>
      </div>
      </div>
    </div>
  </template>


  <script setup lang="ts">
  import { ref, onMounted, defineProps } from 'vue';
  import { showinfo } from '../api/api'; // Ajusta la ruta según la estructura de tu proyecto
  // Define props
  const props = defineProps<{
    pokemonIds: number[],
    showPokemon: boolean
  }>();
  
  // Data properties
  const images = ref<string[]>([]);
  
  // Fetch Pokemon data on component mount
  onMounted(async () => {
    if (props.showPokemon) {
      try {
        const data = await showinfo(); // Asumiendo que showinfo() obtiene datos
        // Asumiendo que showinfo() devuelve datos en un formato donde puedes extraer URLs de imágenes
        const imageUrls = props.pokemonIds.map(id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`);
        images.value = imageUrls;
      } catch (error) {
        console.error('Failed to fetch Pokemon data:', error);
      }
    }
  });
  </script>
  