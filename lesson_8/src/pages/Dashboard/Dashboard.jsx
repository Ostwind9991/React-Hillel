import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import "./styles.css";

function Dashboard() {
  return (
    <section className="dashboard">
      <h1>Dashboard</h1>

      <ButtonGroup variant="contained">
        <Link className="link" to={"/albums"}>
          <Button color="success">Albums</Button>
        </Link>
        <Link className="link" to={"/users"}>
          <Button color="secondary">Users</Button>
        </Link>
      </ButtonGroup>
    </section>
  );
}

export default Dashboard;
