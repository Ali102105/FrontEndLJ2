import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API fout");
        }
        return response.json();
      })
      .then((data) => setPokemons(data.results))
      .catch(() => setError("Kon de Pokémon niet laden."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Pokémon lijst</h1>

      {loading && <p>Pokémon laden...</p>}
      {error && <p>{error}</p>}

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
