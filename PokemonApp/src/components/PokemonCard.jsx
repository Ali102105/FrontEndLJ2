import { Link } from "react-router-dom";

function PokemonCard({ name, image, onAdd, disabled, isFavorite, onFavorite }) {
  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${name}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </Link>

      <button onClick={onAdd} disabled={disabled}>
        Toevoegen aan team
      </button>

      <button onClick={onFavorite}>
        {isFavorite ? "Favoriet verwijderen" : "Favoriet maken"}
      </button>
    </div>
  );
}

export default PokemonCard;
