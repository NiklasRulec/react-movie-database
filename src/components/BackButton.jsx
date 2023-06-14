import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/">
      <button className="backbutton">Back</button>
    </Link>
  );
};

export default BackButton;
