import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useEffect, useState } from "react";
import ButtonAddContact from "../components/ButtonAddContact/ButtonAddContact";
import ContactsTable from "../components/ContactsTable/ContactsTable";
import Forma from "../components/FormAddContact/FormAddContact";
import userContext from "../context/userContext";
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
    runContactBook,
  } = useContactCRUD();
  const [themeContactBook, setThemeContactBook] = useState(false);

  useEffect(() => runContactBook(), []);

  return (
    <userContext.Provider value={themeContactBook}>
      <section
        className={
          themeContactBook === false ? "wrapper " : "wrapper " + " black"
        }
      >
        <h1>Contact Book</h1>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              onClick={() => setThemeContactBook(!themeContactBook)}
            />
          }
          label="Ночная тема"
          labelPlacement="top"
        />
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
      </section>
    </userContext.Provider>
  );
}
