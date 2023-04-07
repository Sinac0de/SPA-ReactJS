import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <p>404 - Not Found!</p>
      <Link to="/">Go to home page</Link>
    </>
  );
};

export default NotFound;
