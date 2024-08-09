import "./Card.css";
import propTypes from "prop-types";
function Card({ image, text, title }) {
  return (
    <div className="card">
      <img src={image} alt="cozy-place_10_KVussGfl.webp" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
Card.propTypes = {
  image: propTypes.string,
  text: propTypes.string,
  title: propTypes.string,
};

export default Card;
