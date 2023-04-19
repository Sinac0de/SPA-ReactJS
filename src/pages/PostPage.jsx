import { useParams } from "react-router-dom";

const PostPage = () => {
  const params = useParams();
  const id = params.id || 1;
  return (
    <div>
      <h2>Post page - {id}</h2>
    </div>
  );
};

export default PostPage;
