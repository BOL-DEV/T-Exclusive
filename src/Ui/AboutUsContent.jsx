import propTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import "./AboutUsContent.css";

const AboutUsContent = () => {
  return (
    <>
      <div className="about-cont">
        <Reuse
          title="Our Story"
          summary="At T Exclusive Cyber Cafe, we are a team of dedicated professionals who
        are passionate about providing exceptional services to our clients. Our
        professional staff is equipped with the latest technology and tools to
        ensure that our clients receive the best services possible. With our
        commitment to excellence and customer satisfaction, T Exclusive Cyber
        Cafe is the premier cyber cafe in Lagos."
        />
        <Setup />
      </div>

      <div className="our-Specialties">
        <Specialtext />
        <SpecialCard
          image="/jamb-logo.webp"
          title="UTME Registration"
          summary="Get registered for UTME quickly and easily at T Exclusive Cyber Cafe. Our
            experienced staff will guide you through the process and ensure your
            application is submitted successfully."
        />
        <SpecialCard
          image="/nyscLogo.jpeg"
          title="NYSC Registration"
          summary="Let T Exclusive Cyber Cafe take care of your NYSC registration hassle-free. Our team of experts will assist you in completing your forms and submitting your application promptly."
        />
      </div>

      <div className="team-sector-text">
        <Reuse
          title="Meet the Professional Team at T Exclusive Cyber Cafe"
          summary="T Exclusive Cyber Cafe is a premier cyber cafe that offers a range of services to meet your educational and travel needs. Our cafe is equipped with state-of-the-art computers, printers, and scanners, and our professional staff is committed to providing exceptional services to our clients. With our convenient online registration services for various exams, one-stop-shop for educational and travel needs, and wide range of document services, T Exclusive Cyber Cafe is your go-to destination for all your cyber cafe needs."
        />
      </div>
    </>
  );
};

const Reuse = ({ title, summary }) => {
  return (
    <div className="our-story">
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  );
};

Reuse.propTypes = {
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
};

const Setup = () => {
  return (
    <div className="setup">
      <div className="text-cont">
        <Text
          title="Easy Registration"
          summary=" Avoid the hassle of standing in long queues and enjoy swift
          registration services at T Exclusive."
        />

        <Text
          title="All in One Place"
          summary=" T Exclusive is your one-stop-shop for all your educational and travel needs, providing a wide range of services under one roof."
        />

        <Text
          title="Document Services"
          summary="Get access to a range of document services, including printing, laminating, and scanning, to make your life easier.."
        />
      </div>

      <img src="/aboutUs.webp" alt="aboutUs-Pic" />
    </div>
  );
};

const Text = ({ title, summary }) => {
  return (
    <div className="text">
      <h1>
        <span className="icon-cube">
          <FontAwesomeIcon icon={faCube} />
        </span>
        <span> {title}</span>
      </h1>
      <p>{summary}</p>
    </div>
  );
};

Text.propTypes = {
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
};

const Specialtext = () => {
  return (
    <div className="content">
      <h1>Our Specialties</h1>
      <p>
        At T Exclusive Cyber Cafe, we specialize in providing convenient and
        efficient online registration services for various exams, including
        UTME, WAEC GCE, NECO GCE, NDA, Airforce, Navy, Army, and visa
        applications. We also offer a one-stop-shop for educational and travel
        needs, including flight bookings for local and international travel.
        Additionally, we provide a wide range of document services, including
        printing, laminating, and scanning. At T Exclusive Cyber Cafe, we are
        committed to providing exceptional services to our clients.
      </p>
      <button>VIEW ALL MENU</button>
    </div>
  );
};

const SpecialCard = ({ title, image, summary }) => {
  return (
    <div className="special-card-cont">
      <img src={image} alt="special-pic1" />
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
};

SpecialCard.propTypes = {
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
};

export default AboutUsContent;
