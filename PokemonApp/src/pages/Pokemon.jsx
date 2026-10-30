import PokemonList from '../components/PokemonList'

function Pokemon({ teams, setTeams, favorieten, setFavorieten }) {
    return(
        <>
        <PokemonList teams={teams} setTeams={setTeams} favorieten={favorieten} setFavorieten={setFavorieten}/>
        </>
    );
}

export default Pokemon;