import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <p>Home</p>
      <Link to="/about-us">about us</Link>
    </div>
  );
};

export default HomePage;
