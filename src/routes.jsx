import Blog from "./components/Blog";
import AboutUs from "./pages/AboutUs";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";

const routes = [
  { path: "/blogs/:id", element: <Blog /> },
  { path: "/blogs", element: <BlogPage /> },
  { path: "/About-us", element: <AboutUs /> },
  { path: "/Profile/*", element: <Profile /> },
  { path: "/post/:id([0-9]+)?", element: <PostPage /> },
  { path: "/", element: <HomePage /> },
  { element: <NotFound /> },
  //we could also use path="*" for Not-Found
];

export default routes;
