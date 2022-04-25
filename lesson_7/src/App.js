import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Albums from "./pages/Albums/Albums";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";

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
