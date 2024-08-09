import "./Banner.css";
import propTypes from "prop-types";
function Banner({ backgroundImage, text, title }) {
  return (
    <div
      className="Banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
Banner.propTypes = {
  backgroundImage: propTypes.string,
  text: propTypes.string,
  title: propTypes.string,
};

Banner.propTypes = {
  backgroundImage: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};
export default Banner;
