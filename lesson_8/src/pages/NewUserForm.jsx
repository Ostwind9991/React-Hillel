import Typography from "@mui/material/Typography";
import { useState } from "react";
import Form from "../components/Form";
import useUsers from "../hooks/useUsers";

export default function NewUserForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const { onSubmitButton, deleteUser } = useUsers();

  const onSubmit = (e) => {
    e.preventDefault();
    const newElem = {
      name: name,
      phone: phone,
      surname: surname,
    };
    onSubmitButton(newElem);
  };

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{
          marginTop: "20px",
        }}
      >
        Добавить нового пользователя{" "}
      </Typography>
      <Form
        onSubmit={onSubmit}
        setName={setName}
        setSurname={setSurname}
        setPhone={setPhone}
        deleteUser={deleteUser}
      />
    </>
  );
}
