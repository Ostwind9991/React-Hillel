import { useState, useEffect } from "react";
import { API_URL } from "../constants";
import "./ContactBook.css";
import Forma from "../components/Forma/Forma";
import ContactsTable from "../components/ContactsTable/ContactsTable";

export default function ContactBook() {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(true);
  const onShowNextPage = (e) => {
    e.preventDefault();
    setPage(!page);
  };
  const onSubmitButton = (newElem) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newElem),
    })
      .then((resp) => resp.json())
      .then((data) => setContacts([...contacts, data]), setPage(!page));
  };
  const onClickDelete = (id) => {
    fetch(API_URL + "/" + id, {
      method: "DELETE",
    });
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };
  useEffect(() => {
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((data) => setContacts(data));
  }, []);

  return (
    <>
      <h1>Contact Book</h1>
      {page === true ? (
        <ContactsTable
          contacts={contacts}
          onClickDelete={onClickDelete}
          onShowForma={onShowNextPage}
        />
      ) : (
        <Forma 
          onSubmitButton={onSubmitButton} 
          onShowContact={onShowNextPage} 
        />
      )}
    </>
  );
}
