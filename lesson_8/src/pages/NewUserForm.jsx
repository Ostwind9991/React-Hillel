import useUsers from "../hooks/useUsers";
import Form from "../components/Form";
import { useState } from "react";

export default function NewUserForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { onSubmitButton } = useUsers();

  const onSubmit = (e) => {
    e.preventDefault();
    const newElem = {
      name: name,
      phone: phone,
      surname: surname,
    };
    onSubmitButton(newElem)
  };

  return (
    <Form
      onSubmit={onSubmit}
      setName={setName}
      setSurname={setSurname}
      setPhone={setPhone}
    />
  );
}
