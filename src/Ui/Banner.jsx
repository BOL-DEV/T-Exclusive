import "./Banner.css";
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

export default Banner;
