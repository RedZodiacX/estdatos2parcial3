import React from 'react';
import PokemonApp from './components/pokemonApp.jsx'
import TodoApp from './components/todoApp.jsx';

const App = () => {
  return (
    <div >
      <TodoApp />
      <hr />
      <PokemonApp />
    </div>
  );
};

export default App;