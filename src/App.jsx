import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <Layout>
      {/* check for urls with switch */}
      <Routes>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
