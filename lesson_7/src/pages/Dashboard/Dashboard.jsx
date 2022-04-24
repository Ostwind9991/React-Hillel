import "./styles.css";
import {Link } from "react-router-dom";

function Dashboard() {
  return (   <>     <div>
    <Link to={"/albums"}>Albums</Link> | <Link to={"/users"}>Users</Link>
  </div>
  <h1>Dashboard</h1>
  </>)
  
}

export default Dashboard;
