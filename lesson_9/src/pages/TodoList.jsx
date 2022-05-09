import TodoItem from "../components/TodoItem";
import "./TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import { toogleIsDone, onInputDel, onInputAdd } from "../store/actions";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

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

  const [newTodo, setNewTodo] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={() => addClick(newTodo)}>++++</button>
      <ul className="list">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            handleClick={handleClick}
            delClick={delClick}
          />
        ))}
      </ul>
      <Link to={"/"}>
        <Button variant="contained" color="error">
          На главную
        </Button>
      </Link>
    </div>
  );
}
