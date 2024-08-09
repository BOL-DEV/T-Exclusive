import { useNavigate } from "react-router-dom";
import "./ButtonView.css";
function ButtonView() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/Menu");
  }

  return (
    <button className="buttonView" onClick={() => handleNavigate()}>
      View All Menu
    </button>
  );
}

export default ButtonView;
