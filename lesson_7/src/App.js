import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Albums from "./pages/Albums/Albums"
import Users from "./pages/Users/Users"
import Menu from "./components/Menu/Menu"

function App() {
  return (
      <BrowserRouter>
      <Menu />
        <Switch>
          <Route path={"/"} exact>
            <Dashboard />
          </Route>
          <Route path={"/albums"}>
            <Albums />
          </Route>
          <Route path={"/users"}>
            <Users />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
