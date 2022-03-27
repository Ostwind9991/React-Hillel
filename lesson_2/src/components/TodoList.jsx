import "./TodoList.css";
import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    food: [
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
  }

  render() {
    const { food } = this.state;
    return (
      <>
        <input type="text" onChange={this.onInputChange} />
        <button onClick={this.onInputAdd}>Add</button>
        <h1>TodoList</h1>
        <ul>
          {food.map((el) => (
            <li key={el.id} className={el.completed ? "DiActive" : "Active"}>
              <input
                type="checkbox"
                defaultChecked={el.completed ? true : false}
                onChange={() => this.onCheckedChange(el)}
              />
              {el.title}
              <button key={el.id + "1"} onClick={() => this.onInputDel(el)}>
                Delite
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }

  onInputChange(e) {
    const { newFood } = this.state;
    this.setState({ newFood: e.target.value });
    console.log(newFood);
  }

  onCheckedChange(el) {
    const { food } = this.state;
    food.find((elem) => elem.id === el.id).completed = !food.find(
      (elem) => elem.id === el.id
    ).completed;
    this.setState(food);
  }

  onInputAdd() {
    const { food, newFood } = this.state;
    const arrFood = {};
    const index = parseInt(food[food.length - 1].id);
    console.log(index + 1);
    arrFood.id = `${index + 1}`;
    arrFood.title = `${newFood}`;
    arrFood.completed = false;
    food.push(arrFood);
    this.setState(food);
  }

  onInputDel(el) {
    const { food } = this.state;
    const index = food.findIndex((x) => x.id === el.id);
    food.splice(index, 1);
    this.setState({ food: food });
  }
}
