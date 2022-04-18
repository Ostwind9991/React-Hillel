import { useState } from "react";
import * as contactsService from "../services/contactsService";

export function useContactCRUD() {
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
      setContacts((contacts) =>
        contacts.map((item) => (item.id === contact.id ? data : item))
      );
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

  const runContactBook = () => {
    contactsService.updateContactTable().then((data) => setContacts(data));
  };

  return {
    selectedContact,
    contacts,
    page,
    onShowNextPage,
    onSubmitButton,
    onClickSelect,
    onClickDelete,
    runContactBook,
  };
}
