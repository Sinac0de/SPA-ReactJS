import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const Profile = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Profile;
