const PostPage = (props) => {
  const id = props.match.params.id || 1;
  return (
    <div>
      <h2>Post page - {id}</h2>
    </div>
  );
};

export default PostPage;
