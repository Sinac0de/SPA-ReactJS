import { Route, Routes } from "react-router-dom";
import SideBar from "../components/SideBar";
import Downloads from "../components/Downloads";
import Dashboard from "../components/Dashboard";

const Profile = () => {
  return (
    <div>
      <SideBar />
      <Routes>
        <Route path="downloads" element={<Downloads />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};

export default Profile;
