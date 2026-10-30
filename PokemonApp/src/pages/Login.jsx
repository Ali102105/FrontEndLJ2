function Login() {
  return (
    <div className="page-panel account-panel">
      <h1>LOGIN</h1>

      <div className="account-box">
        <label>
          Email
          <input type="email" placeholder="Vul je email in" />
        </label>

        <label>
          Wachtwoord
          <input type="password" placeholder="Vul je wachtwoord in" />
        </label>

        <button className="account-button" type="button">
          LOGIN
        </button>
      </div>

      <p className="account-note">Dit is een voorbeeldpagina.</p>
    </div>
  );
}

export default Login;
