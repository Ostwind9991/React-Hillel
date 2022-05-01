import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Menu from "./components/Menu";
import Albums from "./pages/Albums/Albums";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import Page404 from "./pages/Page404";

function App() {
  return (    
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path={"albums"} element={<Albums />}/>
        <Route path={"users"} element={<Users />}/>
        <Route path={"/"} element={<Dashboard />}/>
        <Route path={"*"} element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
