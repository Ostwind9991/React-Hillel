import React, { Component } from "react";
import "./TodoItem.css";

export default class TodoList extends Component {
  render() {
    const { el } = this.props;
    return (
      <li className={el.completed ? "diActive  item" : "active item"}>
        <input
          type="checkbox"
          defaultChecked={el.completed ? true : false}
          onChange={() => this.props.onCheckedChange(el)}
        />
        {el.title}
        <button onClick={() => this.props.onInputDel(el.id)}>
          Delite
        </button>
      </li>
    );
  }
}
