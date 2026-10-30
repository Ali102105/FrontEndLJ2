import FooterImg from "../img/FooterImg.png";
import Instagram from "../img/Ig.png";
import Tiktok from "../img/tiktok.png";
import X from "../img/x.jpg";
import Facebook from "../img/fb.jpg";

function Footer() {
  return (
    <footer className="footer">

      <img
        className="footer-logo"
        src={FooterImg}
        alt="Pokemon logo"
      />

      <div className="socials">
        <img src={Instagram} alt="Instagram Logo" />
        <img src={Tiktok} alt="Tiktok Logo" />
        <img src={X} alt="X Logo" />
        <img src={Facebook} alt="Facebook Logo" />
      </div>

    </footer>
  );
}

export default Footer;