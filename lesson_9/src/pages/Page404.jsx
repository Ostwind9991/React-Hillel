import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <>
      <Breadcrumbs>
        <Link className="Breadcrumbslink" to={"/"}>
          Home
        </Link>
        <Link className="Breadcrumbslink_target" to={"/404"}>
          404
        </Link>
      </Breadcrumbs>
      <Typography variant="h1" component="div" gutterBottom>
        404{" "}
      </Typography>
      <Link to={"/"}>
        <Button variant="contained" color="error">
          На главную
        </Button>
      </Link>
    </>
  );
}

export default Page404;
