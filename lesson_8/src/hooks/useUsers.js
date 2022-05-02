import { useState } from "react";
import { getUsers, addUsers, deleteUsers, getUser, updateUsers } from "../services/usersService";
import {   useNavigate } from 'react-router-dom';

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [edituser, setEditUser] = useState([]);

  const run = () =>
    getUsers().then((data) => {
      setUsers(data);
    });

    const getEditUser = (edituserid) =>
    getUser(edituserid).then((data) => {
      setEditUser(data);
    });

    const onSubmitButton = (user) => {
      if (user.id) {
        updateUser(user);
      } else {
        createUser(user);
      }
     };

    const createUser = (user) => {
      addUsers(user).then(() => {
        navigate("/users")
      })
    };

    const updateUser = (user) => {
      updateUsers(user).then((data) => {
        setUsers((users) =>
        users.map((item) => (item.id === user.id ? data : item))
        );
      }).then(() => {
        navigate("/users")
      });
      console.log("trtr")
    };
  
  const navigate = useNavigate();

  const deleteUser = (id) => {
    deleteUsers(id);
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };



  return {
    users,
    run,
    onSubmitButton,
    navigate,
    deleteUser,
    edituser,
    getEditUser,
  };
}
