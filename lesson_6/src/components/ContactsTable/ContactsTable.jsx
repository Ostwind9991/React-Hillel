import { useContext } from "react";
import userContext from "../../context/userContext";
import Contacts from "../ContactsTableItem/ContactsTableItem";
import "./ContactsTable.css";

export default function ContactsTable(props) {
  const { contacts, onClickDelete, onClickSelect } = props;
  const value = useContext(userContext);
  function title_span() {
    return value === false
      ? {
          border: "solid 2px #000",
          backgroundColor: "#40cdd1",
          color: "#fff",
        }
      : {
          backgroundColor: "#efefef",
          color: "#000",
        };
  }

  return (
    <>
      <div className="wrapper-contacts">
        <ul className="list">
          <div className="title">
            <span style={title_span()}>Имя</span>
            <span style={title_span()}>Фамилия</span>
            <span style={title_span()}>Телефон</span>
          </div>
          {contacts.map((contact) => (
            <Contacts
              key={contact.id}
              contact={contact}
              onClickDelete={onClickDelete}
              onClickSelect={onClickSelect}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
