import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function TodoForm({ addClick }) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <Box
      component="form"
      sx={{
        margin: "30px auto",
        display: "flex",
        justifyContent: "space-between",
        width: 400,
      }}
    >
      <TextField
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        id="outlined-required"
        label="Задача"
      />
      <Button
        onClick={() => {
          addClick(newTodo);
          setNewTodo("");
        }}
        variant="contained"
        color="success"
      >
        Добавить
      </Button>
    </Box>
  );
}
