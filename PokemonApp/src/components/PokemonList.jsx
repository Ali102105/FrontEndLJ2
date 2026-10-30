import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";

function PokemonList({ teams, setTeams, favorieten, setFavorieten }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [gekozenTeam, setGekozenTeam] = useState("");
  const [alleenFavorieten, setAlleenFavorieten] = useState(false);

  function favorietWisselen(naam) {
    if (favorieten.includes(naam)) {
      setFavorieten(favorieten.filter((pokemon) => pokemon !== naam));
    } else {
      setFavorieten([...favorieten, naam]);
    }
  }

  function pokemonToevoegen(naam) {
    if (gekozenTeam === "") return;

    setTeams(teams.map((team) => {
      if (team.id !== Number(gekozenTeam)) return team;
      if (team.pokemons.includes(naam)) return team;

      return {
        ...team,
        pokemons: [...team.pokemons, naam]
      };
    }));
  }

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

  const zichtbarePokemons = alleenFavorieten
    ? pokemons.filter((pokemon) => favorieten.includes(pokemon.name))
    : pokemons;

  return (
    <div className="page-panel pokemon-panel">
      <h1>Pokémon lijst</h1>

      {loading && <p>Pokémon laden...</p>}
      {error && <p>{error}</p>}

      <div className="list-controls">
        {teams.length === 0 ? (
          <p>Maak eerst een team aan.</p>
        ) : (
          <label htmlFor="teamKiezen">
            Kies een team:{" "}
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
          </label>
        )}

        <label>
          <input
            type="checkbox"
            checked={alleenFavorieten}
            onChange={(event) => setAlleenFavorieten(event.target.checked)}
          />
          Alleen favorieten
        </label>

        <Link className="small-link" to="/teams">
          Mijn teams
        </Link>
      </div>

      {alleenFavorieten && !loading && zichtbarePokemons.length === 0 && (
        <p>Je hebt nog geen favorieten.</p>
      )}

      <div className="pokemon-grid">
        {zichtbarePokemons.map((pokemon) => {
          const id = pokemon.url.split("/").at(-2);
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              image={image}
              onAdd={() => pokemonToevoegen(pokemon.name)}
              disabled={!gekozenTeam}
              isFavorite={favorieten.includes(pokemon.name)}
              onFavorite={() => favorietWisselen(pokemon.name)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PokemonList;
