import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/pokemon';

export const pokepokemon = axios.create({
    baseURL
});

export const showinfo = async () => {
    try {
        const res = await pokepokemon.get('/');
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        throw error;
    }
};
