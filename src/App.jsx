import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/About-Us" component={AboutUs} />
      </div>
    </BrowserRouter>
  );
}

export default App;
