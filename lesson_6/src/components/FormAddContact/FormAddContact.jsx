import { useState } from "react";
import "./FormAddContact.css";
import userContext from "../../context/userContext";
import { useContext } from "react";

export default function Forma(props) {
  const [name, setName] = useState(props.selectedContact.name);
  const [surname, setSurname] = useState(props.selectedContact.sername);
  const [phone, setPhone] = useState(props.selectedContact.phone);
  const value = useContext(userContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newElem = {
      name: name,
      phone: phone,
      surname: surname,
      id: props.selectedContact.id,
    };
    props.onSubmitButton(newElem);
  };

  return (
    <>
      <div
        className={value === false ? "wrapper-forma" : "wrapper-forma_black"}
      >
        <form className="forma">
          <h2>Добавить контакт</h2>
          <input
            defaultValue={props.selectedContact.name}
            type="text"
            name="name"
            onChange={(event) => setName(event.target.value)}
            placeholder="Имя"
          />
          <input
            defaultValue={props.selectedContact.surname}
            type="text"
            name="surname"
            onChange={(event) => setSurname(event.target.value)}
            placeholder="Фамилия"
          />
          <input
            defaultValue={props.selectedContact.phone}
            type="phone"
            name="phone"
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Телефон"
          />
          <div>
            <button className="add" onClick={onSubmit}>
              Сохранить
            </button>
            <button className="close" onClick={props.onShowNextPage}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
