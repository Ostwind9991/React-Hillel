import { Link } from "react-router-dom";

function Menu() {
    const dashboard = <Link to={"/"}>Dashboard</Link>
    const abums = <Link to={"/albums"}>Albums</Link>
    const users = <Link to={"/users"}>Users</Link>


  return (
    <div>
    {dashboard} | {abums} | {users}
  </div>
  );
}

export default Menu;
