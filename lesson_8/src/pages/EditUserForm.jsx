import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";
import useUsers from "../hooks/useUsers";

export default function EditUserForm() {
  const { onSubmitButton, getEditUser, edituser, deleteUser } = useUsers();
  const params = useParams();
  const [newname, setName] = useState("");
  const [newsurname, setSurname] = useState("");
  const [newphone, setPhone] = useState("");

  useEffect(() => {
    getEditUser(params.id);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const newElem = {
      id: params.id,
      name: newname,
      phone: newphone,
      surname: newsurname,
    };
    onSubmitButton(newElem);
  };

  useEffect(() => {
    setName(edituser.name);
    setSurname(edituser.surname);
    setPhone(edituser.phone);
  }, [edituser]);

  return newsurname == undefined ? (
    <></>
  ) : (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{
          marginTop: "20px",
        }}
      >
        Редактировать пользователя{" "}
      </Typography>
      <Form
        id={params.id}
        newname={newname}
        newsurname={newsurname}
        newphone={newphone}
        onSubmit={onSubmit}
        setName={setName}
        setSurname={setSurname}
        setPhone={setPhone}
        deleteUser={deleteUser}
      />
    </>
  );
}
