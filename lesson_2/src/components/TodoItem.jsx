import React, { Component } from "react";
import "./TodoItem.css";

export default class TodoList extends Component {


  render() {
      const {el}=this.props
    return (
            <li  className= {el.completed ? "DiActive  TodoItem" : "Active TodoItem"}>
              <input
                type="checkbox"
                defaultChecked={el.completed ? true : false}
                onChange={() => this.props.onCheckedChange(el)}
              />
              {el.title}
              <button key={el.id + "1"} onClick={() => this.props.onInputDel(el.id)}>
                Delite
              </button>
            </li>
    );
  }

}
