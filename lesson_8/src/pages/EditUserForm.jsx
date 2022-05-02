import useUsers from "../hooks/useUsers";
import Form from "../components/Form";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditUserForm() {
  const { onSubmitButton, getEditUser, edituser } = useUsers();
  const params = useParams();
  const {name, surname, phone} = edituser
  const [newname, setName] = useState('');
  const [newsurname, setSurname] = useState("");
  const [newphone, setPhone] = useState("");

  useEffect(() => {
    getEditUser(params.id)}, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const newElem = {
      id:params.id,
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

  if(newsurname==undefined){
    <></>} else {

      return (

    
        <Form
        newname={newname}
        newsurname={newsurname}
        newphone={newphone}
          onSubmit={onSubmit}
          setName={setName}
          setSurname={setSurname}
          setPhone={setPhone}
        />
      );
    }


}
