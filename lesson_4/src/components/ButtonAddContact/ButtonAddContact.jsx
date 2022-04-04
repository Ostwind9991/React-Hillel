import "./ButtonAddContact.css";

export default function ButtonAddContact(props) {
  const { onShowForma } = props;

  return (
    <button className="add-contact" onClick={onShowForma}>
      Добавить котакт
    </button>
  );
}
