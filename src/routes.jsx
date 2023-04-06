import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/About-us", component: AboutUs },
  { path: "/Profile", component: Profile },
];

export default routes;
