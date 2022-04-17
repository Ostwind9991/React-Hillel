import "./ContactsTableItem.css";

export default function Contacts(props) {
  const { name, phone, id, surname } = props.contact;
  return (
    <li className="contact">
      <span>{name}</span>
      <span>{surname}</span>
      <span>{phone}</span>
      <button onClick={() => props.onClickDelete(id)}>Delete</button>
      <button onClick={() => props.onClickSelect(props.contact)}>Update</button>
    </li>
  );
}
