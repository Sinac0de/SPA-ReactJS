import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
const routes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/About-us", component: AboutUs },
  { path: "/Profile", component: Profile },
  { component: NotFound },
  //we could also use path="*" for Not-Found
];

export default routes;
