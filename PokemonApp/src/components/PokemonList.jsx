import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

function PokemonList({ teams, setTeams }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [gekozenTeam, setGekozenTeam] = useState("");

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

      <div className="pokemon-grid">
        {pokemons.map((pokemon) => {
          const id = pokemon.url.split("/").at(-2);
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <PokemonCard key={pokemon.name} name={pokemon.name} image={image} />
          );
        })}
      </div>
    </div>
  );
}

export default PokemonList;
