import { Link } from "react-router-dom";
import queryString from "query-string";

const Blog = ({ match }) => {
  const id = match.params.id;
  const query = queryString.parse(location.search);
  return (
    <div>
      <h2>blog page {id}</h2>
      <Link to="/blogs">Go to Blog page</Link>
    </div>
  );
};

export default Blog;
