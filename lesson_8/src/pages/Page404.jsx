import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import {useEffect} from "react"
import useUsers from "../hooks/useUsers";

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
                404      </Typography>
        </>
    );
}

export default Page404;
