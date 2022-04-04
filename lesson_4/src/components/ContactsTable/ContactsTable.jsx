import Contacts from "../ContactsTableItem/ContactsTableItem";
import "./ContactsTable.css";

export default function ContactsTable(props) {
  const { contacts, onClickDelete, onClickSelect } = props;

  return (
    <>
      <div className={"wrapper-contacts  "}>
        <ul className="list">
          <div className="title">
            <span>Имя</span>
            <span>Фамилия</span>
            <span>Телефон</span>
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
