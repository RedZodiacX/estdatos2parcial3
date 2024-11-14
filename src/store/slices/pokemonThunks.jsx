import axios from 'axios';
import { startLoadingPokemon, setPokemon, setError } from './pokemonSlice';

export const fetchPokemon = (pokemonName) => async (dispatch) => {
    dispatch(startLoadingPokemon());
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        dispatch(setPokemon(response.data));
    } catch (error) {
        dispatch(setError('Failed to fetch Pokémon data'));
    }
};