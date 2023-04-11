import { Link } from "react-router-dom";

const Blog = (props) => {
  const id = props.match.params.id;
  return (
    <div>
      <h2>blog page {id}</h2>
      <Link to="/blogs">Go to Blog page</Link>
    </div>
  );
};

export default Blog;
