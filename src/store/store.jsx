import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import { pokemonApi } from './slices/pokemonApi';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
});