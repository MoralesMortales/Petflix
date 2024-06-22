<template>
  <div>
    <h1>Bienvenido al Home </h1>
    <ul>
      <li v-for="pokemon in showinfo.length" :key="pokemon">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>

  <pokeImg/>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { showinfo } from '@/api/api'

// Define a reactive variable to store the list of Pokémon
const pokemonList = ref([])

// Fetch Pokémon data when the component is mounted
onMounted(async () => {
  try {
    const data = await showinfo()
    pokemonList.value = data
  } catch (error) {
    console.error('Error fetching Pokémon:', error)
  }
})
</script>
