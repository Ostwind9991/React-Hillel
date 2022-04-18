import "./ContactsTableItem.css";
import userContext from "../../context/userContext";
import { useContext } from "react";

export default function Contacts(props) {
  const { name, phone, id, surname } = props.contact;
  const value = useContext(userContext);

  return (
    <li
      className={
        value === false
          ? "contact " + " contact_white"
          : "contact " + " contact_black"
      }
    >
      <span>{name}</span>
      <span>{surname}</span>
      <span>{phone}</span>
      <button onClick={() => props.onClickDelete(id)}>Delete</button>
      <button onClick={() => props.onClickSelect(props.contact)}>Update</button>
    </li>
  );
}
