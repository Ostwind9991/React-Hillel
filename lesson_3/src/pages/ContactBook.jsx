import { Component } from "react";
import Contacts from "../components/Contacts/Contacts";
import { API_URL } from "../constants";
import "./ContactBook.css";
import Forma from "../components/Forma/Forma";

export default class ContactBook extends Component {
  state = {
    contacts: [],
    name: "",
    phone: "",
    sername: "",
    showContact: "show",
    showForma: "inactively",
  };

  constructor() {
    super();
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onSubmitButton = this.onSubmitButton.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onShowForma = this.onShowForma.bind(this);
    this.onShowContact = this.onShowContact.bind(this);
  }

  render() {
    const { showContact } = this.state;
    const { showForma } = this.state;
    const { name, phone, sername } = this.state;
    return (
      <>
        <h1>Contact Book</h1>
        <div className={"wrapper-contacts  " + showContact}>
          <ul className="list">
            <div className="title">
              <span>Имя</span>
              <span>Фамилия</span>
              <span>Телефон</span>
            </div>
            {this.state.contacts.map((contact) => (
              <Contacts
                key={contact.id}
                contact={contact}
                onClickDelete={this.onClickDelete}
              />
            ))}
          </ul>
          <button className="add-contact" onClick={this.onShowForma}>
            Добавить котакт
          </button>
        </div>
        <div className={"wrapper-forma " + showForma}>
          <Forma
            name={name}
            phone={phone}
            sername={sername}
            onInputChange={this.onInputChange}
            onSubmitButton={this.onSubmitButton}
            onShowContact={this.onShowContact}
          />
        </div>
      </>
    );
  }

  onShowForma(e) {
    e.preventDefault();
    const newshowForma = "show";
    const newshowContact = "inactively";
    this.setState({ showContact: newshowContact, showForma: newshowForma });
  }

  onShowContact(e) {
    e.preventDefault();
    const newshowForma = "inactively";
    const newshowContact = "show";
    this.setState({ showContact: newshowContact, showForma: newshowForma });
  }

  onInputChange(e) {
    const nameForm = e.target.name;
    if (nameForm == "Name") {
      this.setState({ name: e.target.value });
    } else if (nameForm == "Phone") {
      this.setState({ phone: e.target.value });
    } else {
      this.setState({ sername: e.target.value });
    }
  }

  onSubmitButton(e) {
    e.preventDefault();
    const newElem = {
      name: this.state.name,
      phone: this.state.phone,
      sername: this.state.sername,
    };
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newElem),
    })
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          contacts: [...this.state.contacts, data],
          name: "",
          phone: "",
          sername: "",
        })
      );
  }

  onClickDelete(id) {
      const {contacts} =this.state
    fetch(API_URL + "/" + id, {
      method: "DELETE",
    });
    const newContacts = contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({ contacts: newContacts });
  }

  componentDidMount() {
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((data) => this.setState({ contacts: data }));
  }
}
