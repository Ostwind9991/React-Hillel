import { Box } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import { onInputAdd, onInputDel, toogleIsDone } from "../store/actions";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  function handleClick(todo) {
    dispatch(toogleIsDone(todo));
  }

  function delClick(todo) {
    dispatch(onInputDel(todo));
  }

  function addClick(todo) {
    dispatch(onInputAdd(todo));
  }

  return (
    <>
      <Breadcrumbs>
        <Link className="Breadcrumbslink" to={"/"}>
          Home
        </Link>
        <Link className="Breadcrumbslink_target" to={"/todo"}>
          Todo List
        </Link>
      </Breadcrumbs>
      <Box
        sx={{
          width: "80%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <TableContainer component={Paper}>
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
                  Удалить
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map((todo) => (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  handleClick={handleClick}
                  delClick={delClick}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TodoForm addClick={addClick} />
        <Link to={"/"}>
          <Button variant="contained" color="error">
            На главную
          </Button>
        </Link>
      </Box>
    </>
  );
}
