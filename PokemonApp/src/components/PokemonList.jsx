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

      {teams.length === 0 ? (
        <p>Maak eerst een team aan op de Teams-pagina.</p>
      ) : (
        <div>
          <label htmlFor="teamKiezen">Kies een team: </label>

          <select
            id="teamKiezen"
            value={gekozenTeam}
            onChange={(event) => setGekozenTeam(event.target.value)}
          >
            <option value="">Selecteer een team</option>

            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.naam}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="pokemon-grid">
        {pokemons.map((pokemon) => {
          const id = pokemon.url.split("/").at(-2);
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <PokemonCard key={pokemon.name} name={pokemon.name} image={image} onAdd={() => pokemonToevoegen(pokemon.name)} disabled={!gekozenTeam}/>
          );
        })}
      </div>
    </div>
  );
}

function pokemonToevoegen(naam) {
  if (gekozenTeam === "") return;

  setTeams(
    teams.map((team) => {
      if (team.id !== Number(gekozenTeam)) return team;
      if (team.pokemons.includes(naam)) return team;

      return {
        ...team,
        pokemons: [...team.pokemons, naam],
      };
    }),
  );
}

export default PokemonList;
