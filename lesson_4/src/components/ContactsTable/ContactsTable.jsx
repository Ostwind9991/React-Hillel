import Contacts from "../Contacts/Contacts";
import "./ContactsTable.css";

export default function ContactsTable(props) {
  const { contacts } = props;
  const { onClickDelete } = props;
  const { onShowForma } = props;

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
            />
          ))}
        </ul>
        <button className="add-contact" onClick={onShowForma}>
          Добавить котакт
        </button>
      </div>
    </>
  );
}
