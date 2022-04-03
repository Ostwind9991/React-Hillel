import { useState } from "react";
import "./Forma.css";

export default function Forma(props) {
  const [name, setName] = useState("");
  const [sername, setSername] = useState("");
  const [phone, setPhone] = useState("");
  const onSubmit = () => {
    const newElem = {
      name: name,
      phone: phone,
      sername: sername,
    };
    props.onSubmitButton(newElem);
  };

  return (
    <>
      <div className={"wrapper-forma "}>
        <form className="forma">
          <h2>Добавить контакт</h2>
          <input
            type="text"
            name="name"
            onChange={(event) => setName(event.target.value)}
            placeholder="Имя"
          />
          <input
            type="text"
            name="sername"
            onChange={(event) => setSername(event.target.value)}
            placeholder="Фамилия"
          />
          <input
            type="phone"
            name="phone"
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Телефон"
          />
          <div>
            <button className="add" onClick={onSubmit}>
              Сохранить
            </button>
            <button className="close" onClick={props.onShowContact}>
              Отмена
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
