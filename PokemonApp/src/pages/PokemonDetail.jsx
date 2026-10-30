import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Pokémon niet gevonden");
        }
        return response.json();
      })
      .then((data) => setPokemon(data))
      .catch(() => setError("Kon deze Pokémon niet laden."));
  }, [name]);

  if (error) return <p>{error}</p>;
  if (!pokemon || pokemon.name !== name) {
    return <p>Pokémon laden...</p>;
  }

  return (
    <div>
      <Link to="/pokemon">Terug naar Pokémon</Link>

      <h1>{pokemon.name}</h1>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <p>
        Type: {pokemon.types.map((item) => item.type.name).join(", ")}
      </p>

      <p>Lengte: {pokemon.height / 10} meter</p>
      <p>Gewicht: {pokemon.weight / 10} kg</p>
    </div>
  );
}

export default PokemonDetail;
