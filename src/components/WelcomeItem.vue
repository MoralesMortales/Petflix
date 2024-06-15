<script>
import {fetchPokemon} from '@/api/api'
import { ref, onMounted } from 'vue'
fetchPokemon()

const pokemonList = ref([])

onMounted(() => {
  fetchPokemon()
    .then(data => {
      pokemonList.value = data  // Asigna los datos obtenidos a la variable reactiva
    })
    .catch(error => {
      console.error('Error al obtener los Pokémon:', error)
    })
})

</script>