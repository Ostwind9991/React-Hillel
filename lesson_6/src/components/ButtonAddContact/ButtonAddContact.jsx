import { useContext } from "react";
import userContext from "../../context/userContext";
import "./ButtonAddContact.css";

export default function ButtonAddContact(props) {
  const { onShowNextPage } = props;
  const value = useContext(userContext);

  return (
    <button
      className={value === false ? "add-contact_white" : "add-contact_black"}
      onClick={onShowNextPage}
    >
      Добавить котакт
    </button>
  );
}
