import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

export default function UserTableRow({ user, deleteUser }) {
  const { name, surname, phone, id } = user;
  return (
    <TableRow hover sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{surname}</TableCell>
      <TableCell align="right">{phone}</TableCell>
      <TableCell align="right">
        {
          <Link to={"edituser/" + id}>
            <Button variant="contained" color="success">
              Редактировать
            </Button>
          </Link>
        }
      </TableCell>
      <TableCell align="right">
        {
          <Button
            onClick={() => {
              deleteUser(id);
            }}
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
