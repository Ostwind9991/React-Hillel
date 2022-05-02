import Breadcrumbs from "@mui/material/Breadcrumbs";
import List from "@mui/material/List";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UsersItem from "../../components/UsersItem";
import useUsers from "../../hooks/useUsers";
import Button from "@mui/material/Button";

function Users() {
  const { run, users, deleteUser, onSubmitButton } = useUsers();
  useEffect(() => {
    run();
  }, []);
  
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
      <Link to={"newuser"}>
        <Button variant="contained" color="success">
          Новый
        </Button>
      </Link>
      <List
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {users.map((user) => (
          <UsersItem
            key={user.id}
            user={user}
            id={user.id}
            deleteUser={deleteUser}
            onSubmitButton={onSubmitButton}
          />
        ))}
      </List>
    </>
  );
}

export default Users;
