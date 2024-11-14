import React, { useState } from 'react';
import { useGetPokemonByNameQuery } from '../store/slices/pokemonApi';

const PokemonApp = () => {
    const [pokemonName, setPokemonName] = useState('charizard');
    const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(pokemonName);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>PokéDex</h1>
            <input
                type="text"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
                placeholder="Nombre del Pokémon"
            />
            <button onClick={() => setPokemonName(pokemonName)} disabled={isLoading}>
                {isLoading ? 'Cargando...' : 'Buscar'}
            </button>

            {error && <p>No se encontro información del Pokémon</p>}
            {pokemon && (
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <p>Altura: {pokemon.height}</p>
                    <p>Peso: {pokemon.weight}</p>
                </div>
            )}
        </div>
    );
};

export default PokemonApp;