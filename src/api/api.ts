import axios from "axios"

const ref = "https://pokeapi.co/api/v2/pokemon"

export const pokepokemon = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"    
})

export const fetchPokemon = async () => {
    const res= await pokepokemon.get('/');
    console.log(res.data); 
}
    
        
       