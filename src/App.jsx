import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <Layout>
      {/* check for urls with switch */}
      <Switch>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
    </Layout>
  );
}

export default App;
