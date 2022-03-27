import TodoItem from "./TodoItem"
import React, { Component } from "react";
import "./TodoList.css";

export default class TodoList extends Component {
  state = {
    todo: [
      {
        id: "14",
        title: "Сделать утреннюю зарядку",
        completed: true,
      },
      {
        id: "16",
        title: "Купить продуктьі",
        completed: false,
      },
      {
        id: "18",
        title: "Сделать домашнее задание",
        completed: false,
      },
      {
        id: "19",
        title: "Сходить в кино",
        completed: true,
      },
      {
        id: "20",
        title: "Позвонить другу",
        completed: false,
      },
    ],
  };

  constructor() {
    super();
    this.onInputAdd = this.onInputAdd.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onCheckedChange = this.onCheckedChange.bind(this);
    this.onInputDel = this.onInputDel.bind(this);
  }

  render() {
    const { todo } = this.state;
    return (
      <>
        <h1>TodoList</h1>
        <input type="text" onChange={this.onInputChange} />
        <button onClick={this.onInputAdd}>Add</button>
        <ul className="ListTodo">
        {todo.map((el) => (
          <TodoItem el={el} key={el.id} onCheckedChange={this.onCheckedChange} onInputDel={this.onInputDel}/>
        ))}
        </ul>
      </>
    );
  }

  onInputChange(e) {
    this.setState({ newTodo: e.target.value });
  }


  onInputAdd() {
    const { todo, newFood } = this.state;
    const arrFood = {};
    const index = parseInt(todo[todo.length - 1].id);
    arrFood.id = `${index + 1}`;
    arrFood.title = `${newFood}`;
    arrFood.completed = false;
    todo.push(arrFood);
    this.setState({ todo: todo });
  }

  onCheckedChange(el) {
    const { todo} = this.state;
    todo.find((elem) => elem.id === el.id).completed = !todo.find((elem) => elem.id === el.id).completed;
    this.setState({ todo: todo });
  }

  onInputDel(id) {
    const newTodos = this.state.todo.filter((todo)=>todo.id !== id);
    this.setState({ todo: newTodos });
   }

}