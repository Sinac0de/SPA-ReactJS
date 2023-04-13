import { Route } from "react-router-dom";
import SideBar from "../components/SideBar";
import Downloads from "../components/Downloads";
import Dashboard from "../components/Dashboard";

const Profile = () => {
  return (
    <div>
      <SideBar />
      <Route path="/profile/downloads" component={Downloads}></Route>
      <Route path="/profile/dashboard" component={Dashboard}></Route>
    </div>
  );
};

export default Profile;
