import React, { Component } from "react";
import "./TodoItem.css";

export default function TodoList({todo, handleClick, delClick}) {


return (

<li onClick={() => handleClick(todo)}>
{todo.title} - Done: {todo.isDone ? "Yes" : "No"} <button onClick={() => delClick(todo)}>del</button>
</li>

)
}