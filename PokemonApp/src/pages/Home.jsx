import Homepage from "../img/Homepage.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <img
        src={Homepage}
        alt="Homepage image"
        className="heroimage"
      />

      <div className="hero-content">
        <h1 className="play-pokemon">PLAY POKEMON</h1>
        <Link className="ButtonLM" to="/pokemon">
          LEARN MORE
        </Link>
      </div>
    </div>
  );
}

export default Home;
