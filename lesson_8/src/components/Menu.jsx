import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Menu() {
  const dashboard = (
    <Link className="link" to={"/"}>
      Dashboard
    </Link>
  );
  const abums = (
    <Link className="link" to={"/albums"}>
      Albums
    </Link>
  );
  const users = (
    <Link className="link" to={"/users"}>
      Users
    </Link>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ textAlign: "center" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {dashboard} {abums} {users}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Menu;
