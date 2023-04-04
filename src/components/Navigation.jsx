import { Link, withRouter } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
      </ul>
    </header>
  );
};

export default withRouter(Navigation);
