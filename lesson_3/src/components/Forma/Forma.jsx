import { Component } from "react";
import "./Forma.css";

export default class Forma extends Component {
  render() {
    return (
      <>
        <form className="forma">
          <h2>Добавить контакт</h2>
          <input
            value={this.props.name}
            type="text"
            name="Name"
            onChange={this.props.onInputChange}
            placeholder="Имя"
          />
          <input
            value={this.props.sername}
            type="text"
            name="LastName"
            onChange={this.props.onInputChange}
            placeholder="Фамилия"
          />
          <input
            value={this.props.phone}
            type="phone"
            name="Phone"
            onChange={this.props.onInputChange}
            placeholder="Телефон"
          />
          <div>
            <button className="add" onClick={this.props.onSubmitButton}>
              Сохранить
            </button>
            <button className="close" onClick={() => this.props.onShowContact}>
              Отмена
            </button>
          </div>
        </form>
      </>
    );
  }
}
