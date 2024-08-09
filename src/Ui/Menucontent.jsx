import "./menucontent.css";
import propTypes from "prop-types";
function Menucontent({ title, text }) {
  return (
    <div className="menucontent">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
Menucontent.propTypes = {
  title: propTypes.string,
  text: propTypes.string,
};

export default Menucontent;
