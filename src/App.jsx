import { Route } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <Layout>
      {routes.map((route) => (
        <Route {...route} />
      ))}
    </Layout>
  );
}

export default App;
