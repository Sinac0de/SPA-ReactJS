import { Route, Routes } from "react-router-dom";
import { useId } from "react";
import Layout from "./layout/Layout";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <Layout>
      {/* check for urls with switch */}
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={useId()} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
