import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <h1>Dashboard</h1>
      <Link className="link" to={"/todo"}>
        <Button variant="contained" color="success">
          ToDo
        </Button>
      </Link>
    </Box>
  );
}

export default Dashboard;
