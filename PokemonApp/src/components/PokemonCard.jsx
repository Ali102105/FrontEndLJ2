import { Link } from "react-router-dom";

function PokemonCard({ name, image }) {
  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${name}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </Link>
    </div>
  );
}

export default PokemonCard;
