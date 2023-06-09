import { NavLink, useParams } from "react-router-dom";

const items = [
  { name: "Home", to: "/" },
  { name: "About-us", to: "/About-us" },
  { name: "Profile", to: "/Profile" },
  { name: "Blogs", to: "/blogs" },
  { name: "Posts", to: "/post" },
];

const Navigation = () => {
  const params = useParams();

  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={(navData) => (navData.isActive ? "activeLink" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
