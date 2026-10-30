import PokemonList from '../components/PokemonList'

function Pokemon({ teams, setTeams }) {
    return(
        <>
        <PokemonList teams={teams} setTeams={setTeams} />
        </>
    );
}

export default Pokemon;