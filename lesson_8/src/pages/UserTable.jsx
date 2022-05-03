import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UserTableRow from "../components/UserTableRow";
import useUsers from "../hooks/useUsers";

export default function UserTable() {
  const { run, users, deleteUser } = useUsers();
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

      <TableContainer
        sx={{
          width: "80%",
          margin: "auto",
        }}
        component={Paper}
      >
        <Table size="medium">
          <TableHead>
            <TableRow sx={{ background: "#1976d2" }}>
              <TableCell sx={{ color: "#fff", fontWeight: "600" }}>
                {" "}
                Имя
              </TableCell>
              <TableCell
                sx={{ color: "#fff", fontWeight: "600" }}
                align="right"
              >
                Фамили
              </TableCell>
              <TableCell
                sx={{ color: "#fff", fontWeight: "600" }}
                align="right"
              >
                Телефон
              </TableCell>
              <TableCell
                sx={{ color: "#fff", fontWeight: "600" }}
                align="right"
              >
                Редактировать
              </TableCell>
              <TableCell
                sx={{ color: "#fff", fontWeight: "600" }}
                align="right"
              >
                Удалить
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <UserTableRow user={user} key={user.id} deleteUser={deleteUser} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
