import { useState, useEffect } from "react";
import "./ContactBook.css";
import Forma from "../components/FormAddContact/FormAddContact";
import ContactsTable from "../components/ContactsTable/ContactsTable";
import ButtonAddContact from "../components/ButtonAddContact/ButtonAddContact";
import * as contactsService from "../services/contactsService";

export default function ContactBook() {
  const [selectedContact, setSelectedContact] = useState("");
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(true);

  const onShowNextPage = (e) => {
    e.preventDefault();
    setSelectedContact("");
    setPage(!page);
  };

  const onSubmitButton = (contact) => {
    if (contact.id) {
      updateContact(contact);
    } else {
      createContact(contact);
    }
    setSelectedContact("");
    setPage(!page);
  };

  const createContact = (contact) => {
    contactsService.createContact(contact).then((data) => {
      setContacts([...contacts, data]);
    });
  };
  const updateContact = (contact) => {
    contactsService.updateContact(contact).then((data) => {
      const newContacts = contacts.map((el) =>
        el.id === contact.id ? contact : el
      );
      setContacts(newContacts);
    });
  };

  const onClickSelect = (selectedContact) => {
    setSelectedContact(selectedContact);
    setPage(!page);
  };

  const onClickDelete = (id) => {
    contactsService.deleteContact(id);
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  useEffect(() => {
    contactsService.updateContactTable().then((data) => setContacts(data));
  }, []);

  return (
    <>
      <h1>Contact Book</h1>
      {page === true ? (
        <>
          <ContactsTable
            contacts={contacts}
            onClickDelete={onClickDelete}
            onClickSelect={onClickSelect}
          />
          <ButtonAddContact onShowNextPage={onShowNextPage} />
        </>
      ) : (
        <Forma
          onSubmitButton={onSubmitButton}
          onShowNextPage={onShowNextPage}
          selectedContact={selectedContact}
        />
      )}
    </>
  );
}
