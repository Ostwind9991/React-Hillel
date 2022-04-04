import "./ButtonAddContact.css";

export default function ButtonAddContact(props) {
  const { onShowNextPage } = props;

  return (
    <button className="add-contact" onClick={onShowNextPage}>
      Добавить котакт
    </button>
  );
}
