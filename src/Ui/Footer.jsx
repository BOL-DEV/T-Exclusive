import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="social">
        <h2>T Exclusive</h2>
        <p>
          <span>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          <span>
            <FontAwesomeIcon icon={faWhatsapp} />
          </span>
          <span>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
          <span>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </p>
      </div>

      <div className="Address">
        <h2>OUR LOCATION</h2>
        <address>
          Km 19 no 34 Badagry Expresway Okokomaiko Hosanna Plaza Ojo Lagos{" "}
        </address>
        <p>+234-802-2565-399</p>
        <p>+234-809-1926-473</p>
      </div>

      <div className="Opens">
        <h2>Opening Hours</h2>
        <p>
          <FontAwesomeIcon icon={faClock} />
          <span> Monday to Wednesday</span>
        </p>
        <p>9ِAM - 8PM</p>
        <p>
          <FontAwesomeIcon icon={faClock} />
          <span> Thursday to Saturday</span>
        </p>
        <p>9:30AM - 8:30PM</p>
      </div>
    </footer>
  );
}

export default Footer;
