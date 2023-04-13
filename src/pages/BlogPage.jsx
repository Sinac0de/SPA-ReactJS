import { Link } from "react-router-dom";

const items = [
  { name: "blog page 1", to: "/blogs/1" },
  { name: "blog page 2", to: "/blogs/2" },
  { name: "blog page 3", to: "/blogs/3" },
];

const BlogPage = () => {
  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <Link to={{ pathname: item.to, search: "sort=name" }}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPage;
