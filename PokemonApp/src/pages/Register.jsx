function Register() {
  return (
    <div className="page-panel account-panel">
      <h1>REGISTER</h1>

      <div className="account-box">
        <label>
          Gebruikersnaam
          <input type="text" placeholder="Vul je naam in" />
        </label>

        <label>
          Email
          <input type="email" placeholder="Vul je email in" />
        </label>

        <label>
          Wachtwoord
          <input type="password" placeholder="Maak een wachtwoord" />
        </label>

        <label>
          Herhaal wachtwoord
          <input type="password" placeholder="Herhaal je wachtwoord" />
        </label>

        <button className="account-button" type="button">
          REGISTER
        </button>
      </div>

      <p className="account-note">Dit is een voorbeeldpagina.</p>
    </div>
  );
}

export default Register;
