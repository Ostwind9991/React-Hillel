import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Menu from "./components/Menu";
import Albums from "./pages/Albums/Albums";
import Dashboard from "./pages/Dashboard/Dashboard";
import Page404 from "./pages/Page404";
import NewUserForm from "./pages/NewUserForm"
import EditUserForm from "./pages/EditUserForm"
import UserTable from "./pages/UserTable"

function App() {
  return (    
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path={"albums"} element={<Albums />}/>
        <Route path={"users"} element={<UserTable />}/>
          <Route path={"users/newuser"} element={<NewUserForm />}/>
          <Route path={"users/edituser/:id"} element={<EditUserForm />}/>
        <Route path={"/"} element={<Dashboard />}/>
        <Route path={"*"} element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
