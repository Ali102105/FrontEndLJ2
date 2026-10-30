import { useState } from "react";

function Teams({ teams, setTeams }) {
  const [teamNaam, setTeamNaam] = useState("");

  function teamToevoegen(event) {
    event.preventDefault();

    if (teamNaam.trim() === "") return;

    const nieuwTeam = {
      id: Date.now(),
      naam: teamNaam.trim(),
      pokemons: []
    };

    setTeams([...teams, nieuwTeam]);
    setTeamNaam("");
  }

  function teamVerwijderen(id) {
    setTeams(teams.filter((team) => team.id !== id));
  }

  return (
    <div>
      <h1>Teams</h1>

      <form onSubmit={teamToevoegen}>
        <input
          type="text"
          placeholder="Naam van je team"
          value={teamNaam}
          onChange={(event) => setTeamNaam(event.target.value)}
        />

        <button type="submit">
          Team aanmaken
        </button>
      </form>

      {teams.length === 0 && <p>Je hebt nog geen teams.</p>}

      {teams.map((team) => (
        <div key={team.id}>
          <h2>{team.naam}</h2>

          <button onClick={() => teamVerwijderen(team.id)}>
            Verwijderen
          </button>
        </div>
      ))}
    </div>
  );
}

export default Teams;
