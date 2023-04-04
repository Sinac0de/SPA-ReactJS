import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/About-Us" component={AboutUs} />
      </div>
    </BrowserRouter>
  );
}

export default App;
