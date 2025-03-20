import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pokemonId, setPokemonId] = useState(null);

  const simulateKey = (key) => {
    const e = new KeyboardEvent('keydown', { key: key });
    window.dispatchEvent(e);
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      try {
        setLoading(true);
        setError(null);

        // Calculate the new ID based on the key pressed
        const newId = e.key === 'ArrowLeft' ? pokemonId - 1 : pokemonId + 1;

        // Fetch the Pokémon data for the new ID
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${newId}`);
        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();

        // Update the state with the new Pokémon and ID
        setPokemon(data);
        setPokemonId(newId);
      } catch (error) {
        setError(`Erro ao procurar Pokemon: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRandomizer = async () => {
    try {
      setLoading(true);
      setError(null);

      const randomId = Math.floor(Math.random() * 1024) + 1;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();
      setPokemon(data);
      setPokemonId(randomId);
    } catch (error) {
      setError(`Erro ao procurar Pokemon: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pokemonId]);

  return (
    <div className="App">
      <div className="screen-container">
        {loading ? (
          <p>Loading...</p>
        ) : pokemon ? (
          <img style={{color: 'white'}} src={pokemon.sprites?.front_default} alt={pokemon.name ?? "???"} />
        ) : (
          <p>???</p>
        )}
      </div>
      <button onClick={handleRandomizer} disabled={loading}>
        {loading ? 'Procurando Pokemon' : 'Randomizar Pokemon'}
      </button>
      {error && <p className="error-message">{error}</p>}
      <div className="buttons-container">
        <button onClick={() => simulateKey('ArrowLeft')} disabled={pokemon == null || loading}>
          ◀
        </button>
        <button onClick={() => simulateKey('ArrowRight')} disabled={pokemon == null || loading}>
          ▶
        </button>
      </div>
    </div>
  );
}

export default App;