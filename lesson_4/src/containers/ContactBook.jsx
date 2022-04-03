import { Component } from "react";
import { API_URL } from "../constants";
import "./ContactBook.css";
import Forma from "../components/Forma/Forma";
import ContactsTable from "../components/ContactsTable/ContactsTable";

export default class ContactBook extends Component {
  state = {
    contacts: [],
    name: "",
    phone: "",
    sername: "",
    page: true,
  };

  constructor() {
    super();
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onSubmitButton = this.onSubmitButton.bind(this);
    this.onShowNextPage = this.onShowNextPage.bind(this);
  }

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h1>Contact Book</h1>
        {this.state.page === true ? (
          <ContactsTable
            contacts={contacts}
            onClickDelete={this.onClickDelete}
            onShowForma={this.onShowNextPage}
          />
        ) : (
          <Forma
            onSubmitButton={this.onSubmitButton}
            onShowContact={this.onShowNextPage}
          />
        )}
      </>
    );
  }

  onShowNextPage() {
    this.setState({ page: !this.state.page });
  }

  onSubmitButton(newElem) {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newElem),
    })
      .then((resp) => resp.json())
      .then((data) =>
        this.setState({
          contacts: [...this.state.contacts, data],
          page: !this.state.page,

        })
      );
  }

  onClickDelete(id) {
    const { contacts } = this.state;
    fetch(API_URL + "/" + id, {
      method: "DELETE",
    });
    const newContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts: newContacts });
  }

  componentDidMount() {
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((data) => this.setState({ contacts: data }));
  }
}
