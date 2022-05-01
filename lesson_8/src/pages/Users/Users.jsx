import Breadcrumbs from "@mui/material/Breadcrumbs";
import List from "@mui/material/List";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UsersItem from "../../components/UsersItem";
import useUsers from "../../hooks/useUsers";

function Users() {
  const { run, users } = useUsers();
  useEffect(() => {run()}, []);

  return (
    <>
      <Breadcrumbs>
        <Link className="Breadcrumbslink" to={"/"}>
          Home
        </Link>
        <Link className="Breadcrumbslink_target" to={"/users"}>
          Users
        </Link>
      </Breadcrumbs>
      <List
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {users.map((user) => (
          <UsersItem key={user.id} user={user} />
        ))}
      </List>
    </>
  );
}

export default Users;
