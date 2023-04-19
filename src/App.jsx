import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";
import Blog from "./components/Blog";
import AboutUs from "./pages/AboutUs";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";
import Downloads from "./components/Downloads";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  return (
    <Layout>
      {/* check for urls with switch */}
      <Routes>
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/About-us" element={<AboutUs />} />
        <Route path="/Profile/*" element={<Profile />}>
          <Route path="downloads" element={<Downloads />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/post/:id([0-9]+)?" element={<PostPage />} />
        <Route path="/" element={<HomePage />} />
        <Route element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
