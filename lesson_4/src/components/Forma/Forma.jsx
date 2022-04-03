import { Component } from "react";
import "./Forma.css";

export default class Forma extends Component {


  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <>
              <div className={"wrapper-forma " }>
        <form className="forma">
          <h2>Добавить контакт</h2>
          <input
            type="text"
            name="name"
            onChange={this.onInputChange}
            placeholder="Имя"
          />
          <input
            type="text"
            name="sername"
            onChange={this.onInputChange}
            placeholder="Фамилия"
          />
          <input
            type="phone"
            name="phone"
            onChange={this.onInputChange}
            placeholder="Телефон"
          />
          <div>
            <button className="add" onClick={this.onSubmit}>
              Сохранить
            </button>
            <button className="close" onClick={this.props.onShowContact}>
              Отмена
            </button>
          </div>
        </form>
        </div>
      </>
    );
  }
  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e){
    e.preventDefault();
    const newElem = {
      name: this.state.name,
      phone: this.state.phone,
      sername: this.state.sername,
    };
    this.props.onSubmitButton(newElem);

  }


}
