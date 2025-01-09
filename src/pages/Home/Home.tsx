import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1>Odin Recipes</h1>
      <ul>
        <li>
          <Link to="/lasagna">Lasagna</Link>
        </li>
        <li>
          <Link to="/pizza">Pizza</Link>
        </li>
        <li>
          <Link to="/pasta">Pasta</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
