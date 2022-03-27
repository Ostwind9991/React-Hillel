import "./TodoList.css"
import React, { Component } from "react";

export default class TodoList extends Component {
    state = {
            text: "Hello",
            isVisible:true,
            food: [
                {
                  id: "14",
                  title: "Сделать утреннюю зарядку",
                  completed: true
                },
                {
                  id: "16",
                  title: "Купить продуктьі",
                  completed: false
                },
                {
                  id: "18",
                  title: "Сделать домашнее задание",
                  completed: false
                },
                {
                  id: "19",
                  title: "Сходить в кино",
                  completed: true
                },
                {
                  id: "20",
                  title: "Позвонить другу",
                  completed: false
                }
              ],
        };
    
    constructor() {
        super();
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    render(){
        const {isVisible, text, food} = this.state;
        return (
        <>
        <input type="text" onChange={this.onInputChange.bind(this)}/>
        <button onClick={this.onInputAdd.bind(this)}>Add</button>
        {isVisible && <h1>{text}</h1>}
        <button onClick={this.onButtonClick}>
            {isVisible ? 'Hide' :'Show'}
        </button>
        <ul>
            {food.map(el=> <li key={el.id}>{el.title}
            <button className={el.completed ?"DiActive" : "Active"} key={el.id+"1"}  onClick={() => this.onInputDel(el)}>Delite</button></li>)}
            {console.log(this.state.food)}
        </ul>
        
        </>
        );
    }

    onInputChange(e){
        console.log(e.target.value)
        this.setState({newFood: e.target.value})
    }

    onInputAdd(){
        const arrFood = {};
        const index = parseInt(this.state.food[this.state.food.length - 1].id)
        console.log(index+1)
        arrFood.id= `${index+1}`;
        arrFood.title=`${this.state.newFood}`;
        arrFood.completed=false;
        this.state.food.push(arrFood);
        this.setState(this.state.food)
    }

    onInputDel(el){
        this.state.food.find(elem => elem.id === el.id).completed = !this.state.food.find(elem => elem.id === el.id).completed
        this.setState(this.state.food)

    }

    onButtonClick() {
        const {isVisible} = this.state;
        this.setState({isVisible: !isVisible})
    }
}







// import React, { Component } from "react";

// export default class TodoList extends Component {
//     state = {
//             text: "Hello",
//             isVisible:true,
//             food: ["eggs", "bread", "milk"],
//         };
    
//     constructor() {
//         super();
//         this.onButtonClick = this.onButtonClick.bind(this);
//     }

//     render(){
//         const {isVisible, text, food} = this.state;
//         return (
//         <>
//         {isVisible && <h1>{text}</h1>}
//         <button onClick={this.onButtonClick}>
//             {isVisible ? 'Hide' :'Show'}
//         </button>
//         <ul>
//             {food.map(el=> <li key={el}>{el}</li>)}
//         </ul>
//         </>
//         );
//     }

//     onButtonClick() {
//         const {isVisible} = this.state;
//         this.setState({isVisible: !isVisible})
//     }
// }
