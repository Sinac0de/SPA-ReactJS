import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <aside>
      <ul className="aside">
        <li>
          <NavLink
            to="/profile/dashboard"
            className={(navData) => (navData.isActive ? "activeTab" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/downloads"
            className={(navData) => (navData.isActive ? "activeTab" : "")}
          >
            Downloads
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
