import { Component } from "react";
import "./Contacts.css";

export default class Contacts extends Component {
  render() {
    const { name, phone, id, sername } = this.props.contact;
    return (
      <li className="contact">
        <span>{name}</span>
        <span>{sername}</span>
        <span>{phone}</span>
        <button onClick={() => this.props.onClickDelete(id)}>Delete</button>
      </li>
    );
  }
}
