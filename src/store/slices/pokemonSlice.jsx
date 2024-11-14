import { createSlice } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemonData: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        startLoadingPokemon: (state) => {
            state.isLoading = true;
        },
        setPokemon: (state, action) => {
            state.pokemonData = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});

export const { startLoadingPokemon, setPokemon, setError } = pokemonSlice.actions;
export default pokemonSlice.reducer;