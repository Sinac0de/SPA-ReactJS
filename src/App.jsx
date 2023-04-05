import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import "./App.css";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/About-Us" component={AboutUs} />
      <Route path="/Profile" component={Profile} />
    </Layout>
  );
}

export default App;
