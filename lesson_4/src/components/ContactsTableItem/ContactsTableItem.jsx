import "./ContactsTableItem.css";

export default function Contacts(props) {
  const { name, phone, id, sername } = props.contact;
  return (
    <li className="contact">
      <span>{name}</span>
      <span>{sername}</span>
      <span>{phone}</span>
      <button onClick={() => props.onClickDelete(id)}>Delete</button>
    </li>
  );
}
