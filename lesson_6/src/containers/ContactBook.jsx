import { useEffect } from "react";
import ButtonAddContact from "../components/ButtonAddContact/ButtonAddContact";
import ContactsTable from "../components/ContactsTable/ContactsTable";
import Forma from "../components/FormAddContact/FormAddContact";
import { useContactCRUD } from "../hooks/common";
import "./ContactBook.css";

export default function ContactBook() {
  const {
    selectedContact,
    contacts,
    page,
    onShowNextPage,
    onSubmitButton,
    onClickSelect,
    onClickDelete,
    runContactBook
  } = useContactCRUD();

  useEffect(() => runContactBook(), []);

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
