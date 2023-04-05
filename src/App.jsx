import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/About-Us" component={AboutUs} />
      <Route path="/Profile" component={Profile} />
    </BrowserRouter>
  );
}

export default App;
