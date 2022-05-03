import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UsersItem from "../../components/UsersItem";
import useUsers from "../../hooks/useUsers";

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
      <Box>
        <Typography
          variant="h6"
          sx={{
            margin: "20px",
            display: "inline-block",
          }}
        >
          Добавить нового пользователя{" "}
        </Typography>{" "}
        <Link to={"newuser"}>
          <Button variant="contained" color="secondary">
            Добавить
          </Button>
        </Link>{" "}
      </Box>
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
