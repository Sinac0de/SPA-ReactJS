import Blog from "./components/Blog";
import AboutUs from "./pages/AboutUs";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";

const routes = [
  { path: "/blogs/:id", component: Blog },
  { path: "/blogs", component: BlogPage },
  { path: "/About-us", component: AboutUs },
  { path: "/Profile", component: Profile },
  { path: "/post/:id?", component: PostPage },
  { component: NotFound },
  { path: "/", component: HomePage, exact: true },
  //we could also use path="*" for Not-Found
];

export default routes;
