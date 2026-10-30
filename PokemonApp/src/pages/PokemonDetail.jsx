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

  if (error) {
    return <div className="page-panel"><p>{error}</p></div>;
  }

  if (!pokemon || pokemon.name !== name) {
    return <div className="page-panel"><p>Pokémon laden...</p></div>;
  }

  return (
    <div className="page-panel detail-panel">
      <div className="detail-header">
        <h1>{pokemon.name}</h1>

        <Link className="back-button" to="/pokemon">
          GO BACK
        </Link>
      </div>

      <div className="detail-body">
        <div className="detail-image">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        </div>

        <div className="detail-stats">
          <p>
            <span>TYPE :</span>
            <strong>
              {pokemon.types.map((item) => item.type.name).join(", ")}
            </strong>
          </p>

          <p>
            <span>WEIGHT :</span>
            <strong>{pokemon.weight / 10} KG</strong>
          </p>

          <p>
            <span>HEIGHT :</span>
            <strong>{pokemon.height / 10} M</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
