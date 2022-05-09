import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function TodoList({ todo, handleClick, delClick }) {
  return (
    <TableRow
      hover
      sx={{
        cursor: "pointer",
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell component="th" scope="row">
        {todo.title}
      </TableCell>
      <TableCell
        sx={todo.isDone ? { background: "green" } : { background: "red" }}
        onClick={() => handleClick(todo)}
        align="right"
      >
        Готово: {todo.isDone ? "Да" : "Нет"}
      </TableCell>
      <TableCell align="right">
        {
          <Button
            onClick={() => delClick(todo)}
            variant="outlined"
            color="error"
          >
            Удалить
          </Button>
        }
      </TableCell>
    </TableRow>
  );
}
