<template>
  <div id="TheBackground">
    <div class="pokemon-container grid grid-cols-4 gap-5 justify-items-center place-items-center">
      <div v-for="id in pokemonIds" :key="id" class="pokemon-item w-5/6 h-full flex items-center justify-around bg-green-200 flex-col rounded-xl">
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`" class="h-1/2 flex justify-center items-center w-full" :alt="'Pokemon ' + id">
        <p class="pokemon-name text-center">{{ getPokemonName(id) }}</p>
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
const pokemonData = ref<any[]>([]);

// Fetch Pokemon data on component mount
onMounted(async () => {
  if (props.showPokemon && props.pokemonIds.length > 0) {
    try {
      const data = await showinfo(); // Asumiendo que showinfo() obtiene datos
      pokemonData.value = data; // Suponiendo que data contiene la información de cada Pokémon
    } catch (error) {
      console.error('Failed to fetch Pokemon data:', error);
    }
  }
});

// Function to get Pokemon name based on ID
const getPokemonName = (id: number): string => {
  const pokemon = pokemonData.value.find(p => p.id === id);
  return pokemon ? pokemon.name : `Pokemon ${id}`; // Si el nombre no está disponible, se muestra un texto genérico
};
</script>






<!-- 






<template>
  <div id="TheBackground">
    <div class="pokemon-container grid grid-cols-4 gap-5 justify-items-center place-items-center">
      <div v-for="id in pokemonIds" :key="id" class="pokemon-item w-5/6 h-full flex items-center justify-around bg-green-200 flex-col rounded-xl">
        <img :src="getPokemonImage(id)" class="h-1/2 flex justify-center items-center w-full" :alt="'Pokemon ' + id">
        <p class="pokemon-name text-center">{{ getPokemonName(id) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import { fetchPokemon } from '../api/api'; // Ajusta la ruta según la estructura de tu proyecto

// Define props
const props = defineProps<{
  pokemonIds: number[],
  showPokemon: boolean
}>();

// Data properties
const pokemonData = ref<any[]>([]);

// Fetch Pokemon data on component mount
onMounted(async () => {
  if (props.showPokemon) {
    try {
      const initialData = await fetchPokemon(); // Asumiendo que fetchPokemon() obtiene los datos iniciales de la API
      pokemonData.value = initialData.results; // Suponiendo que initialData contiene los resultados de los primeros Pokémon
    } catch (error) {
      console.error('Failed to fetch initial Pokemon data:', error);
    }
  }
});

// Function to get Pokemon name based on ID
const getPokemonName = (id: number): string => {
  const pokemon = pokemonData.value.find(p => getPokemonIdFromUrl(p.url) === id);
  return pokemon ? pokemon.name : `Pokemon ${id}`; // Si el nombre no está disponible, se muestra un texto genérico
};

// Function to get Pokemon image URL based on ID
const getPokemonImage = (id: number): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
};

// Function to extract Pokemon ID from URL
const getPokemonIdFromUrl = (url: string): number => {
  const matches = url.match(/\/(\d+)\/$/);
  if (matches && matches.length > 1) {
    return parseInt(matches[1]);
  } else {
    return 0;
  }
};
</script>

<style scoped>
/* Estilos CSS según sea necesario */
.pokemon-item {
  /* Estilos para cada elemento de Pokémon */
  padding: 10px;
  text-align: center;
}
.pokemon-item img {
  max-width: 100px; /* Ajusta el tamaño máximo de la imagen */
  max-height: 100px;
}
.pokemon-name {
  margin-top: 5px;
  font-weight: bold;
}
</style> -->
